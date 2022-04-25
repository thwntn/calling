const JsSIP = require('jssip')


function Call(phone, setState, prev) {
  let preDisplay = prev
  console.log(prev);
  var socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
  var configuration = {
  sockets  : [ socket ],
  uri      : '105@2-test1.gcalls.vn:50061',
  password : 'test1105'
  };


  var coolPhone = new JsSIP.UA(configuration);

  coolPhone.on('connected', function(e){
    var session = coolPhone.call(`sip:${phone}@2-test1.gcalls.vn:50061`, options);
    console.log('connected!');
  });

  coolPhone.on('disconnected', function(e){
      console.log('no connect!');
  });


  coolPhone.start();


  var eventHandlers = {
      'progress': function(e) {
        setState(5)
        console.log(preDisplay);
      },
      'failed': function(e) {
        alert(e.cause);
        setState(preDisplay);
      },
      'ended': function(e) {
        console.log('call ended with cause: '+ e);
        setState(preDisplay);

      },
      'confirmed': function(e) {
        alert(e.cause);
        setState(preDisplay);

      }
    };
    
    var options = {
      'sessionTimersExpires': 120,
      'eventHandlers'    : eventHandlers,
      'mediaConstraints' : { 'audio': true, 'video': true }
    };
    
}

export default Call