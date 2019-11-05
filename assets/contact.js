// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_JecRbUtH_dQrNjrkNTAXp53vEJUH9qg",
  authDomain: "sacramento-sound-machine.firebaseapp.com",
  databaseURL: "https://sacramento-sound-machine.firebaseio.com",
  projectId: "sacramento-sound-machine",
  storageBucket: "sacramento-sound-machine.appspot.com",
  messagingSenderId: "830321232990",
  appId: "1:830321232990:web:9fdc5af74b24a6d80b78cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(".add").on("click", function (event) {
  //event.preventDefault();
  var name = $(".name").val().trim();
  var email = $(".email").val().trim();
  var message = $(".message").val().trim();

  if(name.length > 0 && email.length > 0 && message.length > 0 && validateEmail(email)){
    console.log("passes validation");

    var contactInfo = {
      userName: name,
      userEmail: email,
      userMessage: message
    };
    database.ref().push(contactInfo);

    $(".name").val("");
    $(".email").val("");
    $(".message").val("");

    document.querySelector(".validationstatus").hidden = false;
    setTimeout(() => {
      document.querySelector(".validationstatus").hidden = true;

    }, 5000);
  }
  else{
    console.log("failed validation");
  }


  //alert("Contact info successfully sent");




});
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

window.addEventListener('load', init, false);
function init(){
  document.querySelector(".validationstatus").hidden = true;
}
