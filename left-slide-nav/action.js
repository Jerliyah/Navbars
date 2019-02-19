/* ::J:: */
(function() {
    
    
    // Find
    const navbar = document.querySelector('.j.main-nav')
    if( !navbar ) { return false }


    // Register
    navbar.dataset.jRegistered = "true"


    // Select
    const open_button = navbar.querySelector('button.open-menu')
    const close_button = navbar.querySelector('button.close-menu')
    
    const nav_list = navbar.querySelector('ul.nav-list')
    

    // Plan
    const break_point =  getComputedStyle(navbar).getPropertyValue('--breakpoint');
    
    function determine_screen_size() {
        let answer =  window.innerWidth <= break_point.replace('px','') ?  'small' : 'large'
        console.log(answer, window.innerWidth, break_point)
        navbar.dataset.screenSize = answer
        return answer
    }
    
    function change_nav_state_to(wanted_state) {
        if( navbar.dataset.screenSize == 'large' ) { return false }
        else {
              nav_list.dataset.state = wanted_state
              return wanted_state
        }
    }
    
    
    // Assign
    function class_assignment() {
        determine_screen_size()
        change_nav_state_to('closed')
    }
    
    /* on load */ class_assignment()
    window.onresize = class_assignment
    
    open_button.addEventListener('click', () => {
        change_nav_state_to('open')
    })
    
    close_button.addEventListener('click', () => {
        change_nav_state_to('closed')
    })

    

    
})();