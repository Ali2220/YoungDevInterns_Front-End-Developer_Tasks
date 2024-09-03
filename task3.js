const open = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const close = document.querySelector('.close');

open.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});


// dropdown


const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");


dropdownBtn.onclick = function() {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}


window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn')) {
        dropdownContent.style.display = "none";
    }
}
