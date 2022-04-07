// use moment js to add current time in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

// use set interval to constantly update the time
let updateTime = setInterval(function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);


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
        
