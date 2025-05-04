function searchtrips() {
    const input = document.getElementById('search').value.toLowerCase().trim();
    const trips = document.querySelectorAll('.trip');
    if (input === '') {
        trips.forEach(trip => {
            trip.style.display = 'block';
        });
    } else {
        trips.forEach(trip => {
            const country = trip.getAttribute('data-country').toLowerCase();
            if (country.includes(input)) {
                trip.style.display = 'block';
            } else {
                trip.style.display = 'none';
            }
        });
    }
}
function toggleTheme() {
    var body = document.body;
    var themeIcon = document.getElementById("icon");
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}