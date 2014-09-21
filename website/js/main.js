function validate() {
    "use strict";
    var ddown,
        value,
        genderRadios,
        i,
        check,
        firstName,
        lastName,
        email,
        password,
        comments,
        gender,
        agreeEle,
        agree,
        monthlyEmail,
        size;

    ddown = document.getElementById("dropDown");
    value = ddown.options[ddown.selectedIndex].value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value; //not displayed security reasons
    comments = document.getElementById("comments").value;
    agreeEle = document.getElementById("agreeTerms");
    agree = agreeEle.checked;
    monthlyEmail = document.getElementById("monthlyEmail").checked;
    genderRadios = document.getElementsByName("genderRadios");
    i = 0;
    check = false;
    size = genderRadios.length;

    while (!check && i < size) {
        if (genderRadios[i].checked) {
            check = true;
            gender = genderRadios[i].value;
        }
        i += 1;
    }

    if (monthlyEmail === true) {
        monthlyEmail = "Yes";
    } else {
        monthlyEmail = "No";
    }

    //perform error detection and sets focus to the error element
    //will try to use Bootstrap CSS/JS/Jquery for better feedback

    if (check === false) {
        alert("ERROR: Please select a gender.");
        genderRadios[0].focus();
    } else if (value === "none") {
        alert("ERROR: Please select an option for how you found out about this website.");
        ddown.focus();
    } else if (agree === false) {
        alert("ERROR: You must READ and AGREE to the Terms and Conditions to continue.");
        if (document.getElementById("agreeTerms").disabled) {
            document.getElementById("termsAnchor").focus();
        } else {
            agreeEle.focus();
        }
    } else {
        alert("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nGender: " + gender +
            "\nFound out: " + value + "\nComments: " + comments + "\nMonthly email: " + monthlyEmail);
        return true;
    }
    return false;
}

function checkButton() {
    "use strict";

    document.getElementById("agreeTerms").checked = true;
}

function enableBox() {
    "use strict";

    document.getElementById("agreeTerms").disabled = false;
}
