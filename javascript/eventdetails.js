
let eventName = document.getElementById("eventName");
let startDate = document.getElementById("eventStartDate");
let endDate = document.getElementById("eventEndDate");
let eventReccurance = document.getElementById("eventrecurrenceType");
let eventDiscription = document.getElementById("eventDescription");


let selectedEvent = JSON.parse(localStorage.getItem("eventDetails"));
let values = Object.values(selectedEvent);
console.log(values);


if (selectedEvent) {
    let values = Object.values(selectedEvent);
    eventName.innerHTML = values[0];
    startDate.innerHTML = values[1];
    endDate.innerHTML = values[2];
    eventReccurance.innerHTML = values[3];
    eventDiscription.innerHTML = values[4];
}

function show() {
    userEventData = JSON.parse(localStorage.getItem("userEvent"));
    var showFiveDetails = document.getElementById("fiveDetails");
    showFiveDetails.innerHTML = "";

    userEventData.slice(0, 5)
        .map((data, i) => {
            showFiveDetails.innerHTML += `
        <h4>Event No:</h4>
    <p>${i + 1}</p>
    <h4>Event name:</h4>
    <p>${data.eventName}</p>
    <h4>Event Start Date:</h4>
    <p >${data.eventStart}</p>
    <h4>Event End Date:</h4>
    <p >${data.eventEnd}</p>
    <h4>Event recurrenceType:</h4>
    <p >${data.recurrenceType}</p>
    <h4>Event Description:</h4>
    <p >${data.eventDescription}</p>
 ************************************************************************
    `
        });
}
show()













