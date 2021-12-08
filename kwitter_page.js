const firebaseConfig = {
    apiKey: "AIzaSyCy_QN69la-ddJFxIWI1lUP79blMLtEdVQ",
    authDomain: "project-44-248df.firebaseapp.com",
    databaseURL: "https://project-44-248df-default-rtdb.firebaseio.com",
    projectId: "project-44-248df",
    storageBucket: "project-44-248df.appspot.com",
    messagingSenderId: "539357454762",
    appId: "1:539357454762:web:6c12ad91d673f543d94bd3",
    measurementId: "G-EVD9P1P4NP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();
