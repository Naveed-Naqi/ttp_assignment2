//Button 1 argues
function argue() {
    let p = document.getElementById("argue_text");
    p.innerText = "I'm Right";
}
//Button 2 argues back
function argueMore() {
    let p = document.getElementById("argue_text");
    p.innerText = "No, I'm Right";
}

//Function telling not to hover
function dontHover() {
    alert("I told you not to hover over me!");
}

//Event listener for the form, which checks the password credentials
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    let pass = document.getElementById("password").value;

    if(pass !== "12345678") {
        alert("Incorrect Password!");
    } else {
        document.getElementById("formStatus").innerText = "Correct Credentials!"
    }
  });