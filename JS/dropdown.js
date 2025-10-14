const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');
toggle.addEventListener('click', ()=>{
    dropdown.classList.toggle('open');
});

document.addEventListener('click', (e)=>{
    if(!dropdown.contains(e.target)){
    dropdown.classList.remove('open');
    }
});