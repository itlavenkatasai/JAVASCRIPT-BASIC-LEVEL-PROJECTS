function showUserDetails() {
    const show = document.getElementById("userDetails");
    show.style.display = "block";
}
function hideUserDetails() {
    const show = document.getElementById("userDetails");
    show.style.display = "none";
}
function showErrorInfo() {
    const showError = document.getElementById("errorInfo");
    showError.style.display = "block";
}
function hideErrorInfo() {
    const showError = document.getElementById("errorInfo");
    showError.style.display = "none";
}
async function getUserDetails(userName) {
    const url = `https://api.github.com/users/${userName}`;
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form");
    const input = document.getElementById("search");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = input.value;
        getUserDetails(userName);
    });
});