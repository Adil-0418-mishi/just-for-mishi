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
    document.getElementById("openBtn").addEventListener("click", function () {

    document.querySelector(".welcome-page").style.display = "none";
    document.querySelector(".intro-page").style.display = "flex";

    typeWriter();

});

const text = `Hi Mishi... ❤️

Ye sirf ek website nahi...

Ye meri feelings hain.

Har section me ek naya surprise tumhara intezar kar raha hai... 💖`;

let i = 0;

function typeWriter() {

    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }

}

document.getElementById("continueBtn").addEventListener("click", function () {

    alert("Next Surprise ❤️");

});

});

