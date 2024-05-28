const postForm = document.querySelector('#post-form');

document.getElementById("submit-form").addEventListener("submit", (event)=> {
   event.preventDefault();
   openModal();
});

postForm.addEventListener('click', (event)=> {
   if (event.target===postForm) {
      closeModal()
   }
})

document.querySelectorAll('.close-modal').forEach(item=>{
   item.addEventListener('click', (event)=>{
      if (event.target===item) {
         closeModal()
      }
   })
});

function openModal() {
   postForm.classList.add('show');
   postForm.style.display = 'block';
}

function closeModal(){
   postForm.classList.remove('show');
   postForm.style.display = 'none'; 
}