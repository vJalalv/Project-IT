
window.onload = function () {
    document.getElementById('username').textContent = localStorage.getItem('username') || 'User Name';
    document.getElementById('useremail').textContent = localStorage.getItem('useremail') || 'example@example.com';
    document.getElementById('userphone').textContent = localStorage.getItem('userphone') || '0000000000';
    document.getElementById('useraddress').textContent = localStorage.getItem('useraddress') || 'City, Country';
  
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    let bookingTable = document.getElementById('bookingTable');
    bookings.forEach(b => {
      let row = `<tr>
        <td>${b.id}</td>
        <td>${b.destination}</td>
        <td>${b.date}</td>
        <td>${b.status}</td>
      </tr>`;
      bookingTable.innerHTML += row;
    });
  };
  function editProfile() {
    let name = prompt('Enter your name:', localStorage.getItem('username'));
    let email = prompt('Enter your email:', localStorage.getItem('useremail'));
    let phone = prompt('Enter your phone:', localStorage.getItem('userphone'));
    let address = prompt('Enter your address:', localStorage.getItem('useraddress'));
  
    localStorage.setItem('username', name);
    localStorage.setItem('useremail', email);
    localStorage.setItem('userphone', phone);
    localStorage.setItem('useraddress', address);
    location.reload();
  }
  function logout() {
    alert('You have logged out.');
  }
  
  // Delete account
  function deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      localStorage.clear();
      location.reload();
    }
  }
  
