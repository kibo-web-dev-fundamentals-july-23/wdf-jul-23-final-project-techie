    document.addEventListener("DOMContentLoaded", function () {
        const choices = ["rock", "paper", "scissors"];
        const resultText = document.getElementById("result");
        const userChoiceSpan = document.getElementById("userChoice");
        const computerChoiceSpan = document.getElementById("computerChoice");

        document.querySelectorAll(".choices button").forEach(function (button) {
            button.addEventListener("click", function () {
                const userChoice = button.id;
                const computerChoice = choices[Math.floor(Math.random() * 3)];

                userChoiceSpan.textContent = `You chose: ${userChoice}`;
                computerChoiceSpan.textContent = `Computer chose: ${computerChoice}`;

                const result = determineWinner(userChoice, computerChoice);

                resultText.textContent = result;
            });
        });
        function determineWinner(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                return "It's a tie!";
            }
            if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                return "You win!";
            }
            return "Computer wins!";
        }
        //Get ID of Element
        const popupButton = document.getElementById("popupButton");

        // Function to show the popup message
        function showPopup() {
            alert("JavaScript is awesome😜");
        }

        // Add a click event listener to the button
        popupButton.addEventListener("click", showPopup);

        document.getElementById("popupButton1").addEventListener("click", function () {
            changeText("elementToShow");
        });
        document.getElementById("popupButton2").addEventListener("click", function () {
            changeColor("elementToShow");
        });
        document.getElementById("popupButton3").addEventListener("click", function () {
            changeBackgroundColor("elementToShow");
        });
        document.getElementById("popupButton4").addEventListener("click", function () {
            createNewElement("elementToShow");
        });
        document.getElementById("popupButton5").addEventListener("click", function () {
            deleteElement("elementToShow");
        });
        document.getElementById("popupButton6").addEventListener("click", function () {
            hideElement("elementToShow");
        });
        document.getElementById("popupButton7").addEventListener("click", function () {
            displayElement("elementToShow");
        });
        function changeText(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = "Text changed!";
            }
        }
        function changeColor(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.color = "blue";
            }
        }
        function changeBackgroundColor(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.backgroundColor = "lightgray";
            }
        }
        function createNewElement() {
            const newElement = document.createElement("p");
            newElement.textContent = "Horray!!! This is a new element!";
            document.getElementById("elementToShow").appendChild(newElement);
        }
        function deleteElement(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.remove();
            }
        }
        function hideElement(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.display = "none";
            }
        }

        function displayElement(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.display = "block";
            }
        }
    });


