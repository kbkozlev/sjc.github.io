// Handle form submission
document.getElementById('sap-input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from input fields
    const server = document.getElementById('server').value;
    const inum = document.getElementById('inum').value;
    const sid = document.getElementById('sid').value;

    // Get the mode selected (simple or advanced)
    const mode = document.getElementById('mode').value;

    let localString = '';

    if (server) {
        localString += `/H/${server}`;
    }

    if (inum) {
        localString += `/S/32${inum}`;
    }

    if (sid) {
        localString += `/R/${sid}`;
    }

    if (mode === 'advanced') {
        const client = document.getElementById('client').value;
        const language = document.getElementById('language').value;
        const uname = document.getElementById('uname').value;
        const password = document.getElementById('password').value;

        if (client) {
            localString += `&clnt=${client}`;
        }

        if (language) {
            localString += `/L/${language}`;
        }

        if (uname) {
            localString += `/U/${uname}`;
        }

        if (password) {
            localString += `/P/${password}`;
        }
    }

    // Display the final connection string only with non-empty parts
    document.getElementById('outputContent').innerText = localString ? `conn=${localString}` : 'No valid connection data provided';
});

// Toggle advanced fields based on selected mode
document.addEventListener('DOMContentLoaded', function () {
    const modeSelect = document.getElementById('mode');
    const advancedFields = document.getElementById('advancedFields');

    // Add event listener to toggle advanced fields
    modeSelect.addEventListener('change', function () {
        if (this.value === 'advanced') {
            advancedFields.classList.remove('hidden');
        } else {
            advancedFields.classList.add('hidden');
        }
    });
});
