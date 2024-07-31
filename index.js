document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.cal-scr');
    const buttons = document.querySelectorAll('.cal button');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.value;

            if (buttonValue === '=') {
                try {
                    screen.value = eval(screenValue);
                    screenValue = screen.value;
                } catch {
                    screen.value = 'Error';
                    screenValue = '';
                }
            } else if (buttonValue === 'C') {
                screenValue = '';
                screen.value = '';
            } else {
                screenValue += buttonValue;
                screen.value = screenValue;
            }
        });
    });
});
