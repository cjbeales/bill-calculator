// Tip Calculator
let optionForm = document.querySelector('.option-form');

function calculateTip() {
    var total = document.getElementById("billAmount").value;
    total = total.replace('£', '');
    total = parseInt(total);
    var service = document.getElementById("serviceLevel").selectedIndex;
    var servicelevel = document.getElementsByTagName("option")[service].value;
    servicelevel = parseInt(servicelevel);
    var percentage = (total * servicelevel) / 100;
    var total = total + percentage;
    var people = document.getElementById("people").value;
    people = parseInt(people);
    if (!people || !total) {
        document.getElementById("tipBox").style.display = "none";
        document.getElementById("errorText").style.display = "flex";
        document.getElementById("errorText").innerHTML = "Complete all boxes to continue!";
        optionForm.className = "option-form";
    } else {
        document.getElementById("tipBox").style.display = "block";
        document.getElementById("errorText").style.display = "none";
        optionForm.classList.add('half');
    };

    var totalAmount = total / people;
    var tipPercentage = percentage / people;
    document.getElementById("tipBox").innerHTML = "<h3>Your total amount to pay each is:</h3>" + "<p><span style='color:red'>£" + totalAmount.toFixed(2) + "</span></p>" + "<h3>This includes a suggested group tip of:</h3>" + "<p><span>£" + percentage.toFixed(2) + "</span</p>" + "<h3>Your share of the tip is:</h3>" + "<p><span>£" + tipPercentage.toFixed(2) + "</span></p>";
};

let loader = document.querySelector('.calculating');

function displayLoader() {
    loader.classList.add('fadeInOut');
    setTimeout(function () {
        loader.classList.remove('fadeInOut')
    }, 2500);
}

let calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function () {
    var people = document.getElementById("people").value;
    var total = document.getElementById("billAmount").value;
    if (!people || !total) {
        document.getElementById("tipBox").style.display = "none";
        document.getElementById("errorText").style.display = "flex";
        document.getElementById("errorText").innerHTML = "Complete all boxes to continue!";
        optionForm.classList.remove('half');
    } else {
        displayLoader();
        window.setTimeout(calculateTip, 1000);
    }
});
// End of Tip Calculator //