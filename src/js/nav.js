document.addEventListener("astro:page-load", () => {
 // your javascript
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        console.log("Insided hamburger menu click event");
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
        console.log("End of hamburger menu click event");
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        console.log("Inside ariaExpanded function");
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
            console.log("csUL aria-expanded set to true");
        } else {
            csUL.setAttribute('aria-expanded', 'false');
            console.log("csUL aria-expanded set to false");
        }
        console.log("End of ariaExpanded function");
    }

    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            console.log("Inside for loop for dropdowns");
            const onClick = () => {
            item.classList.toggle('cs-active')
            console.log("end of onClick function for dropdowns");
        }
        console.log("Adding click event listener to dropdowns");
        item.addEventListener('click', onClick)
        console.log("End adding click event listener to dropdowns");
        }

    // after scrolling down 100px, add .scroll class to the #cs-navigation
    document.addEventListener('scroll', (e) => {
        console.log("Inside scroll event listener"); 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
        console.log("Adding .scroll class to #cs-navigation");
        document.querySelector('#cs-navigation').classList.add('scroll')
        } else {
        console.log("Removing .scroll class from #cs-navigation");
        document.querySelector('#cs-navigation').classList.remove('scroll')
        }
    });
});


                                