const gotodivs = document.querySelector(".downloaddivs");
const gotobtns = document.querySelector(".downloadbtns");
const gotopos = document.querySelector(".downloadpos");

gotodivs.addEventListener("click", () => {

    window.location.href = "https://github.com/ThomasLeMago/css/blob/f8ad47edf785b5150fc38403080b63c0e2b5cffa/borderdivs.css";
});

gotobtns.addEventListener("click", () => {
    window.location.href = "https://github.com/ThomasLeMago/css/blob/f8ad47edf785b5150fc38403080b63c0e2b5cffa/buttons.css";
});

gotopos.addEventListener("click", () => {
    window.location.href = "https://github.com/ThomasLeMago/css/blob/f8ad47edf785b5150fc38403080b63c0e2b5cffa/positions.css";
});