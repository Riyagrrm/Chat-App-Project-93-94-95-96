var user_name=localStorage.getItem("user_name")
var room_name=localStorage.getItem("room_name")
var firebaseConfig = {
    apiKey: "AIzaSyDGJCHkQ3iMjai2r-H_BEHYh2ZBMR4il2w",
    authDomain: "chatapp-96b8e.firebaseapp.com",
    databaseURL: "https://chatapp-96b8e-default-rtdb.firebaseio.com",
    projectId: "chatapp-96b8e",
    storageBucket: "chatapp-96b8e.appspot.com",
    messagingSenderId: "845752243700",
    appId: "1:845752243700:web:af3042ff6196bf92b8d5a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function send()
{
      msg=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("message").value=" "
}
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}