var searchButton = document.querySelector(".btn-search");
var Hotelpopup = document.querySelector(".modal");
var form = Hotelpopup.querySelector("form");
var date_of_arrival = Hotelpopup.querySelector("[name=date_of_arrival]");
var date_of_departure = Hotelpopup.querySelector("[name=date_of_departure]");

searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    Hotelpopup.classList.toggle("modal-closed");
});

form.addEventListener("submit", function (evt) {
    if (!date_of_arrival.value || !date_of_departure.value) {
    evt.preventDefault();
    Hotelpopup.classList.remove("modal-error");
    Hotelpopup.offsetWidth = Hotelpopup.offsetWidth;
    Hotelpopup.classList.add("modal-error");
    console.log("нужно вести в поля данные");
    }
});
