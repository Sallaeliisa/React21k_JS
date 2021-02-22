let formInput = document.querySelector("#inputData");



const daysFromToday = (event) => {
    event.preventDefault();

    let userEvent = document.getElementById("event").value;
    let endDate = document.getElementById("endDate").valueAsDate;
    let startDate = document.getElementById("startDate").valueAsDate;

    let today = new Date();
    let date = new Date(today);
    let starting = new Date(startDate);

    let daysToday = 0;
    let daysStart = 0;
    let businessDaysToday = 0;
    let businessDaysStart = 0;

    while (date < endDate) {
        
        switch(date.getDay()) {
            case 0:
                daysToday += 1;
                break;
            case 6:
                daysToday += 1;
                break;
            default:
                daysToday += 1;
                businessDaysToday += 1;
    }

    date.setDate(date.getDate() + 1);
}


    while (starting < endDate) {

        switch(starting.getDay()) {
            case 0:
                daysStart +=1;
                break;
            case 6:
                daysStart +=1;
                break;
            default:
                daysStart +=1;
                businessDaysStart += 1;
    }

    starting.setDate(starting.getDate() + 1);
}
  
// let textToday = document.getElementById("fromToday");
let textStart = document.getElementById("fromStart");
let textBusiness = document.getElementById("businessDays");

textStart.textContent = (" Days until " + userEvent + ": " + daysStart);
textBusiness.textContent = (" Business days until " + userEvent + ": " + businessDaysStart);

// textToday.textContent = ("Today there are " + daysToday + " days left until " + userEvent );

setInterval(timer, 1000);

}

// var x = setInterval(function() {

    let timer = function() {

    let countDownDate = document.getElementById("endDate").valueAsDate - (1000 * 60 * 60 * 2);
    console.log(countDownDate);
    let now = new Date().getTime();
  
    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("counter").innerHTML = "Countdown from this moment: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter").innerHTML = "EXPIRED";
    }
}

formInput.addEventListener("submit", daysFromToday);
 


