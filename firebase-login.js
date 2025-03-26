let loggedIn = false;
let auth = null;

function login(user) {
  if (user) {
    loggedIn = true;
    document.getElementById("login-area").innerHTML =
      `<p>Welcome, ${user.email}</p>
       <button onclick="logout()">Logout</button>`;
  } else {
    loggedIn = false;
    document.getElementById("login-area").innerHTML = `
      <input type="email" id="email" placeholder="Email">
      <input type="password" id="password" placeholder="Password">
      <button onclick="doLogin()">Login</button>
    `;
  }
}

function doLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    alert(error.message);
  });
}

function logout() {
  auth.signOut();
}

window.onload = function () {
  auth = firebase.auth();
  auth.onAuthStateChanged(login);
};
