
//ADD YOUR FIREBASE LINKS HERE
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
user_name = localStorage.getItem("user_name");
document.getElementById("text_username").innerHTML = "Welcome " + user_name +"!";

function add_room() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room name" , room_name);

      window.location= "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div id=" + room_names + " class='room_name' onclick='redirectToRoomName(this.id)' >#"+  Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML = row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {

      console.log(room_name);
      localStorage.setItem("room name" , room_name);
      window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room name" , room_name);
      localStorage.removeItem("username" , user_name);
      window.location= "index.html";

}