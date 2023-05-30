function DeleteMe() {
    document.getElementById("MyResult").value = ""
}

function calculator(NewValue) {
    document.getElementById("MyResult").value += NewValue;
}

function Answer() {
    let a = document.getElementById("MyResult").value;
    let b = eval(a);
    document.getElementById("MyResult").value = b
}