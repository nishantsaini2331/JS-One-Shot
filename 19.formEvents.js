function getElementById(id) {
  return document.getElementById(id);
}

getElementById("username").focus();
// getElementById("username").blur()

getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = getElementById("username").value.trim();
  let password = getElementById("password").value.trim();

  if (!username) {
    getElementById("error-msg").textContent = "username is required";
    return;
  }
  if (!password) {
    getElementById("error-msg").textContent = "Password is required";
    return;
  }
  getElementById("error-msg").textContent = "";
  console.log({ username, password });
  console.log("login....");
});

getElementById("username").addEventListener("input", (e) => {
  e.stopPropagation();
  if (e.target.value.trim()) {
    getElementById("error-msg").textContent = "";
  }
});

getElementById("password").addEventListener("input", (e) => {
  e.stopPropagation();
  if (e.target.value.trim()) {
    getElementById("error-msg").textContent = "";
  }
});
