
const form = document.getElementById("rgForm");


form.addEventListener('submit', (event) => {
    event.preventDefault();


    if (validateForm() == true) {
        window.location.href = "../eventlist.html";
    }
});

function validateForm() {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var phoneno = document.getElementById("inputPhoneno").value;
    var password = document.getElementById("inputPassword").value;

    var regName = /\d+$/g;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^[+]*[\d\s]{10,15}$/
    var regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/g;


    if (name == "" || regName.test(name)) {
        alert("Please Enter Your Name.");
        return false;
    }
    var userName = localStorage.setItem("Name", name);


    if (email == "" || !regEmail.test(email)) {
        alert("Please enter a valid e-mail address.");
        return false;
    }
    var emailId = localStorage.setItem("Email", email);


    if (phoneno == "" || !regPhone.test(phoneno)) {
        alert("Enter Valid Phone number");
        return false;
    }
    var phoneNo = localStorage.setItem("Phone", phoneno);


    if (regPassword == "" || !regPassword.test(password)) {
        alert("Enter Valid Password");
        return false;
    }
    var passWord = localStorage.setItem("passWord", password);
    return true;
}