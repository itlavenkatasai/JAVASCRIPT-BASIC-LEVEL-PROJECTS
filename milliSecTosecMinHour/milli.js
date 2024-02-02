function calculateSeconds(event) {
    event.preventDefault();
    var input1 = document.getElementById("input1").value;
    var seconds = input1 / 1000;
    // seconds %= 60;
    console.log(seconds);
    document.getElementById("output1").value = seconds + ' sec';
}

function calculateMinutes(event) {
    event.preventDefault();
    var input2 = document.getElementById("input2").value;
    var seconds = input2 / 1000;
    // seconds %= 60;
    var minutes = seconds / 60;
    document.getElementById("output2").value = minutes + ' min';

}
function calculateHours(event) {
    event.preventDefault();
    var input3 = document.getElementById("input3").value;
    var seconds = input3 / 1000;
    // seconds %= 60;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    document.getElementById("output3").value = hours + ' hour';

}
function calculateHMS(event) {
    event.preventDefault();
    var input4 = document.getElementById("input4").value;
    var seconds = Math.floor(input4 / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    document.getElementById("output4").value = hours + "h : " + minutes + "m : " + seconds + "s";

}

