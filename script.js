const display = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('button');


let currentInput = ''

function updateDisplay(){
    display.value = currentInput
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        button.classList.add('bg-green-500');
        setTimeout(() => {
            button.classList.remove('bg-green-500');
        }, 200)

        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay();
            } catch (error) {
                currentInput = 'Hello World !'
                updateDisplay();
                setTimeout(() => {
                    currentInput = ''
                    updateDisplay();
                }, 2000);
            }
        } else {
            currentInput += value;
            updateDisplay();
        }
    })
})

const clear = document.getElementById('apaga')

clear.addEventListener('click', () => {
    const input = document.getElementById('txtInpt')

    input.value = ''
})



updateDisplay();