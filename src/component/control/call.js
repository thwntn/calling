const JsSIP = require('jssip')


// handle info
let webSocket = sessionStorage.getItem('webSocket')
let url = `${sessionStorage.getItem('userName')}@2-test1.gcalls.vn:50061`
let password = sessionStorage.getItem('password')

function Call(phone, setState, prev) {
  let preDisplay = prev
  var socket = new JsSIP.WebSocketInterface(webSocket);
  console.log(sessionStorage.getItem('webSocket'));
  console.log(sessionStorage.getItem('userName'));
  var configuration = {
  sockets  : [ socket ],
  uri      : url,
  password: 'test1105'
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