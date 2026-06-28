const correctPassword = "0610";

function checkPassword() {
    const userPassword = document.querySelector("input").value;

    if (userPassword === correctPassword) {

        document.querySelector(".password-page").style.display = "none";
        document.querySelector(".welcome-page").style.display = "flex";

    } else {

        alert("Oops! 🥺 Ye website sirf Mishi ke liye hai. ❤️");

    }
}

document.querySelector("button").addEventListener("click", checkPassword);

document.getElementById("openBtn").addEventListener("click", function () {

    alert("Next Surprise Coming Soon ❤️");

});
