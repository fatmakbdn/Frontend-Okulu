const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//* UI Object
const ui = new UI();

//* Storage Object
const storage = new Storage();

//* Events
eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadAllFilms);
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessage("Tüm Filmler Silindi...", "success");
    }
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        // console.log(e)
        // console.log(e.target);
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        );
        ui.displayMessage("Silme İşlemi Başarılı...", "success"); 
    };
}

function addFilm(e) {
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //*hata mesajı verilecek
        ui.displayMessage("Tüm Alanları Doldurunuz...", "danger");
    } else {
        // yeni film ekleme
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'e film ekleme
        //* Basarili mesaji verilecek
        ui.displayMessage("Film Ekleme İşlemi Başarılı...", "success");
        ui.clearInputs(titleElement, directorElement, urlElement); //Inputları temizleme
    }
}

function loadAllFilms() {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
}