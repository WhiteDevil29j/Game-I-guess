var firebaseConfig = {
    apiKey: "AIzaSyA6audyUcg2xXotho5Mz8d5BSaNI3OSxVY",
    authDomain: "coronaform-17b0c.firebaseapp.com",
    databaseURL: "https://coronaform-17b0c-default-rtdb.firebaseio.com",
    projectId: "coronaform-17b0c",
    storageBucket: "coronaform-17b0c.appspot.com",
    messagingSenderId: "191057523133",
    appId: "1:191057523133:web:0cf774695395abfffba2d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var input = firebase.database().ref('input')
document.getElementById('coronaform').addEventListener('submit', submitform)
function submitform(e) {
  e.preventDefault();
  var name = getInputval('name')
  var profession = getInputval('profession')
  var mobile = getInputval('mobile')
  var state = getInputval('state')
  var email = getInputval('email')
  var dob = getInputval('dob')
  if (validemail)
    message(name,mobile,email,profession,dob,state)
}

function message(name, mobile, email, dob, state, profession)
{
  var newuserinput = input.push()
  newuserinput.set({
    name: name,
    mobile: mobile,
    email: email,
    dob: dob,
    state: state,
    profession:profession,
  })
  alert("Submitted")
}
  
function validemail()
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
  alert("Invalid Email")
  return (false)
}