
let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1; //January is 0
let year = today.getFullYear();

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds);