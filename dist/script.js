document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#lineupForm");

    form.addEventListener("submit", myLineUp);
});

function myLineUp(event) {
    event.preventDefault();

    // Get selected status
    const status = document.querySelector('input[name="status"]:checked').value;

    // Get selected date
    const date = document.querySelector("#gameDate").value;

    // Get selected players
    const players = [];

    document.querySelectorAll(".players").forEach(player => {
        if (player.checked) {
            players.push(player.value);
        }
    });

    // Print to console
    console.log("Status:", status);
    console.log("Date:", date);
    console.log("Players:", players);

    // Combine into a single string
    const result =
        "Status: " + status + "\nDate: " + date + "\nPlayers: " + players.join(", ");
    
    // Show on page
    document.querySelector("#result").textContent = result;
}