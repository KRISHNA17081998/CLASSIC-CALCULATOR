const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

buttons.forEach(item => {
    item.onclick = () => {
        try {
            if (item.dataset.button === 'C') {
                display.value = '';
            } else if (item.dataset.button === 'CE') {
                
                display.value = display.value.slice(0, -1);
            } else if (item.dataset.button === '=') {
                
                if (display.value !== '') {
                    display.value = eval(display.value); 
                }
            } else {
                
                display.value += item.dataset.button;
            }
        } catch (err) {
            display.value = 'Invalid Entry';
            setTimeout(() => {
                display.value = ''; 
            }, 1000);
        }
    };
});
