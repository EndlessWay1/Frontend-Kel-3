// check auth

async function Profile() {
  const user = auth();

  const outerDiv = $("<div id='user-info'></div>");

  if (user) {
    window.location.href = "./login.html";
  }

  //   (<div id=""></div>)

  return outerDiv;
}

$(document).ready(function () {
  // fetch
  $("#root").append(Profile());
});
