
window.onload = function () {
    document.getElementById('username').textContent = localStorage.getItem('username');
    document.getElementById('useremail').textContent = localStorage.getItem('useremail');
    document.getElementById('userphone').textContent = localStorage.getItem('userphone');
  
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    let bookingTable = document.getElementById('bookingTable');
    bookings.forEach(b => {
      let row = `<tr>
        <td>${b.id}</td>
        <td>${b.destination}</td>
        <td>From${b.depaturedate} to ${b.returnDate}</td>
        <td>${b.ticket}</td>
        <td>${b.passengers}</td>
        <td>${b.status}</td>
      </tr>`;
      bookingTable.innerHTML += row;
    });
  };
  function editProfile() {
    let name = prompt('Enter your name:', localStorage.getItem('username'));
    let email = prompt('Enter your email:', localStorage.getItem('useremail'));
    let phone = prompt('Enter your phone:', localStorage.getItem('userphone'));
  
    localStorage.setItem('username', name);
    localStorage.setItem('useremail', email);
    localStorage.setItem('userphone', phone);
    location.reload();
  }
  function logout() {
    alert('You have logged out.');
    window.location.href='proj.html';
  }
  function deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      localStorage.clear();
      location.reload();
    }
  }
  
