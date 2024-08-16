function myFunction() {
    var oldBoyFirstName = document.getElementById('oldBoyFirstName').value;

    var oldBoyLastName = document.getElementById('oldBoyLastName').value;

    var oldBoyEmail = document.getElementById('oldBoyEmail').value;

    var phone = document.getElementById('phone').value;
    

    var marritalStatus = document.getElementById('marritalStatus').value;

    var occupation = document.getElementById('occupation').value;

    var noOfKids = document.getElementById('noOfKids').value;

    var residentialAddress = document.getElementById('residentialAddress').value;

    var phoneNumberOfNextOfKin = document.getElementById('phoneNumberOfNextOfKin').value;

    var relationshipWithNextOfKin = document.getElementById('relationshipWithNextOfKin').value;

  

}

function sendEmail() {
    Email.send({
SecureToken: "205e039a-50bf-4d3a-8a88-bac749cf904a",        
To : 'rudolphbull@gmail.com',
From: document.getElementById('oldBoyEmail').value,
Subject : "New Member Registration",
Body : "oldBoyFirstName: " + document.getElementById('oldBoyFirstName').value
       + "<br> oldBoyLastName: " + document.getElementById('oldBoyLastName').value
       + "<br> oldBoyEmail: " + document.getElementById('oldBoyEmail').value
       + "<br> phone: " + document.getElementById('phone').value
       + "<br> marritalStatus: " + document.getElementById('marritalStatus').value
       + "<br> occupation: " + document.getElementById('occupation').value
       + "<br> noOfKids: " + document.getElementById('noOfKids').value
       + "<br> residentialAddress: " + document.getElementById('residentialAddress').value
       + "<br> phoneNumberOfNextOfKin: " + document.getElementById('phoneNumberOfNextOfKin').value
       + "<br> relationshipWithNextOfKin: " + document.getElementById('relationshipWithNextOfKin').value
}).then(
message => alert("Data Submitted")
);
}