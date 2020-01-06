function argue() {
    let p = document.getElementById("argue_text");
    p.innerText = "I'm Right";
}

function argueMore() {
    let p = document.getElementById("argue_text");
    p.innerText = "No, I'm Right";
}

function dontHover() {
    alert("I told you not to hover over me!");
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    let pass = document.getElementById("password").value;

    if(pass !== "12345678") {
        alert("Incorrect Password!");
    } else {
        document.getElementById("formStatus").innerText = "Correct Credentials!"
    }
  });