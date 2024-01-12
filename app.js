const calendar = new Date();

const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const weekDays = ["Sunday", "Month", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML =(calendar.getDate() < 10 ? "0" : "") + calendar.getDate();
day.innerHTML = weekDays[calendar.getDay()];
month.innerHTML = allMonths[calendar.getMonth()];
year.innerHTML = calendar.getFullYear();
