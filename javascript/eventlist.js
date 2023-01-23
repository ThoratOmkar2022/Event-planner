var userEventData = JSON.parse(localStorage.getItem("userEvent"));


function myFunction() {
    var selectValue = document.getElementById("timeLine").value;
    output = document.querySelector("tbody");
    output.innerHTML = "";

    if (userEventData != null) {
        userEventData = JSON.parse(localStorage.getItem("userEvent"));
        var selectValue = document.getElementById("timeLine").value;

        var datawithId = userEventData.map((item, index) => ({ ...item, id: index + 1 }))
      
        datawithId.filter(function (data) {
            var reccuranceType = data.recurrenceType;
            var date = new Date();
            var currentDateDay = new Date().getDay();
            var startDate = new Date(data.eventStart);
            var startDateDay = new Date(data.eventStart).getDay();
            var endDate = new Date(data.eventEnd);

            if (reccuranceType === 'Daily' && selectValue === "today" && date >= startDate && date <= endDate) {
                return (reccuranceType === 'Daily' && date >= startDate && date <= endDate);
            }

            else if (reccuranceType === 'Weekly' && selectValue === "thisWeek") {
                return (date >= startDate && date <= endDate && startDateDay === currentDateDay);
            } else if (reccuranceType === 'Monthly' && selectValue === "thisMonth") {
                var date = new Date();
                var currentMonth = date.getMonth();
                var currentYear = date.getFullYear();
                var selectedDate = new Date(data.eventStart);
                var selectedYear = selectedDate.getFullYear();
                var selectedDate = new Date(data.eventStart);
                var selectedMonth = selectedDate.getMonth();
                return (selectedMonth === currentMonth && currentYear === selectedYear);
            }

            else if (selectValue === "today") {
                var date = new Date();
                var toDaysDate = date.getDate();
                var toDaysMonth = date.getMonth();
                var toDaySYear = date.getFullYear();
                var selectedDate = new Date(data.eventStart).getDate();
                var selectedMonth = new Date(data.eventStart).getMonth();
                var selectedYear = new Date(data.eventStart).getFullYear();
                return (selectedDate === toDaysDate && selectedMonth === toDaysMonth && selectedYear === toDaySYear);
            }
            else if (selectValue === "thisMonth") {
                var date = new Date();
                var currentMonth = date.getMonth();
                var selectedDate = new Date(data.eventStart);
                var selectedMonth = selectedDate.getMonth();
                var toDaySYear = date.getFullYear();
                var selectedYear = new Date(data.eventStart).getFullYear();
                return (selectedMonth === currentMonth && selectedYear === toDaySYear);
            }
            else if (selectValue === "thisYear") {
                var date = new Date();
                var currentYear = date.getFullYear();
                var selectedDate = new Date(data.eventStart);
                var selectedYear = selectedDate.getFullYear();
                return selectedYear === currentYear;
            }
            else if (selectValue === "thisWeek") {
                currentDate = new Date();
                startDate = new Date(currentDate.getFullYear(), 0, 1);
                var days = Math.floor((currentDate - startDate) /
                    (24 * 60 * 60 * 1000));
                var weekNumber1 = Math.ceil(days / 7);

                var selectedDate = new Date(data.eventStart);
                startDate = new Date(selectedDate.getFullYear(), 0, 1);
                var days = Math.floor((selectedDate - startDate) /
                    (24 * 60 * 60 * 1000));
                var weekNumber2 = Math.ceil(days / 7);
                return weekNumber1 === weekNumber2;
            } else {
                return userEventData;
            }
        }).map((data) => {
            output.innerHTML += `
         <tr>
            <td>
             ${data.eventName}
             </td>
             <td>
             ${data.eventStart}
             </td>
             <td>
             ${data.recurrenceType}
             </td>
             <td><button class="btn btn-primary mt-3" onclick="dltEvent(${data.id})">Delete </button></td>
             <td><button class="btn btn-primary mt-3" onclick="editEvent(${data.id})">Edit</button></td>
             <td><button class="btn btn-primary mt-3" onclick="showDetails(${data.id})">Show </button></td>
         </tr> `
        })
    }
}


function defaultData() {
    output = document.querySelector("tbody");
    output.innerHTML = "";
    userEventData = JSON.parse(localStorage.getItem("userEvent"));

    var datawithId = userEventData.map((item, index) => ({ ...item, id: index + 1 }))
    console.log(datawithId);

    if (userEventData != null) {
        userEventData = JSON.parse(localStorage.getItem("userEvent"));
        datawithId.filter(function (data) {
            var reccuranceType = data.recurrenceType;
            var date = new Date();
            var startDate = new Date(data.eventStart);
            var endDate = new Date(data.eventEnd);
            var toDaysDate = date.getDate();
            var toDaysMonth = date.getMonth();
            var toDaySYear = date.getFullYear();
            var selectedDate = new Date(data.eventStart).getDate();
            var selectedMonth = new Date(data.eventStart).getMonth();
            var selectedYear = new Date(data.eventStart).getFullYear();

            if (reccuranceType === 'Daily' && date >= startDate && date <= endDate) {
                return (reccuranceType === 'Daily' && date >= startDate && date <= endDate);
            } else {
                return (selectedDate === toDaysDate && selectedMonth === toDaysMonth && selectedYear === toDaySYear);
            }
        }).map((data) => {
            output.innerHTML += `
         <tr>
            <td>
             ${data.eventName}
             </td>
             <td>
             ${data.eventStart}
             </td>
             <td>
             ${data.recurrenceType}
             </td>
             <td><button class="btn btn-primary mt-3" onclick="dltEvent(${data.id})">Delete </button></td>
             <td><button class="btn btn-primary mt-3" onclick="editEvent(${data.id})">Edit</button></td>
             <td><button class="btn btn-primary mt-3" onclick="showDetails(${data.id})">Show </button></td>
         </tr> `
        })
    }
}
defaultData();

function newEvent() {
    window.location.href = "../newevent.html";
}

function dltEvent(i) {
    var result = confirm("Are you sure, you want to remove this event?");
    if (result) {
        var datawithId = userEventData.map((item, index) => ({ ...item, id: index + 1 }))
        datawithId.splice(i - 1, 1);
        localStorage.setItem("userEvent", JSON.stringify(datawithId));
    }
}

function editEvent(i) {
    window.location.href = "../editEvent.html";
  
    var datawithId = userEventData.map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("editableEvent", JSON.stringify(datawithId[i - 1]));

    datawithId.splice(i - 1, 1);
    localStorage.setItem("userEvent", JSON.stringify(datawithId));
}

function showDetails(i) {
    window.location.href = "../eventdetails.html";
    var datawithId = userEventData.map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("eventDetails", JSON.stringify(datawithId[i - 1]));
}
































































