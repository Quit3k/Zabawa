// Function to update the result in Firebase
function updateResult(matchId, result) {
    const resultRef = database.ref(`matches/${matchId}`);
    return resultRef.update({ result });
}

// Function to get match results from Firebase
function getMatchResults() {
    const dbRef = database.ref();
    dbRef.child(`matches`).get().then((snapshot) => {
        if (snapshot.exists()) {
            const matches = snapshot.val();
            Object.keys(matches).forEach(matchId => {
                const result = matches[matchId].result;
                const resultElement = document.getElementById(`${matchId}-result`);
                if (resultElement) {
                    resultElement.textContent = result;
                }
            });
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// Call this function to populate results on page load
document.addEventListener('DOMContentLoaded', getMatchResults);

// Add event listeners for save buttons
document.querySelectorAll('[id^="save-button-"]').forEach(button => {
    button.addEventListener('click', function () {
        const matchId = this.id.split('-')[2];
        const germanyScore = document.getElementById(`germany-score-${matchId}`).value;
        const scotlandScore = document.getElementById(`scotland-score-${matchId}`).value;
        const result = `${germanyScore}:${scotlandScore}`;
        updateResult(`match${matchId}`, result).then(() => {
            const resultElement = document.getElementById(`match${matchId}-result`);
            if (resultElement) {
                resultElement.textContent = result;
            }
        });
    });
});
