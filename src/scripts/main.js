document.addEventListener('DOMContentLoaded', () => {

    /* Navbar Toggler */
    $('.navbar__toggler').click(() => {
        $('.navbar__nav').toggleClass('navbar__nav--hidden');
        $('.navbar__toggler__icon').toggleClass('navbar__toggler__icon--active');
    })
    /* END ///////////////// */
    /* Button hero Background Animation */
    $('#hero__btn').hover(function () {
            // over
            $('.hero__right-img-bg').toggleClass('hero__right-img-bg--zoom')
            $('.react-logo').toggleClass('react-logo--active')

        }, function () {
            // out
            $('.hero__right-img-bg').toggleClass('hero__right-img-bg--zoom')


        }
    );
    /* END ////////////////// */
    

    /* Teachers Resume Reactivity */
    $()
})