var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0) {
        var spanred = document.getElementsByTagName('span')[0];
        spanred.style.color = 'white';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {
        var spanred = document.getElementsByTagName('span')[0];
        spanred.style.color = 'lightcoral';
    }
}


