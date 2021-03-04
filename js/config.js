var myDomainId = "Siemens Germany";

var eventDate = "March 25, 2021 2:47:01";
//title length:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" if showDate=false (32 chars).
//title length:"aaaaaaaaaaaaaaaaa" if showDate=true (17 chars).
var eventTitle = "Siemens";
// if showDate is false then the Subtitle can be displayed on 2 rows, each row having the length below.
//subtitle length:"Siemens" (57 chars).
var eventSubtitle = "New Organization Day 1";
var dayLabel = "Days";
var hourLabel = "Hours";
var minuteLabel = "Minutes";
var secondLabel = "Seconds";
// set to true if you want the Date to be displyed
var showDate = true;


const countDate = new Date(eventDate).getTime();

var inter = setInterval(function() {

    // Getting today's date and time  
    var currentDate = new Date().getTime();
  
    // diff between currentDate and the endDate  
    var diff = countDate - currentDate;
  
    // counting days  
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    // counting hours  
    var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    // counting minutes
    var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
    // counting seconds
    var second = Math.floor((diff % (1000 * 60)) / 1000);
  
    // show date in html element with id countdown"
        document.getElementById('day').innerHTML = day;
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
  
    // clearing interval after endDate has occured
    if (diff < 0) {
      clearInterval(inter);
  
        document.getElementById('day').innerHTML = 0;
        document.getElementById('hour').innerHTML = 0;
        document.getElementById('minute').innerHTML = 0;
        document.getElementById('second').innerHTML = 0;
    }
  }, 1000);



document.getElementById("orgName").innerHTML=eventTitle;
document.getElementById("eventDate").innerHTML=eventDate;
document.getElementById("orgDay").innerHTML=eventSubtitle;

document.getElementById("days").innerHTML=dayLabel;
document.getElementById("hours").innerHTML=hourLabel;
document.getElementById("minutes").innerHTML=minuteLabel;
document.getElementById("seconds").innerHTML=secondLabel;


