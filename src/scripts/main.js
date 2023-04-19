document.addEventListener("DOMContentLoaded", () => {
    /* Navbar Toggler */
    $(".navbar__toggler").click(() => {
        $(".navbar__nav").toggleClass("navbar__nav--hidden");
        $(".navbar__toggler__icon").toggleClass("navbar__toggler__icon--active");
    });
    /* END ///////////////// */
    /* Button hero Background Animation */
    $("#hero__btn").hover(
        function () {
            // over
            $(".hero__right-img-bg").toggleClass("hero__right-img-bg--zoom");
            $(".react-logo").toggleClass("react-logo--active");
        },
        function () {
            // out
            $(".hero__right-img-bg").toggleClass("hero__right-img-bg--zoom");
        }
    );
    /* END ////////////////// */

    /* Teachers Resume Reactivity */
    const Professors = [
        {
            name: "Dr. Thomas Lee",
            description:
                "With a PhD in Computer Science and extensive experience teaching JavaScript at both the undergraduate and graduate level, I bring a deep understanding of the language and its many applications to my work as a professor. I'm passionate about helping students build their skills in this versatile language, and I work closely with each of my students to help them achieve their unique learning goals. Whether you're a beginner just starting out or an experienced programmer looking to take your skills to the next level, I'm here to help you succeed.",
            previous_jobs: ['Assistant Professor of Computer Science at a major university', 'Lead Developer at a cutting-edge software company', 'Technical Consultant for a leading technology firm'],
        },
        {
            name: "Dr. Amanda Chen",
            description:
                "As an experienced JavaScript professor, I'm passionate about helping students develop their skills in this powerful language. I've been teaching JavaScript for over 10 years, and during that time, I've had the pleasure of helping students from a wide range of backgrounds master the language and pursue careers in web development, software engineering, and other related fields. My teaching approach emphasizes hands-on learning and practical applications, and I strive to create a welcoming and supportive learning environment for all of my students.",
            previous_jobs: ['Senior JavaScript Developer at a leading web development firm', 'Lead Instructor at a top coding bootcamp', 'Adjunct Professor of Computer Science at a major university']
        },
        {
            name: "Professor Jane Kim",
            description:
                "As a seasoned JavaScript professor with over 15 years of experience, I'm committed to helping students master this essential language and build the skills they need to succeed in the rapidly evolving world of web development. My teaching style emphasizes collaboration and hands-on learning, and I strive to create a dynamic and engaging learning environment that encourages creativity and innovation. Whether you're just starting out or looking to expand your skill set, I'm here to help you achieve your goals.",
            previous_jobs: ['Director of Web Development at a leading digital agency', 'Lead Instructor at a prominent coding bootcamp', 'Professor of Computer Science at a major university'],
        },
        {
            name: "Professor Brown",
            description:
                "With over a decade of experience teaching JavaScript to students of all levels, I'm passionate about helping others learn this essential language and develop the skills they need to succeed in today's tech-driven world. My teaching style emphasizes practical applications and real-world problem-solving, and I work closely with each of my students to help them achieve their unique learning goals. Whether you're looking to build a career in web development, software engineering, or another related field, I'm here to help you succeed.",
            previous_jobs: ['Senior Developer at a leading tech company', 'Lead Instructor at a top coding bootcamp', 'Professor of Computer Science at a major university'],
        },
    ];
    function renderCurriculum(obj) {
        return `
        <button class="btn-close">X</button>
        <h2 class="title">${obj.name}</h2>
        <p class="text">${obj.description}</p>
        <ul>
            ${obj.previous_jobs.map((item) => {
            return `<li>${item}</li>`
        }).join('')}
        </ul>
        </div>
        `;
    }
    const DEFAULTRESUME = `
    <h2 class="title">Meet our teachers:</h2>
    <p class="text">We are proud to introduce our team of experienced JavaScript programming instructors, who are passionate about helping students build their skills in this essential language. Our instructors bring a wealth of industry experience and academic knowledge to the classroom, and are committed to providing a supportive and engaging learning environment for all students.</p>`
    $(document).ready(function () {
        $("#teacher-resume-container").prepend(DEFAULTRESUME)
    });
    $(".teacher-resume-trigger").click(function (e) {
        e.preventDefault();
        const ID = e.target.id;

        switch (ID) {
            case "teacher-resume-1":
                $("#teacher-resume-container").empty();
                $("#teacher-resume-container").prepend(renderCurriculum(Professors[0]));
                break;
            case "teacher-resume-2":
                $("#teacher-resume-container").empty();
                $("#teacher-resume-container").prepend(renderCurriculum(Professors[1]));
                break;
            case "teacher-resume-3":
                $("#teacher-resume-container").empty();
                $("#teacher-resume-container").prepend(renderCurriculum(Professors[2]));
                break;
            case "teacher-resume-4":
                $("#teacher-resume-container").empty();
                $("#teacher-resume-container").prepend(renderCurriculum(Professors[3]));
                break;
        }
        $('.btn-close').click(() => {
            $("#teacher-resume-container").empty();
            $("#teacher-resume-container").prepend(DEFAULTRESUME)
        })
    });
    /* END ||||||||||||||||||||||||| */
    /* counter next event */
    const eventDate = new Date("Jun 01, 2023 19:00:00")
    const eventTimespamp = eventDate.getTime();

    const counter = setInterval(() => {
        const actualDate = new Date()
        const actualTimestamp = actualDate.getTime();

        const min = 1000 * 60;
        const hour = min * 60;
        const day = hour * 24;

        const remainingMs = eventTimespamp - actualTimestamp;

        let daysToEvent = Math.floor(remainingMs / day);
        let hoursToEvent = Math.floor((remainingMs % day) / hour);
        let minsToEvent = Math.floor(((remainingMs % day) % hour) / min);
        let secsToEvent = Math.floor((((remainingMs % day) % hour) % min) / 1000);

        $('#counter').html(`
        ${daysToEvent} days ${hoursToEvent} hours ${minsToEvent} min e ${secsToEvent} sec
        `)

        
    }, 1000);
});
