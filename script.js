        let currentInput = '';
        let display = document.getElementById('display');

        function appendToDisplay(value) {
            currentInput += value;
            display.innerText = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            display.innerText = '0';
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput);
                display.innerText = currentInput;
            } catch (error) {
                display.innerText = 'Error';
            }
        }

        function calculatePercentage() {
            currentInput = eval(currentInput) / 100;
            display.innerText = currentInput;
        }

        function calculateSquareRoot() {
            currentInput = Math.sqrt(eval(currentInput));
            display.innerText = currentInput;
        }
