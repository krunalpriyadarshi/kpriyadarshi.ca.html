// navigator.onLine; --> set interval -->

document.addEventListener('DOMContentLoaded', function () {
    // Function to check internet connection
    function checkInternetConnection() {
        console.log("Internet Status: ", navigator.onLine);
        return navigator.onLine;
    }

    // Function to change favicon
    function changeFavicon(online) {
        const favicon = document.getElementById('favicon');
        if (online) {
            favicon.href = 'Assets/Favicon/Logo.png';
        } else {
            favicon.href = 'Assets/Favicon/Logo B&W.png';
        }
    }

    // Function to run the internet connection check and favicon change
    function runCheckAndChange() {
        changeFavicon(checkInternetConnection());
    }

    // Initial check and setup
    runCheckAndChange();

    // Set up an interval to run the check and change every 5 seconds (adjust as needed)
    setInterval(runCheckAndChange, 1000); 
});