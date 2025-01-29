var firstName = prompt("First Name: ", "0");
var lastName = prompt("Last Name: ", "0");
var birthyear = prompt("Birth Year: ", "0");
var year = 2025;
var age = year - parseInt(birthyear);
document.getElementById("greet").innerHTML = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";  
