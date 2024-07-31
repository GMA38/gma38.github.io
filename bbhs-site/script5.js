function myFunction() {
    var myPresident = document.getElementById('myPresident').value;
    // var myPresi1st2 = document.getElementById('presidentFirstName2').value;
    // var myPresi1st3 = document.getElementById('presidentFirstName3').value;

    // var myPresident2 = document.getElementById('myPresident2').value;
    // var myPresident3 = document.getElementById('myPresident3').value;
    // var myPresiLast2 = document.getElementById('presidentLastName2').value;
    // var myPresiLast3 = document.getElementById('presidentLastName3').value;

    var myVicePresident = document.getElementById('myVicePresident').value;
    // var myvicePresi1st2 = document.getElementById('vpFirstName2').value;
    // var myvicePresi1st3 = document.getElementById('vpFirstName3').value;

    // var myVicePresident2 = document.getElementById('myVicePresident2').value;
    // var myVicePresident3 = document.getElementById('myVicePresident3').value;
    // var myvicePresiLast2 = document.getElementById('vpFirstName2').value;
    // var myvicePresiLast3 = document.getElementById('vpFirstName3').value;

    var mySecretary = document.getElementById('mySecretary').value;
    // var mySecre1st2 = document.getElementById('secretaryFirstName2').value;
    // var mySecre1st3 = document.getElementById('secretaryFirstName3').value;

    // var mySecretary2 = document.getElementById('mySecretary2').value;
    // var mySecretary3 = document.getElementById('mySecretary3').value;
    // var mySecreLast2 = document.getElementById('secretaryLastName2').value;
    // var mySecreLast3 = document.getElementById('secretaryLastName3').value;

    var myWelfare = document.getElementById('myWelfare').value;
    // var myWelfare1st2 = document.getElementById('welfareFirstName2').value;
    // var myWelfare1st3 = document.getElementById('welfareFirstName3').value;

    // var myWelfare2 = document.getElementById('myWelfare2').value;
    // var myWelfare3 = document.getElementById('myWelfare3').value;
    // var myWelfareLast2 = document.getElementById('welfareLastName2').value;
    // var myWelfareLast3 = document.getElementById('welfareLastName3').value;

    var myDeputyWelfare = document.getElementById('myDeputyWelfare').value;
    // var mydeputyWelfare1st2 = document.getElementById('deputyWelfareFirstName2').value;
    // var mydeputyWelfare1st3 = document.getElementById('deputyWelfareFirstName3').value;

    // var myDeputyWelfare2 = document.getElementById('myDeputyWelfare2').value;
    // var myDeputyWelfare3 = document.getElementById('myDeputyWelfare3').value;
    // var mydeputyWelfareLast2 = document.getElementById('deputyWelfarelastName2').value;
    // var mydeputyWelfareLast3 = document.getElementById('deputyWelfarelastName3').value;

    var myTreasurer = document.getElementById('myTreasurer').value;
    // var myTreasurer1st2 = document.getElementById('treasurerFirstName2').value;
    // var myTreasurer1st3 = document.getElementById('treasurerFirstName3').value;

    // var myTreasurer2 = document.getElementById('myTreasurer2').value;
    // var myTreasurer3 = document.getElementById('myTreasurer3').value;
    // var myTreasurerLast2 = document.getElementById('treasurerLastName2').value;
    // var myTreasurerLast3 = document.getElementById('treasurerLastName3').value;

    var myFinancialSecretary = document.getElementById('myFinancialSecretary').value;
    // var myFinancialSecre1st2 = document.getElementById('financialSecretaryFirstName2').value;
    // var myFinancialSecre1st3 = document.getElementById('financialSecretaryFirstName3').value;

    // var myFinancialSecretary2 = document.getElementById('myFinancialSecretary2').value;
    // var myFinancialSecretary3 = document.getElementById('myFinancialSecretary3').value;
    // var myFinancialSecre2 = document.getElementById('financialSecretaryLastName2').value;
    // var myFinancialSecre3 = document.getElementById('financialSecretaryLastName3').value;

    var myDeputyFinancialSecretary = document.getElementById('myDeputyFinancialSecretary').value;
    // var myDepFinancialSecre1st2 = document.getElementById('deputyFinancialSecretaryFirstName2').value;
    // var myDepFinancialSecre1st3 = document.getElementById('deputyFinancialSecretaryFirstName3').value;

    // var myDeputyFinancialSecretary2 = document.getElementById('myDeputyFinancialSecretary2').value;
    // var myDeputyFinancialSecretary3 = document.getElementById('myDeputyFinancialSecretary3').value;
    // var myDepFinancialSecreLast2 = document.getElementById('deputyFinancialSecretaryLastName2').value;
    // var myDepFinancialSecreLast3 = document.getElementById('deputyFinancialSecretaryLastName3').value;

    var mySocialSecretary = document.getElementById('mySocialSecretary').value;
    // var mySocialSec1st2 = document.getElementById('socialSecretaryFirstName2').value;
    // var mySocialSec1st3 = document.getElementById('socialSecretaryFirstName3').value;

    // var mySocialSecretary2 = document.getElementById('mySocialSecretary2').value;
    // var mySocialSecretary3 = document.getElementById('mySocialSecretary3').value;
    // var mySocialSecLast2 = document.getElementById('socialSecretaryLastName2').value;
    // var mySocialSecLast3 = document.getElementById('socialSecretaryLastName3').value;

    var myVoters1stName = document.getElementById('votersFirstName').value;

    var myVotersLastName = document.getElementById('votersLastName').value;

    var myVotersEmail = document.getElementById('votersEmail').value;

    var myVotersPhone = document.getElementById('phone').value;
    

//     if (pw ==cpw ){
//         window.location.href="welcome.html";
// } else {
//     alert("Confirm Password does not match.");
// }
}

