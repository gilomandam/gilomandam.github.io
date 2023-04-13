function onLogin() {
  let em = document.forms["myForm"]["Email"].value;
  let pw = document.forms["myForm"]["Pass"].value;

  if (em == "gil@gmail.com" && pw == "12345") {
    window.location.href = "welcome.html";
  }
  else {
    alert("Invalid Email and Password");
  }
}


function onSubmit() {
  let nm = document.forms["regform"]["name"].value;
  let em = document.forms["regform"]["email"].value;
  let pn = document.forms["regform"]["pnum"].value;
  let ad = document.forms["regform"]["add"].value;
  let pc = document.forms["regform"]["pcode"].value;
  let bt = document.forms["regform"]["birth"].value;
  let pw = document.forms["regform"]["pass"].value;
  let cpw = document.forms["regform"]["cpass"].value;

  if (nm == "gil" && em == "gil@gmail.com" && pn == "6312345678" && ad == "cdo" && pc == "1234" && bt == "01/01/01" && pw == "12345" && cpw == "12345") {
    window.location.href = "welcome.html";
  }

}