import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0wkDBBVfKLo54RCYKV5xmsW78gITFXJc",
    authDomain: "nmp-zabawa.firebaseapp.com",
    databaseURL: "https://nmp-zabawa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nmp-zabawa",
    storageBucket: "nmp-zabawa",
    messagingSenderId: "905773290125",
    appId: "1:905773290125:web:cfe40b8b155ab491e1c8c4"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Referencja do użytkowników w Firebase
    const userRef = ref(db, 'users/' + username);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
        const user = snapshot.val();
        if (user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify({ username, role: user.role }));
            window.location.href = `${username.toLowerCase()}.html`;
        } else {
            alert('Invalid username or password');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    } else {
        alert('Invalid username or password');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
