let operandoA = null;
let operandoB = null;
let operacion = null;

function init() {
    const display = document.getElementById('display');

    document.getElementById('btn0').onclick = () => appendNumber('0');
    document.getElementById('btn1').onclick = () => appendNumber('1');
    document.getElementById('btn2').onclick = () => appendNumber('2');
    document.getElementById('btn3').onclick = () => appendNumber('3');
    document.getElementById('btn4').onclick = () => appendNumber('4');
    document.getElementById('btn5').onclick = () => appendNumber('5');
    document.getElementById('btn6').onclick = () => appendNumber('6');
    document.getElementById('btn7').onclick = () => appendNumber('7');
    document.getElementById('btn8').onclick = () => appendNumber('8');
    document.getElementById('btn9').onclick = () => appendNumber('9');

    document.getElementById('btnSuma').onclick = () => setOperation('+');
    document.getElementById('btnResta').onclick = () => setOperation('-');
    document.getElementById('btnMultiplica').onclick = () => setOperation('*');
    document.getElementById('btnDivide').onclick = () => setOperation('/');

    document.getElementById('btnLimpiar').onclick = () => limpiar();
    document.getElementById('btnIgual').onclick = () => resolver();
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value === '0' ? number : display.value + number;
}

function setOperation(op) {
    operandoA = parseFloat(document.getElementById('display').value);
    operacion = op;
    document.getElementById('display').value = '0';
}

function limpiar() {
    document.getElementById('display').value = '0';
    resetear();
}

function resetear() {
    operandoA = null;
    operandoB = null;
    operacion = null;
}

function resolver() {
    operandoB = parseFloat(document.getElementById('display').value);
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = operandoA + operandoB;
            break;
        case '-':
            resultado = operandoA - operandoB;
            break;
        case '*':
            resultado = operandoA * operandoB;
            break;
        case '/':
            resultado = operandoA / operandoB;
            break;
    }

    document.getElementById('display').value = resultado;
    resetear();
}
