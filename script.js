function myFunction() {
  var name = document.getElementById("frm1").name.value;
  var pronouns = document.getElementById("frm1").pronouns.value;
  var position = document.getElementById("frm1").position.value;
  var email = document.getElementById("frm1").email.value;
  var footer = document.getElementById("frm1").footer.value;
    
  if (pronouns.length > 0) {
    var pro_text = " (".concat(pronouns, ")");
  } else {
    var pro_text = "";
  };
  document.getElementById("name").innerHTML = name.concat(pro_text);
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
};

function reset () {
  var name = "Team QSpeak";
  var pronouns = "";
  var position = "";
  var email = "";
  var footer = "Acknowledging that I live and work in the Dish with One Spoon Territory, the home of the Anishnaabe, Haudenosaunee and Missisaugas of the Credit.";
    
  if (pronouns.length > 0) {
    var pro_text = " (".concat(pronouns, ")");
  } else {
    var pro_text = "";
  };
  document.getElementById("name").innerHTML = name.concat(pro_text);
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
};

function copy_sig() {
    var target = document.getElementById('signature_id');
      var range, select;
      if (document.createRange) {
        range = document.createRange();
        range.selectNode(target)
        select = window.getSelection();
        select.removeAllRanges();
        select.addRange(range);
        document.execCommand('copy');
        select.removeAllRanges();
      } else {
        range = document.body.createTextRange();
        range.moveToElementText(target);
        range.select();
        document.execCommand('copy');
      }
};
