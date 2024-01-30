const EXAM_DURATION = 2 * 60 * 60 * 1000;
let exam_start_time;
let exam_end_time;
let exam_id;
function countDownTime() {
    const now = new Date().getTime();
    const distance = exam_end_time.getTime() - now;
    var seconds = Math.floor(distance / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    // console.log(hours, minutes, seconds);
    const format = hours + ":" + minutes + ":" + seconds;
    const show = document.getElementById("displaytime");
    show.innerHTML = format;

}
function startExam() {
    let exam_start_time = new Date(); //prenst date and time
    exam_end_time = new Date(exam_start_time.getTime() + EXAM_DURATION);//present time - total exam time.
    exam_id = setInterval(countDownTime, 1000);
    // const submit = document.getElementById("submitexam");
    // submit.style.display = "block";
}
function submitExam() {
    const submit = document.getElementById('submitexam').value;
    if (submit == '0:0:0') {
        const show = document.getElementById("displaytime");
        show.innerHTML = ' ';
        show.innerHTML = 'Exam is Completed'
        clearInterval(countDownTime);
    }
    else {
        const show = document.getElementById("displaytime");
        show.innerHTML = ' ';
        show.innerHTML = 'Exam is Completed'
        clearInterval(exam_id);

    }
}