function moi(){

const Http = new XMLHttpRequest();
const url='https://localhost:5500/chat/app/handle_post';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    name: "Deska",
    email: "deska@gmail.com",
    phone: "342234553"
 }));
xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    console.log(data);
};
fetch(url, {
    method:"POST",
    body: JSON.stringify({
        name: "Deska",
        email: "deska@gmail.com",
        phone: "342234553"
        })
    }).then(result => {
        // do something with the result
        console.log("Completed with result:", result);
    }).catch(err => {
        // if any error occured, then catch it here
        console.error(err);
    });
}