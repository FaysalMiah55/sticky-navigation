const nav = document.querySelector('.nav');

window.addEventListener('scroll', navStrict)

function navStrict(){
  if(window.scrollY > nav.offsetHeight + 500){
    nav.classList.add('active')
  }else{
    nav.classList.remove('active')
  }
}
