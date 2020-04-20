document.querySelector("app-snackbar").addEventListener("actionClicked", () => {
        document
            .getElementById("output-message")
            .innerHTML = "<p>Congratulations!</p>" + 
                         "<p>Your event is working. Now you can perform any action in here.</p>" + 
                         "<p>For now, the action is to open a new tab with this project's readme</p>";
        window.open("https://github.com/marianafantini/notification-snackbar-component", "_blank");

    });