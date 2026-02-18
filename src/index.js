function handleSearchSubmit(event){
    event.preventDefault();
    let searchInputElement = document.querySelector(".search-form-input");
    let city = document.querySelector("#city")
    city.innerHTML = searchInputElement.value

}


let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit",handleSearchSubmit);