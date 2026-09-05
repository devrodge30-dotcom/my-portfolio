/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


/* Close menu after clicking a link */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-link");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(
                        function (link) {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});


/* =========================
   PROJECT DATA
========================= */

const projects = {

    project1: {

        category:
            "IoT / Mobile",

        title:
            "Water Leak Detection & Monitoring System",

        description:
            "An IoT-based water leak detection and monitoring system designed to detect possible water leaks using water flow sensors. The system uses a central controller and monitoring application to provide useful information and alerts.",

        technologies:
            [
                "ESP32",
                "Water Flow Sensors",
                "LCD",
                "Buzzer",
                "Flutter",
                "Firebase"
            ],

        role:
            "Worked on the system concept, hardware integration, application development, and testing.",

        learning:
            "I learned about IoT communication, sensors, microcontrollers, mobile application development, and integrating hardware concepts with software."
    },


    project2: {

        category:
            "Web Development",

        title:
            "Santa Fe Tourist Spots Website",

        description:
            "A tourism information website designed to showcase tourist spots in Santa Fe, Bantayan Island. The website includes information about beaches, cafés, bars, local cuisine, galleries, and tourist destinations.",

        technologies:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL"
            ],

        role:
            "Worked on the website structure, user interface, frontend development, backend functionality, database integration, and administrative features.",

        learning:
            "I improved my understanding of responsive web design, PHP, MySQL, CRUD operations, UI design, and organizing a complete website project."
    },


    project3: {

        category:
            "Web / Database",

        title:
            "LCRO Marriage License Admin System",

        description:
            "A web-based administrative system designed to manage marriage license application records. It includes an administrator dashboard, record management, forms, and database functionality.",

        technologies:
            [
                "PHP",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],

        role:
            "Worked on the database structure, forms, administrative pages, dashboard, record management, and user interface.",

        learning:
            "I learned more about database design, PHP prepared statements, CRUD functionality, authentication, validation, and dashboard development."
    },


    project4: {

        category:
            "Web Development",

        title:
            "Catering Management System",

        description:
            "A web-based application concept for organizing catering-related information and administrative records.",

        technologies:
            [
                "PHP",
                "MySQL",
                "HTML",
                "CSS"
            ],

        role:
            "Worked on the website interface, database integration, forms, and basic administrative functionality.",

        learning:
            "This project helped me understand how frontend interfaces connect with PHP backend functionality and MySQL databases."
    }

};


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTechnologies =
    document.getElementById("modalTechnologies");

const modalRole =
    document.getElementById("modalRole");

const modalLearning =
    document.getElementById("modalLearning");


const projectButtons =
    document.querySelectorAll(".view-project");


projectButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const projectId =
                button.dataset.project;

            const project =
                projects[projectId];


            if (!project) {
                return;
            }


            modalCategory.textContent =
                project.category;


            modalTitle.textContent =
                project.title;


            modalDescription.textContent =
                project.description;


            modalRole.textContent =
                project.role;


            modalLearning.textContent =
                project.learning;


            modalTechnologies.innerHTML = "";


            project.technologies.forEach(
                function (technology) {

                    const tag =
                        document.createElement("span");

                    tag.textContent =
                        technology;

                    modalTechnologies.appendChild(
                        tag
                    );

                }
            );


            modal.classList.add("show");

            document.body.classList.add(
                "modal-open"
            );

        }
    );

});


/* Close modal */

modalClose.addEventListener(
    "click",
    closeModal
);


function closeModal() {

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


/* Close by clicking outside */

modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* Close with Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);


/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();   