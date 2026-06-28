const correctPassword = "0610";

// Password Check
document.querySelector(".password-page button").addEventListener("click", function () {

    const userPassword = document.querySelector("input").value;

    if (userPassword === correctPassword) {

        document.querySelector(".password-page").style.display = "none";
        document.querySelector(".welcome-page").style.display = "flex";

    } else {

        alert("Oops! 🥺 Ye website sirf Mishi ke liye hai. ❤️");

    }

});

// Open It Button
document.getElementById("openBtn").addEventListener("click", function () {

    document.querySelector(".welcome-page").style.display = "none";
    document.querySelector(".intro-page").style.display = "flex";

    typeWriter();

});

// Typewriter Text
const text = `Hey Mishi ❤️

Ye website sirf tumhare liye banayi hai...

Har page par ek naya surprise tumhara intezar kar raha hai. ✨

I hope tumhe ye pasand aaye. 💖`;

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }

}

// Continue Button
document.getElementById("continueBtn").addEventListener("click", function () {

    document.querySelector(".intro-page").style.display = "none";
    document.querySelector(".love-page").style.display = "flex";

});
