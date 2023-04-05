document.addEventListener('DOMContentLoaded', () => {

    /* Navbar Toggler */
    const navbarTogglerBtn = document.querySelector('.navbar__toggler')
    navbarTogglerBtn.addEventListener('click', () => {
        document.querySelector('.navbar__nav').classList.toggle('navbar__nav--hidden')
        document.querySelector('.navbar__toggler__icon').classList.toggle('navbar__toggler__icon--active')
    })
})