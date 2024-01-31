function calculateSeconds(event) {
    event.preventDefault();
    var input1 = document.getElementById("input1").value;
    var seconds = input1 / 1000;
    // seconds %= 60;
    console.log(seconds);
    var output1 = document.getElementById("output1");
    output1.innerHTML = seconds;
}
