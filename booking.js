function validateDates() {
    var dep = document.getElementById("dep").value;
    var ret = document.getElementById("ret").value;

    var depDate = new Date(dep);
    var retDate = new Date(ret);

    if (ret && dep && retDate < depDate) {
        alert("The return date should be after the departure date.");
        return false;
    }
    return true;
}
 document.getElementById('bookingform').addEventListener('submit',function(e){
        e.preventDefault();
        if(validateDates()){
            const booking={
                id:Date.now(),
                destination: document.getElementById("destination").value,
                ticket: document.getElementById("ticket").value,
                departureDate: document.getElementById("dep").value,
                returnDate: document.getElementById("ret").value,
                passengers: document.getElementById("passengers").value,
                status: "Confirmed"
            };
            let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));
            window.location.href="profile.html"
        }
    });
