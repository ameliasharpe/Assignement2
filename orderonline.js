// To sum the subtotal in the table
$(document).ready(function () {
    update_amounts();
    $("select[name=quantity]").change(update_amounts);
});

function update_amounts() {
    var sum = 0.0;
    $("#comicGreen > tbody  > tr").each(function () {
        var qty = $(this).find("option:selected").val();

        var price = $(this).find(".price").val();
        var amount = (quantity * price);
        sum += amount;
        $(this).find(".subtotal").text(amount);
    });

//Update the subtotal to sum
    $(".total").text(sum);
}


// Validating the order form
$(document).ready(function() {
$("#submit").click(function(e) {

// Initializing Variables With Form Element Values
var firstName = $("#firstName").val();
var lastName = $("#lastName").val();
var email = $("#email").val();
var phone = $("#phone").val();

// Initializing Variables With Regular Expressions
var firstName_regex = /^[a-zA-Z]+$/;
var lastName_regex = /^[a-zA-Z]+$/;
var email_regex = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
var phone_regex = /^[0-9]+$/;

// To Check Empty Form Fields.
if (firstName.length == 0) {
$('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
$("#firstName").focus();
return false;
}

// Validating Name Field.
else if (!firstName.match(name_regex) || firstName.length == 0) {
$("#p1").text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#firstname").focus();
return false;
}

else if (!lastName.match(name_regex) || lastName.length == 0) {
$("#p1").text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#lastName").focus();
return false;
}

// Validating Email Field.
else if (!email.match(email_regex) || email.length == 0) {
$('#p2').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}

// Validating Phone Field.
else if (!phone.match(phone_regex) || phone.length == 0) {
$('#p3').text("* Please enter a valid phone numver *"); // This Segment Displays The Validation Rule For Phone Number
$("#phone").focus();
return false;
} else {
alert("Form Submitted Successfuly!");
return true;
}
});
});
