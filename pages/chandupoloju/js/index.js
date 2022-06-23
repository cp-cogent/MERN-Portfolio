function myFunction() {
    let text;
    let password = prompt("Please enter your password : 1234");
    if (password == null || password == "") {
        prompt("enter valid password");
    } 
    if (password == 1234) {
        window.open('/pages/chandupoloju/index.html')
      }
      else {
        prompt("wrong password");
    }
    document.getElementById("demo").innerHTML = text;
  }