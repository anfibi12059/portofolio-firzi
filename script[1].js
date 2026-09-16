// ===============================
// TYPING ANIMATION
// ===============================

const typing = document.getElementById("typing");

const words = [
    "PPLG Student 💻",
    "Web Developer 🌐",
    "Programmer 🚀",
    "Tech Enthusiast ⚡"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();



// ===============================
// SCROLL REVEAL
// ===============================

const reveals =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("active");

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


reveals.forEach(
    (element) => {

        observer.observe(element);

    }
);



// ===============================
// NAVBAR ACTIVE
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 160;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);