// auth.js
// Sprawdzenie, czy użytkownik jest zalogowany i czy to właściwa strona
window.addEventListener('load', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const expectedUsername = window.location.pathname.split('/').pop().split('.')[0];

    if (!loggedInUser || loggedInUser.username.toLowerCase() !== expectedUsername) {
        window.location.href = 'index.html';
    } else {
        if (loggedInUser.role === 'user') {
            // Ukryj elementy widoczne tylko dla admina
            document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
        }
    }
});
