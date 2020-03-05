
let myMeetings = function(day, totalMeetingsremains=0, meetingsDone=0) {
    return { day, totalMeetingsremains, meetingsDone}
};

let addMeeting = function(meeting, totalMeetingsOfDay) {
    meeting.totalMeetingsremains += totalMeetingsOfDay;
    console.log(`${totalMeetingsOfDay} Meetings added successfully, check your day below` );
    console.log(meeting);
};

let decrementMeeting = function(meeting, meetingsDoneForDay) {
    if(!(meeting.totalMeetingsremains == 0 || meetingsDoneForDay > meeting.totalMeetingsremains)) {
         meeting.totalMeetingsremains -= meetingsDoneForDay;
         meeting.meetingsDone += meetingsDoneForDay;
         console.log(`You are done with ${meetingsDoneForDay} meeting, check your day below`);
         console.log(meeting);
    }
    else {
        console.log(`You are trying to decrement ${meetingsDoneForDay} meetings but you are scheduled for only ${meeting.totalMeetingsremains} meetings!`);
        if(!meetingsDoneForDay > meeting.totalMeetingsremains)meeting.meetingsDone = 0;  
    }  
};

let getSummaryOfDay = function(meeting) {
    console.log(`Summary for today till now`);
    console.log(`Day: ${meeting.day} \nMeetings remianing: ${meeting.totalMeetingsremains}  \nMeetings done:  ${meeting.meetingsDone}`);
}

let resetDay = function (meeting) {
    meeting.totalMeetingsremains = 0;
    meeting.meetingsDone = 0;
    // ` ` is called template literals, it can be a property or function 
    console.log(`Reset is done for the ${meeting.day} check this below`);
    console.log(meeting);
};

let firstDay = myMeetings('monday');
decrementMeeting(firstDay,1);
addMeeting(firstDay,2);
decrementMeeting(firstDay,1);
addMeeting(firstDay,2);
decrementMeeting(firstDay,5);
decrementMeeting(firstDay,6);
//getSummaryOfDay(firstDay);
//resetDay(firstDay);
