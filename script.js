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

// Open Button
document.getElementById("openBtn").addEventListener("click", function () {

    document.querySelector(".welcome-page").style.display = "none";
    document.querySelector(".intro-page").style.display = "flex";

    document.getElementById("typing").innerHTML = "";
    i = 0;
    typeWriter();

});

// Typewriter
const text = `Hey Mishi ❤️

Ye website sirf tumhare liye banayi hai...

Har page par ek naya surprise tumhara intezar kar raha hai. ✨

I Hope Tumhe Ye Pasand Aaye. 💖`;

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

// Heart Click
document.querySelector(".heart").addEventListener("click", function () {

    document.querySelector(".love-page").style.display = "none";
    document.querySelector(".gallery-page").style.display = "flex";

});

// Photos
const photos = [

"IMG-20260628-WA0013.jpg",
"Snapchat-693309677.jpg",
"IMG-20260606-WA0006.jpg",
"IMG-20260602-WA0000.jpg"

];

// Messages
const messages = [

`💖 Photo 1

Jab maine tumhe pehli baar dekha...
Mujhe bilkul nahi pata tha ke tum meri zindagi ka sabse khoobsurat hissa ban jaogi. ❤️`,

`🌸 Photo 2

Tumhari muskurahat...
Meri har udaasi ko khushi mein badal deti hai. 🥹❤️`,

`🌹 Photo 3

Har yaad jo tumhare saath bani...
Meri zindagi ki sabse qeemti yaadon mein se ek hai. 🌸❤️`,

`💞 Photo 4

Chahe kitni bhi dooriyan aa jayein...
Meri duaon mein tum hamesha rahogi. ❤️🫂`

];

let current = 0;

// Next Photo
document.getElementById("nextPhoto").addEventListener("click", function () {

    current++;

    if (current < photos.length) {

        document.getElementById("photo").src = photos[current];
        document.getElementById("photoText").innerText = messages[current];

    } else {

        document.querySelector(".gallery-page").style.display = "none";
        document.querySelector(".final-page").style.display = "flex";

    }

});
document.getElementById("endBtn").addEventListener("click", function(){

    alert("❤️ Thank You Mishi ❤️\n\nI Will Always Love You. 🥹💍");

});
