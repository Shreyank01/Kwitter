
//ADD YOUR FIREBASE LINKS HERE
var   firebaseConfig = {
      apiKey: "AIzaSyAjSPeAn3x-uUzA9FPR-WRUc-R2MmFknKw",
      authDomain: "kwitter-bd349.firebaseapp.com",
      projectId: "kwitter-bd349",
      storageBucket: "kwitter-bd349.appspot.com",
      messagingSenderId: "359450093476",
      appId: "1:359450093476:web:8a42268f781cce091a8331",
      measurementId: "G-9BVHP137LC"
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