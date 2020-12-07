function formatedDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `Today is ${day} - ${hours}:${minutes}h`;
}

function yearFollowUp(year) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month=months[year.getMonth()];
  
  let yearly = year.getFullYear();

  let today = year.getDate();
  return `${today} ${month} ${yearly}`;
}

let footer = document.querySelector("#date");
let date = new Date();
footer.innerHTML = formatedDate(date);

let section = document.querySelector("#yearUp");
let year = new Date();
section.innerHTML = yearFollowUp(year);
