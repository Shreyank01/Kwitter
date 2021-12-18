//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCrWVOTyzlQIsosz5_K_FurQ0UEzE1jTJU",
      authDomain: "kwitter-b49eb.firebaseapp.com",
      databaseURL: "https://kwitter-b49eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-b49eb",
      storageBucket: "kwitter-b49eb.appspot.com",
      messagingSenderId: "1028691506916",
      appId: "1:1028691506916:web:6cc9639631a3401fc35ef1",
      measurementId: "G-V3H05DC0CX"
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
            like:0
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
msg_to_be_shown = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value =" + like + "onclick='update_like(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button>";
row = name_with_tag + msg_to_be_shown + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      
      window.location = "index.html";


}

function update_like(message_id) {
      console.log("you have clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatelikes = Number(likes) + 1;
      console.log(updatelikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      });
}