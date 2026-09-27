// check auth
import { formatDistanceToNow } from "https://cdn.jsdelivr.net/npm/date-fns@4.4.0/+esm";

function Profile() {
  const user = auth();

  const outerDiv = $("<div id='user-info'></div>");

  if (!user) {
    window.location.href = "./login.html";
  }

  outerDiv.append(`<div
    id="profile"
    class="card"
  >
    <div class="card-body">
        <h4 class="card-title text-center fs-2">User Profile</h4>
        <p class='text-center'><span>Joined since ${formatDistanceToNow(user.joined, { addSuffix: true })}</span></p>
        <div class='profile-content'>
            <h5>Username</h5>
            <div class="container-fluid">
                ${user.username}
            </div>
        </div>
        <div class='profile-content'>
            <h5>Email</h5>
            <div class="container-fluid">
                ${user.email}
            </div>
        </div>
    </div>
  </div>`);
  return outerDiv;
}

$(document).ready(function () {
  // fetch
  $("#root").append(Profile());
});