function sendEmail() {
    Email.send({
SecureToken: "205e039a-50bf-4d3a-8a88-bac749cf904a",        
To : 'rudolphbull@gmail.com',
From: document.getElementById('email').value,
Subject : "New Account Registration",
Body : "myPresident1: " + document.getElementById('myPresident1').value
// Body : "myPresident2: " + document.getElementById('myPresident2').value
// Body : "myPresident3: " + document.getElementById('myPresident3').value
    //    + "<br> presidentLastName1: " + document.getElementById('presidentLastName1').value
    //    + "<br> presidentLastName2: " + document.getElementById('presidentLastName2').value
    //    + "<br> presidentLastName3: " + document.getElementById('presidentLastName3').value
       + "<br> myVicePresident: " + document.getElementById('myVicePresident').value
    //    + "<br> myVicePresident2: " + document.getElementById('myVicePresident2').value
    //    + "<br> myVicePresident3: " + document.getElementById('myVicePresident3').value
    //    + "<br> vpLastName1: " + document.getElementById('vpLastName1').value
    //    + "<br> vpLastName2: " + document.getElementById('vpLastName2').value
    //    + "<br> vpLastName3: " + document.getElementById('vpLastName3').value
       + "<br> mySecretary: " + document.getElementById('mySecretary').value
    //    + "<br> mySecretary2: " + document.getElementById('mySecretary2').value
    //    + "<br> mySecretary3: " + document.getElementById('mySecretary3').value
    //    + "<br> secretaryLastName1: " + document.getElementById('secretaryLastName1').value
    //    + "<br> secretaryLastName2: " + document.getElementById('secretaryLastName2').value
    //    + "<br> secretaryLastName3: " + document.getElementById('secretaryLastName3').value
       + "<br> myWelfare: " + document.getElementById('myWelfare').value
    //    + "<br> myWelfare2: " + document.getElementById('myWelfare2').value
    //    + "<br> myWelfare3: " + document.getElementById('myWelfare3').value
    //    + "<br> welfareLastName1: " + document.getElementById('welfareLastName1').value
    //    + "<br> welfareLastName2: " + document.getElementById('welfareLastName2').value
    //    + "<br> welfareLastName3: " + document.getElementById('welfareLastName3').value
       + "<br> myDeputyWelfare: " + document.getElementById('myDeputyWelfare').value
    //    + "<br> myDeputyWelfare2: " + document.getElementById('myDeputyWelfare2').value
    //    + "<br> myDeputyWelfare3: " + document.getElementById('myDeputyWelfare3').value
    //    + "<br> deputyWelfareLastName1: " + document.getElementById('deputyWelfareLastName1').value
    //    + "<br> deputyWelfareLastName2: " + document.getElementById('deputyWelfareLastName2').value
    //    + "<br> deputyWelfareLastName3: " + document.getElementById('deputyWelfareLastName3').value
       + "<br> myTreasurer: " + document.getElementById('myTreasurer').value
    //    + "<br> myTreasurer2: " + document.getElementById('myTreasurer2').value
    //    + "<br> myTreasurer3: " + document.getElementById('myTreasurer3').value
    //    + "<br> treasurerLastName1: " + document.getElementById('treasurerLastName1').value
    //    + "<br> treasurerLastName2: " + document.getElementById('treasurerLastName2').value
    //    + "<br> treasurerLastName3: " + document.getElementById('treasurerLastName3').value
       + "<br> myFinancialSecretary: " + document.getElementById('myFinancialSecretary').value
    //    + "<br> myFinancialSecretary2: " + document.getElementById('myFinancialSecretary2').value
    //    + "<br> myFinancialSecretary3: " + document.getElementById('myFinancialSecretary3').value
    //    + "<br> financialSecretaryLastName1: " + document.getElementById('financialSecretaryLastName1').value
    //    + "<br> financialSecretaryLastName2: " + document.getElementById('financialSecretaryLastName2').value
    //    + "<br> financialSecretaryLastName3: " + document.getElementById('financialSecretaryLastName3').value
       + "<br> myDeputyFinancialSecretary: " + document.getElementById('myDeputyFinancialSecretary').value
    //    + "<br> myDeputyFinancialSecretary2: " + document.getElementById('myDeputyFinancialSecretary2').value
    //    + "<br> myDeputyFinancialSecretary3: " + document.getElementById('myDeputyFinancialSecretary3').value
    //    + "<br> deputyFinancialSecretaryLastName1: " + document.getElementById('deputyFinancialSecretaryLastName1').value
    //    + "<br> deputyFinancialSecretaryLastName2: " + document.getElementById('deputyFinancialSecretaryLastName2').value
    //    + "<br> deputyFinancialSecretaryLastName3: " + document.getElementById('deputyFinancialSecretaryLastName3').value

       + "<br> mySocialSecretary: " + document.getElementById('mySocialSecretary').value
    //    + "<br> mySocialSecretary2: " + document.getElementById('mySocialSecretary2').value
    //    + "<br> mySocialSecretary3: " + document.getElementById('mySocialSecretary3').value
    //    + "<br> socialSecretaryLastName1: " + document.getElementById('socialSecretaryLastName1').value
    //    + "<br> socialSecretaryLastName2: " + document.getElementById('socialSecretaryLastName2').value
    //    + "<br> socialSecretaryLastName3: " + document.getElementById('socialSecretaryLastName3').value
       + "<br> votersFirstName: " + document.getElementById('votersFirstName').value
       + "<br> votersLastName: " + document.getElementById('votersLastName').value
       + "<br> votersEmail: " + document.getElementById('votersEmail').value
       + "<br> phone: " + document.getElementById('phone').value
}).then(
message => alert("Vote casted")
);
}