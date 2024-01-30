function showDate() {
    const format = dateFormat();
    const show = document.getElementById('showdate');
    show.innerHTML = format;
    const t = document.getElementById('child2');
    t.style.display = 'block';
}
function dateFormat() {
    const now = new Date();
    const d = now.getDate()
    const m = now.getMonth() + 1;
    const y = now.getFullYear();
    const format = d + ":" + m + ":" + y;
    return format;
}
function showTime() {
    const format = timeFormat();
    const show = document.getElementById('showtime');
    show.innerHTML = format;
    setInterval(showTime, 1000);
}
function timeFormat() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes() + 1;
    const s = now.getSeconds();
    const format = h + ":" + m + ":" + s;
    return format;
}