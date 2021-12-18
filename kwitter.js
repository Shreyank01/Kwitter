function add_user() {
    user_name = document.getElementById("username").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}

function logout() {
    localStorage.removeItem("room name" , room_name);
    localStorage.removeItem("username" , user_name);
    window.location("index.html");

}