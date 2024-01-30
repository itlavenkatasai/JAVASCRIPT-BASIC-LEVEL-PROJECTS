// function calSquareArea(width) {
//     const area = width * width;
//     return area;
// }
// function calSquarePerimeter(width) {
//     const perimeter = 4 * width;
//     return perimeter;
// }
// function calRectangleArea(width, height) {
//     const area = width * height;
//     return area;
// }
// function calRectanglePerimeter(width, height) {
//     const perimeter = 2 * (width + height);
//     return perimeter;
// }
// function getMeasurments(width, height, areacal, perimetercal) {
//     const arecalcuclator = areacal(width, height);
//     const perimetercalculator = perimetercal(width, height);
//     console.log(arecalcuclator, perimetercalculator);
// }
// const width = prompt('enter width');
// const height = prompt('enter height');
// //calsquarearea,calsquareperimeter gives as a callback function to the getmeasurments.
// getMeasurments(2, 4, calSquareArea, calSquarePerimeter);
// getMeasurments(2, 4, calRectangleArea, calRectanglePerimeter);
//setTimeOut,setInterval
// function sayhii() {
//     console.log("hii");
//     console.log('my name is venkatsai');
// }
// setTimeout(sayhii, 1000);

// const id = setInterval(sayhii, 1000);
// clearInterval(id);
// //array destructuring 
// const names = ['itla', 'vemula', 'porandla', 'yelagonda', 'veerabattini'];
// const [venkatasai, , raju, anil, ashok] = names;
// console.log(venkatasai, ashok);
function format() {
    const now = new Date();
    const d = now.getDate();
    const m = now.getMonth() + 1;
    const y = now.getFullYear();
    const format = d + ":" + m + ":" + y;
    return format;
}
function showresult() {
    const fulldate = format();
    const para1 = document.getElementById('para');
    para1.innerHTML = fulldate;
}
