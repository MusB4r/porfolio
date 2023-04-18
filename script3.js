let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop -150;
        let height = sec.offsetHeight;
        let dirc = sec.getAttribute('id');

        if(top>= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + dirc + ']').classList.add('active');
            });
        };
    });
};

let hideContent_btn=document.getElementById('hideContent_btn')
let hideContent= document.getElementById('hideContent')

hideContent_btn.addEventListener('click', toggleContnet);

function toggleContnet(){
    hideContent.classList.toggle('show');
    if(hideContent.classList.contains('show')){
        hideContent_btn.innerHTML = 'Show Less'
    }
    else{
        hideContent_btn.innerHTML = 'Show More'
    }
}