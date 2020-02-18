function cardnumbervalidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var num = document.getElementById("cardNumber").value;
    var data = regex.test(num);
    if (data) {
        document.getElementById("cardnumber").style.display = "none";
        document.getElementById("cardnumberspace").style.display = "none";
    }
    else {
        document.getElementById("cardnumber").style.display = "block";
        document.getElementById("cardnumberspace").style.display = "block";
    }
}
function validateSecurityCode() {
    var ccv = document.getElementById("securityNumber").value;
    var regex = /^[0-9]{3}$/;
    var securitynum = regex.test(ccv);
    if (securitynum) {
        document.getElementById("ccv").style.display = "none";
        document.getElementById("ccvspace").style.display = "none";
    }
    else {
        document.getElementById("ccv").style.display = "block";
        document.getElementById("ccvspace").style.display = "block";
    }
}
function ExpirydateValidation() {
    var month = document.getElementById("months").value;
    if (!month ==0) {

        document.getElementById("yearandmonth").style.display = "none";
         document.getElementById("datespace").style.display = "none";
    }
    else {
        document.getElementById("yearandmonth").style.display = "block";
        document.getElementById("datespace").style.display = "block";
    }
}

function CardholderNameValidation() {
    var name = document.getElementById("cardHoldersName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var cardholdername = regex.test(name);
    if (cardholdername) {

        document.getElementById("name").style.display = "none";
        document.getElementById("namespace").style.display = "none";
    }
    else {
        document.getElementById("name").style.display = "block";
        document.getElementById("namespace").style.display = "block";
    }
}
function Addressvalidation() {
    var address = document.getElementById("Address1").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address").style.display = "none";
        document.getElementById("addressspace").style.display = "none";
    }
    else {
        document.getElementById("address").style.display = "block";
        document.getElementById("addressspace").style.display = "block";
    }
}
function Address2validation() {
    var address = document.getElementById("Address").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address").style.display = "none";
        document.getElementById("addressspace").style.display = "none";
    }
    else {
        document.getElementById("address").style.display = "block";
        document.getElementById("addressspace").style.display = "block";
    }
}
function Address3validation() {
    var address = document.getElementById("Address3").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address").style.display = "none";
        document.getElementById("addressspace").style.display = "none";
    }
    else {
        document.getElementById("address").style.display = "block";
        document.getElementById("addressspace").style.display = "block";
    }
}
function Townvalidation() {
    var town = document.getElementById("City").value;
    var regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
     var card = regex.test(town)
    if (card) {

        document.getElementById("city").style.display = "none";
        document.getElementById("cityspace").style.display = "none";
    }
    else {
        document.getElementById("city").style.display = "block";
        document.getElementById("cityspace").style.display = "block";
    }
}
function RegionValidation() {
    var regions = document.getElementById("Region").value;
    var regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    var regiondata = regex.test(regions)
    if (regiondata) {

        document.getElementById("region").style.display = "none";
        document.getElementById("regionspace").style.display = "none";
    }
    else {
        document.getElementById("region").style.display = "block";
        document.getElementById("regionspace").style.display = "block";
    }

}
function Postalcodevalidation() {
    var postalcode = document.getElementById("pincode").value;
    var regex = /^(?:6[0-9]{5})$/;
    var code = regex.test(postalcode);
    if (code) {
        document.getElementById("zipcode").style.display = "none";
        document.getElementById("pincodespace").style.display = "none";
    }
    else {
        document.getElementById("zipcode").style.display = "block";
        document.getElementById("pincodespace").style.display = "block";
    }
}
function Countryvalidation() {
    var country = document.getElementById("Country").selectedIndex;
    if (!country ==0) {
        document.getElementById("country").style.display = "none";
        document.getElementById("countryspace").style.display = "none";
}
else {
        document.getElementById("country").style.display = "block";
        document.getElementById("countryspace").style.display = "block";
}
}
function telephonevalidation() {
    var telephone = document.getElementById("Telephone").value;
    var regex = /^\+?([6-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var telenum = regex.test(telephone)
    if (telenum) {
        document.getElementById("telephone").style.display = "none";
        document.getElementById("phonespace").style.display = "none";
    }
    else {
        document.getElementById("telephone").style.display = "block";
        document.getElementById("phonespace").style.display = "block";
    }
}
function faxnumbervalidation() {
    var number = document.getElementById("Fax").value;
    var regex = /^\+?[0-9]{6,13}$/;
    var faxnum = regex.test(number)
    if (faxnum) {
        document.getElementById("fax").style.display = "none";
        document.getElementById("faxspace").style.display = "none";
    }
    else {
        document.getElementById("fax").style.display = "block";
        document.getElementById("faxspace").style.display = "block";
    }
}
function emailvalidation() {
    var mail = document.getElementById("email").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var maildata = regex.test(mail)
    if (maildata) {
        document.getElementById("emailID").style.display = "none";
        document.getElementById("emailspace").style.display = "none";
    }
    else {
        document.getElementById("emailID").style.display = "block";
        document.getElementById("emailspace").style.display = "block";
    }
}

function Payment() {
    var cardnum=document.getElementById("cardNumber").value.length;
    var ccv = document.getElementById("securityNumber").value.length;
    var month = document.getElementById("months").value.length;
    var name = document.getElementById("cardHoldersName").value.length;
    var address = document.getElementById("Address1").value.length;
    var town = document.getElementById("City").value.length;
    var postalcode = document.getElementById("pincode").value.length;
    var country = document.getElementById("Country").value.length;
    var mail = document.getElementById("email").value.length;
    if (cardnum >0 && ccv >0 && month >0&&name>0 && address >0 && town> 0&& postalcode >0 && country >0 && mail>0) {
        alert("payment successfull")
    }
    else{
    cardnumbervalidation();
    validateSecurityCode();
    ExpirydateValidation();
    CardholderNameValidation();
    Addressvalidation();
    Townvalidation();
    Postalcodevalidation();
    Countryvalidation();
    emailvalidation();
}
}
