function appendValue(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = '';
}

function calculate() {
    let result = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(result);
    } catch (e) {
        document.getElementById("screen").value = 'خطأ';
    }
}

