let a = ''; //first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['–', '+', 'X', '/'];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; //first number
    b = ''; // second number
    sign = ''; // operation sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').addEventListener('click', () => {
    clearAll();
})

document.querySelector('.buttons').addEventListener('click', evt => {
        // not button clicked
        if (!evt.target.classList.contains('btn')) return;
        // button clicked
        if (evt.target.classList.contains('ac')) return;

        out.textContent = '';
        // getting clicked button
        const key = evt.target.textContent;
        // if from 0-9 clicked
        if (digit.includes(key)) {
            if (b === '' && sign === ''){
                a += key;
                out.textContent = a;
            }
            else if (a!== '' && b!== '' && finish){
                b = key;
                finish = false;
                out.textContent = b;
            }
            else {
                b += key;
                out.textContent = b;
            }
            console.log(a ,b, sign);

        }

        // if signs clicked
        if (action.includes(key)){
            sign = key;
            out.textContent = sign;
            console.log(a, b, sign);
            return;
        }

        //equal sign clicked
        if (key === '=') {
            if (b === '') b = a;
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "X":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        out.textContent = 'Error!!!';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            finish = true;
            out.textContent = a;
            console.log(a,b,sign)
        }
    }
)
