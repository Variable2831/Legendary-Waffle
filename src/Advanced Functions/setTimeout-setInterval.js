
//Using setInterval to print the current time every second:

setInterval(function() {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }, 1000);
  
  //Using setTimeout to print the current time after 5 seconds:
  setTimeout(function() {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }, 5000);
  
  //Using setTimeout to print the current time after 10 seconds:
  setTimeout(function() {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }, 10000);
  
  //Using setInterval to print the current time every 5 seconds:
  setInterval(function() {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }, 5000);
  
  //Using setInterval and setTimeout to print the current time every 5 seconds after 10 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 5000);
   }, 10000);
  
  //Using setInterval and setTimeout to print the current time every 10 seconds after 5 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 10000);
   }, 5000);
   
  //Using setInterval and setTimeout to print the current time every second after 5 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 1000);
   }, 5000);
   
  //Using setInterval and setTimeout to print the current time every second after 10 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 1000);
   }, 10000);
   
  //Using setInterval and setTimeout to print the current time every 5 seconds after 10 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 5000);
   }, 10000);
  
   //Using setInterval and setTimeout to print the current time every 10 seconds after 5 seconds:
  setTimeout(function() {
    setInterval(function() {
      let currentTime = new Date();
      console.log(currentTime.toLocaleTimeString());
    }, 10000);
   }, 5000);