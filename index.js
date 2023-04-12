
const submit_btn = document.querySelector("btn");
  submit_btn.onclick = () => {
    alert('Hi Gil')
    //all input data received this variables
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pnumber = document.getElementById("pnumber").value;
    const pic = document.getElementById("pic").value;
    const address = document.getElementById("address").value;
    const pcode = document.getElementById("pcode").value;
    const birth = document.getElementById("birth").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    //now store this data in your web browser store

    localStorage.setItem('Name', name);
    localStorage.setItem('Email Address', email);
    localStorage.setItem('Phone Number', pnumber);
    localStorage.setItem('Picture', pic);
    localStorage.setItem('Address', address);
    localStorage.setItem('PCode', pcode);
    localStorage.setItem('DateofBirth', birth);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    //write some condition
    if (name == "" && email == "" && pnumber == "" && pic == "" && address == "" && pcode == "" && birth == "" && pass == "" && cpass == "") {
      alert("Input field has no value");
    }
    else {
      if (pass !== cpass) {
        alert("password not mactching");
      } else {
        alert('registration successful');
      }


    }

  }