function myFunction() {
  var name = document.getElementById("frm1").name.value;
  var pronouns = document.getElementById("frm1").pronouns.value;
  var position = document.getElementById("frm1").position.value;
  var email = document.getElementById("frm1").email.value;
  var footer = document.getElementById("frm1").footer.value;
    
  document.getElementById("name").innerHTML = name;
  if (pronouns.length > 0) {
    document.getElementById("pronouns").innerHTML = "(".concat(pronouns, ")");
  } else {
      document.getElementById("pronouns").innerHTML = "";
  };
  document.getElementById("position").innerHTML = position;
  if (email.length > 0) {
      document.getElementById("email").innerHTML = email;
      var email_link = document.getElementById('email');
        email_link.setAttribute('href', 'mailto:'.concat(email));
  } else {
      document.getElementById("email").innerHTML = "lgbt.colourfully@gmail.com";
      var email_link = document.getElementById('email');
        email_link.setAttribute('href', 'mailto:lgbt.colourfully@gmail.com');
  };
  document.getElementById("footer").innerHTML = footer;
}