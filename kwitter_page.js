
    var firebaseConfig = {
      apiKey: "AIzaSyBFQ-W9sb30A0F6NAPbCXqP0oNLv_6C67A",
      authDomain: "kwitter-80805.firebaseapp.com",
      databaseURL: "https://kwitter-80805-default-rtdb.firebaseio.com",
      projectId: "kwitter-80805",
      storageBucket: "kwitter-80805.appspot.com",
      messagingSenderId: "326637568738",
      appId: "1:326637568738:web:aea541945d17a25c2054bb",
      measurementId: "G-DCBKBZ0PJ0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   room_name = localStorage.getItem("room name");
   user_name = localStorage.getItem("user_name");

function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
           
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
like = message_data["like"];
name = message_data["name"];
message = message_data["message"];
name_with_tag = "<h4>" + name +"<img src='tick.png' class='user_tick'></h4>";
msg_to_be_shown = "<h4 class='message_h4'>" + message + "</h4> <hr>";
row = name_with_tag + msg_to_be_shown 
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      
      window.location = "index.html";


}

