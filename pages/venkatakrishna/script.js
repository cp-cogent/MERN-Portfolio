function myPage(){
    var password;
    var correctPass = "123456";
    password = prompt("Enter in the password:","");

if(password == correctPass) {
        alert('click OK to view this site');
        window.location ="https://loquacious-taffy-c427c8.netlify.app/";                            
} else {
        window.location = "index.html";
} 
}
