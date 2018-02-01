const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(e){
    if(this.scrollY > 470) navbar.classList.add('fix-top');
    else navbar.classList.remove('fix-top');
});
