const correctPassword = "0610";

function checkPassword() {
    const userPassword = document.querySelector("input").value;

    if (userPassword === correctPassword) {
        alert("Welcome Mishi ❤️");
    } else {
        alert("Oops! 🥺 Ye website sirf Mishi ke liye hai. ❤️");
    }
}

document.querySelector("button").addEventListener("click", checkPassword);
