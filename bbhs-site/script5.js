function sendEmail() {
    // Retrieve form values
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

    // Check if all required fields are filled
    if (!oldBoyFirstName || !oldBoyLastName || !oldBoyEmail || !phone || !marritalStatus || !occupation || !noOfKids || !residentialAddress || !phoneNumberOfNextOfKin || !relationshipWithNextOfKin) {
        alert("Please fill out all required fields.");
        return;
    }

    // Send email using SMTP.js
    Email.send({
        SecureToken: "205e039a-50bf-4d3a-8a88-bac749cf904a",
        To: 'rudolphbull@gmail.com',
        From: oldBoyEmail,
        Subject: "New Member Registration",
        Body: `
            First Name: ${oldBoyFirstName}<br>
            Last Name: ${oldBoyLastName}<br>
            Email: ${oldBoyEmail}<br>
            Phone: ${phone}<br>
            Marrital Status: ${marritalStatus}<br>
            Occupation: ${occupation}<br>
            Number of Kids: ${noOfKids}<br>
            Residential Address: ${residentialAddress}<br>
            Phone Number of Next of Kin: ${phoneNumberOfNextOfKin}<br>
            Relationship with Next of Kin: ${relationshipWithNextOfKin}
        `
    }).then(
        message => alert("Data Submitted Successfully"),
        error => alert("Failed to submit data. Please try again.")
    );
}
