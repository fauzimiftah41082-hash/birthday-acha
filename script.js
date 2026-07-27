// ================= LOGIN =================

function checkBirthday() {

    const birthdayInput =
        document.getElementById("birthday");

    const errorMessage =
        document.getElementById("errorMessage");

    const selectedDate =
        birthdayInput.value;


    // Jika belum memilih tanggal
    if (selectedDate === "") {

        errorMessage.textContent =
            "Isi tanggal ulang tahunmu dulu yaa ✨";

        return;
    }


    const date =
        new Date(selectedDate);

    const day =
        date.getDate();

    const month =
        date.getMonth() + 1;


    // Tanggal yang benar adalah 18 Juli
    if (day === 18 && month === 7) {

        document.getElementById("loginPage")
            .style.display = "none";

        document.getElementById("mainPage")
            .classList.remove("hidden");

        createConfetti();

        window.scrollTo(0, 0);

    } else {

        errorMessage.textContent =
            "Hmm... sepertinya tanggalnya belum tepat 🤔✨";

    }

}


// ================= SCROLL =================

function scrollToSection(sectionId) {

    document
        .getElementById(sectionId)
        .scrollIntoView({

            behavior: "smooth"

        });

}


// ================= OPEN GIFT =================

function openGift() {

    const finalMessage =
        document.getElementById("finalMessage");


    finalMessage
        .classList
        .remove("hidden");


    createConfetti();


    finalMessage
        .scrollIntoView({

            behavior: "smooth"

        });

}


// ================= CONFETTI =================

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            ["💙", "💗", "✨", "🎉", "🌸"]
            [
                Math.floor(
                    Math.random() * 5
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";


        document.body
            .appendChild(confetti);


        const animation =
            confetti.animate(

                [

                    {

                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1

                    },

                    {

                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                        opacity: 0

                    }

                ],

                {

                    duration:
                        Math.random() * 3000 + 3000,

                    easing: "ease-out"

                }

            );


        animation.onfinish =
            () => {

                confetti.remove();

            };

    }

}