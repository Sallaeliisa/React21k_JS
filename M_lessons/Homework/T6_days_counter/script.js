let formInput = document.querySelector("#inputData");

const daysFromToday = (event) => {
  event.preventDefault();

  let userEvent = document.getElementById("event").value;
  let endDate = document.getElementById("endDate").valueAsDate;
  let startDate = document.getElementById("startDate").valueAsDate;

  let starting = new Date(startDate);

  let daysStart = 0;
  let businessDaysStart = 0;

  while (starting < endDate) {
    switch (starting.getDay()) {
      case 0:
        daysStart += 1;
        break;
      case 6:
        daysStart += 1;
        break;
      default:
        daysStart += 1;
        businessDaysStart += 1;
    }

    starting.setDate(starting.getDate() + 1);
  }

  let textStart = document.getElementById("fromStart");
  let textBusiness = document.getElementById("businessDays");

  textStart.textContent = " Days until " + userEvent + ": " + daysStart;
  textBusiness.textContent =
    " Workdays until " + userEvent + ": " + businessDaysStart;

  setInterval(timer, 1000);
};

let timer = function () {
  let countDownDate =
    document.getElementById("endDate").valueAsDate - 1000 * 60 * 60 * 2;
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML = `Countdown from this moment: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
};
formInput.addEventListener("submit", daysFromToday);
