// use moment js to add current time in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

// use set interval to constantly update the time
var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

// add event listener to save button for hour and description
$(".saveBtn").on("click", function () {
    console.log(this);
    var time = $(this).parent().attr("id");
    console.log(time);
    var task = $(this).siblings(".description").val();
    console.log(task);

    localStorage.setItem(time, task);
});

// retrieve any stored taks from local storage for each timeblock
$("#8Am .description").val(localStorage.getItem("8Am"));
$("#9Am .description").val(localStorage.getItem("9Am"));
$("#10Am .description").val(localStorage.getItem("10Am"));
$("#11Am .description").val(localStorage.getItem("11Am"));
$("#12Pm .description").val(localStorage.getItem("12Pm"));
$("#1Pm .description").val(localStorage.getItem("1Pm"));
$("#2Pm .description").val(localStorage.getItem("2Pm"));
$("#3Pm .description").val(localStorage.getItem("3Pm"));
$("#4Pm .description").val(localStorage.getItem("4Pm"));
$("#5Pm .description").val(localStorage.getItem("5Pm"));
$("#6Pm .description").val(localStorage.getItem("6Pm"));




    // variables for:
        // hours of day the scheduler will span (8am-6pm)
        // timeblock
            // foreach to create a separate timeblock for every hour

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
        
