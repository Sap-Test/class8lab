$(document).ready(function(){

    $("form").submit(getSchedule);

});


function getSchedule(event)
{
    event.preventDefault();
    let dayOfWeek = $("input[name=day]:checked").data("name");

    let workSchedule;
    let workoutSchedule;

    switch(dayOfWeek)
    {
        case "mon":
            workSchedule = `7:30AM - 4:30PM`;
            workoutSchedule= `6:00PM - 7:00PM`;
            break;
        case "tue":
            workSchedule = `7:30AM - 4:30PM`;
            workoutSchedule= `5:00PM - 6:00PM`;
            break;
        case "wed":
            workSchedule = `7:30AM - 4:30PM`;
            workoutSchedule= `5:00PM - 5:30PM`;
            break;
        case "thu":
            workSchedule =`7:30AM - 4:30PM`;
            workoutSchedule= `5:00PM - 6:00PM`;
            break;
        case "fri":
            workSchedule = `7:30AM - 4:30PM`;
            workoutSchedule= `6:00PM - 7:00PM`;
            break;
        case "sat":
            workSchedule = `Off Day`;
            workoutSchedule= `7:00AM - 9:00AM`;
            break;
        case "sun":
            workSchedule = `Off Day`;
            workoutSchedule= `9:00AM - 11:00AM`;
            break;
    }

    $("td#workSchedule").text(workSchedule);
    $("td#workoutSchedule").text(workoutSchedule);

}

