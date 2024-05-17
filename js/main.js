const postForm = document.querySelector('#post-form');

document.getElementById("submit-form").addEventListener("submit", (event)=> {
   event.preventDefault();
   openModal();
});

postForm.addEventListener('click', (event)=> {
   closeModal(event);
})

function openModal() {
   postForm.classList.add('show');
   postForm.style.display = 'block';
}

function closeModal(event) {
   if (event.target===postForm || event.target===document.getElementById('close-modal')) {
      postForm.classList.remove('show');
      postForm.style.display = 'none';
   }
}