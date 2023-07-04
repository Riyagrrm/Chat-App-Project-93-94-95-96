user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

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

function addRoom()
{
    room_name=document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        key:"key"
  })
  localStorage.setItem("room_name",room_name)
  window.location="chat_page.html"
}
function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room_name-" + Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML+=row
});});}
getData();
function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location("chat_page.html")
}