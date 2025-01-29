function myFunction() {
  
  var nickname = "Marga";
  var height = "59.8425 inches";
  var weight = "48 kg";
  var txt;
  if (confirm("Do you wish to share your personal information with the site?")) {
    txt = console.log("Name: " + nickname + "\nHeight: " + height + "\nWeight: " + weight);
  } else {
    txt = console.log("User does not wish to share his/her information");
  }
  document.getElementById("demo").innerHTML = txt;
}
