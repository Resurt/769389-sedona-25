var searchButton = document.querySelector(".btn-search");
var Hotelpopup = document.querySelector(".modal");

searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    Hotelpopup.classList.toggle("modal-closed");
});






