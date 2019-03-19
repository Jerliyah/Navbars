(function() {
    /* --- Menu Toggle --- */
    // Find
    const navbar = document.querySelector('nav.j')
    if( !navbar ) { return false }

    // Register
    navbar.dataset.jRegistered = "true"

    // Select
    const menu_toggle = navbar.querySelector('.menu-toggle')
    const toggle_icon = menu_toggle.querySelector('i')
    const menu = navbar.querySelector('ul.menu')

    // Plan
    function check_nav_state() {
        return navbar.dataset.state
    }
    
    function change_nav_state_to(wanted_state) {
        switch( wanted_state ) {
            case 'open':
                navbar.dataset.state = 'menu-is-open'
                menu.dataset.state = 'open'
                toggle_icon.classList.replace('fa-bars', 'fa-times')
                break;
            case 'closed':
                navbar.dataset.state = 'menu-is-closed'
                menu.dataset.state = 'closed'
                toggle_icon.classList.replace('fa-times', 'fa-bars')
                break
        }
    }
    
    // Assign
    change_nav_state_to('closed') /* on load */
    
    menu_toggle.addEventListener('click', () => {
        switch( check_nav_state() ) {
            case 'menu-is-open': change_nav_state_to('closed'); break;
            case 'menu-is-closed': change_nav_state_to('open'); break;
            default: change_nav_state_to('closed')
        }
    })
    
    
    /* --- Mouse Trace --- */
    menu.addEventListener('mousemove', (event) => {
        let x = `${ (event.x / menu.offsetWidth) * 100 }%`
        let y = `${ (event.y / menu.offsetHeight) * 100 }%`
        
        menu.style.backgroundPosition = `${x} ${y}`
    })

})();