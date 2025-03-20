const formDropdown = document.querySelector('#form-dropdown');
const form = document.querySelector('#form');


function toggleForm() {
    form.classList.toggle('none');
}

formDropdown.addEventListener('click', toggleForm);