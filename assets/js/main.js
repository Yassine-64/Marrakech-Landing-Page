/*Show menu*/
const navMenu = document.getElementById('nav-menu'),navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*Menu show */
// valider  if statement dial click
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*menu hidden*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //fach kankliki 3la kola nav link kan7ydo menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*add blur to header when i scroll*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //fach scroll taykon kbr mn 50 viewport height , add the blur header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*show scroll up */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //fach katscrolli o katfot 350 viewport height , add show scroll class to the scroll button 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*scroll section active link */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href="#' + sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);



/*========scroll reveal animation  ========*/ 
//htan nt3lm liha hhhh hhhh pchakh