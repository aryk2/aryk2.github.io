const onSubmit = (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('body').value

    console.log('name: ', name, ', email: ', email, ', message: ', message)

};


document.getElementById("contact-form").addEventListener("submit", onSubmit);

const setActiveSection = ($) => {
    $(function () {        
        var activePage = window.location.href.substring(window.location.href.lastIndexOf('#') + 1); 
        $('.nav-item .nav-link').each(function () { 
            $(this).closest("li").removeClass("active"); 
            var link = this.href.substring(this.href.lastIndexOf('#') + 1); 
            if (activePage == link) { 
                $(this).closest("li").addClass("active"); 
            }
        });
    })
}


jQuery(document).ready(setActiveSection($));


