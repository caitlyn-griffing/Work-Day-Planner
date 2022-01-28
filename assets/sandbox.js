// TODO Create Date Format
// COMPLETED //
$("#currentDay").text(moment().format("MMM DD, YYYY"));

// TODO: create a function for each Timeblock (for past , present, future - current time)

var hourBlock = [
    "block1", "block2", "block2", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "block11", "block12", "block13"
];
hourUpdate();


let currentHour = moment().hour();



// function hourUpdate() {
//     var currentHour = moment().hour();

//     $(".time-block").each(function () {
//         var fixedHour = parseInt($(this).attr("id"));
//         if ( fixedHour < currentHour ) {
//             $(this).addClass('past');
//         } else if ( fixedHour === currentHour ) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//         } else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     });
// }

// TODO: 

// TODO:

// TODO:

// TODO:

// TODO:

// TODO:
