        // Initialize the counter value
        let counter = 0;

        // Function to increment the counter
        function incrementCounter() {
            counter++;
            updateCounter();
        }

        // Function to decrement the counter
        function decrementCounter() {
            counter--;
            updateCounter();
        }

        // Function to update the counter display
        function updateCounter() {
            const countElement = document.getElementById("count");
            countElement.textContent = counter;
        }