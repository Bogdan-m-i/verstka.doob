export function navbar() {
    
    let navbar = document.querySelector('.navbar'),
        toggle = document.querySelector('#navbar-toggle');

    function openMenu() {
        navbar.classList.add('navbar_active');
    }

    function closeMenu() {
        navbar.classList.remove('navbar_active');
    }

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!navbar.classList.contains('navbar_active')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if(window.matchMedia('(min-width: 992px)').matches){
            closeMenu();
        }
    });

}