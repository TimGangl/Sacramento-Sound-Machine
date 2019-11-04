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
  event.preventDefault();

  var name = $(".name").val().trim();
  var email = $(".email").val().trim();
  var message = $(".message").val().trim();

  var contactInfo = {
    userName: name,
    userEmail: email,
    userMessage: message
  };
  database.ref().push(contactInfo);

  alert("Contact info successfully sent");

  $(".name").val("");
  $(".email").val("");
  $(".message").val("");


});
