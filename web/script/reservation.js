
// Set min for date picker in reservation form
document.getElementById("date").setAttribute("min", shiftDate(2));
document.getElementById("date").setAttribute("max", shiftDate(30));

function shiftDate(offset) {
    var date = new Date();
    var newDate = new Date(date.setDate(date.getDate() + offset));
  
    var dd = newDate.getDate();
    var mm = newDate.getMonth() + 1;
    var yyyy = newDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    
    if (mm < 10) {
        mm = '0' + mm;
    }

    newDate = yyyy + '-' + mm + '-' + dd;
    return newDate;
}

