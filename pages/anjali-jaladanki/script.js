function myFunction() {
var password = prompt("Enter in the password");
        if (password=="0212") {
            windows.location = "/pages/anjali-jaladanki/index.html"
          
        }
        else 
        {
          document.getElementById("msg").value = "test";  
          windows.location = "index.html"
        }
    }