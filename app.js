const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const typed = new Typed(".multiple-text", {
    strings: ['Computer Science Student', 'Software Developer', 'Content Creator', 'Video Editor', 'Entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});