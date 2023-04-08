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
            console.log(this);
            $('.hero__right-img-bg').toggleClass('hero__right-img-bg--zoom')

        }, function () {
            // out
            $('.hero__right-img-bg').toggleClass('hero__right-img-bg--zoom')

        }
    );
    /* END ////////////////// */
    
})