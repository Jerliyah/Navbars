
// Wrap in IIFE to hide variables and allow for return statement
(function() {
    // Looks at all of the potential targets...
    let navs = Array.from( document.querySelectorAll('.j-navbar.logo-and-dropdowns') )

    // ...grabs the one that hasn't been registered yet
    let target_nav = navs.find( (nav) => {
                        return !nav.dataset.jRegistered
                    })
                    

    // If all potential targets are accounted for, do nothing
    if( !target_nav ) { return false }


    // --- The Magic --- //
    // Register
    target_nav.dataset.jRegistered = "true"
    
    // Selection
    let main_menu_toggle = target_nav.querySelector('.menu-toggle')
    let dropdowns = [...target_nav.querySelectorAll('.j-dropdown') ]

    // Start offs
    target_nav.classList.add('closed')
    let breaking_point = 800 // Media Query

    // Event Handlers
        // ( Main_menu_toggle appears for smallers screens )
        main_menu_toggle.addEventListener('click', function() {
            // Manual toggle since it's between two class names
            if( target_nav.classList.contains('opened') ) { 
                target_nav.classList.replace('opened', 'closed')
            }
            else if( target_nav.classList.contains('closed') ) {
                target_nav.classList.replace('closed', 'opened')
            }
            else {
                // Worse case scenario, assume closed
                target_nav.classList.add('closed')
            }
        })

        dropdowns.forEach( (dropdown) => {
            dropdown.addEventListener('click', function() {
                this.classList.toggle('opened')

                let siblings = dropdowns.filter( (menu) => {
                    return menu != this
                })

                siblings.forEach( (sibling) => {
                    sibling.classList.remove('opened')
                })
            })
        })



    // Responsiveness
    function set_display_classes() {
        // This nav is mobile first - so if small screen, not much to do
        if( window.innerWidth < breaking_point ) { 
            target_nav.classList.remove('large')
            target_nav.classList.add('small')

            return false 
        }
        else {
            target_nav.classList.remove('small')
            target_nav.classList.add('large')
        }
    }
    
    
    // Run at script loaded and window resize
    set_display_classes()
    window.onresize = set_display_classes
    
    
})()
