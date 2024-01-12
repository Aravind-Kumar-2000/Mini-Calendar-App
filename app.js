const calender = new Date();

const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const weekDays = ["Sunday", "Month", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML =(calender.getDate() < 10 ? "0" : "") + calender.getDate();
day.innerHTML = weekDays[calender.getDay()];
month.innerHTML = allMonths[calender.getMonth()];
year.innerHTML = calender.getFullYear();
