window.onload = function () {
  var saved = JSON.parse(localStorage.getItem("sai"));
  if (saved) {
    var table = document.getElementById("sai");
    saved.forEach(function (user) {
      var row = table.insertRow(-1);
      var a = row.insertCell(0);
      var b = row.insertCell(1);
      var c = row.insertCell(2);
      var d = row.insertCell(3);
      var e = row.insertCell(4);
      a.innerHTML = user.name;
      b.innerHTML = user.email;
      c.innerHTML = user.password;
      d.innerHTML = user.dob;
      e.innerHTML = user.accept ? "true" : "false";
    });
  }
};

function validate() {
  var dob = document.getElementById("dob").value;
  var today = new Date();
  var birthdate = new Date(dob);
  var age = today.getFullYear() - birthdate.getFullYear();
  if (
    birthdate.getMonth() > today.getMonth() ||
    (birthdate.getMonth() == today.getMonth() &&
      birthdate.getDate() > today.getDate())
  ) {
    age--;
  }

  if (age >= 18 && age <= 55) {
    return true;
  } else {
    alert("18 and 55 years old to register.");
    return false;
  }
}

function register() {
  if (!validate()) {
    return;
  }
  var table = document.getElementById("sai");
  table.style.display = "table";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var accept = document.getElementById("terms").checked;
  var sai = JSON.parse(localStorage.getItem("sai")) || [];
  sai.push({
    name: name,
    email: email,
    password: password,
    dob: dob,
    accept: accept
  });
  localStorage.setItem("sai", JSON.stringify(sai));
  var row = table.insertRow(-1);
  var a = row.insertCell(0);
  var b = row.insertCell(1);
  var c = row.insertCell(2);
  var d = row.insertCell(3);
  var e = row.insertCell(4);
  a.innerHTML = name;
  b.innerHTML = email;
  c.innerHTML = password;
  d.innerHTML = dob;
  e.innerHTML = accept ? "true" : "false";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("terms").checked = false;
}
