/* ==========================================
   SAMIRA STARS
   JavaScript — التحكم الكامل
========================================== */


/* ==========================================
   العناصر
========================================== */

const app = document.getElementById("app");

const intro = document.getElementById("intro");
const photoOne = document.getElementById("photoOne");
const starsStage = document.getElementById("starsStage");
const photoTwo = document.getElementById("photoTwo");
const finalStar = document.getElementById("finalStar");
const samiraStage = document.getElementById("samiraStage");
const finalStage = document.getElementById("finalStage");

const startBtn = document.getElementById("startBtn");
const photoNext = document.getElementById("photoNext");

const interactiveStars =
    document.getElementById("interactiveStars");

const finalStarButton =
    document.getElementById("finalStarButton");

const samiraName =
    document.getElementById("samiraName");

const finalMessageBtn =
    document.getElementById("finalMessageBtn");

const finalMessage =
    document.getElementById("finalMessage");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* ==========================================
   التحكم في الشاشات
========================================== */

const screens =
    document.querySelectorAll(".screen");


function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target =
        document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }
}


/* ==========================================
   النجوم الخلفية
========================================== */

function createBackgroundStars() {

    const container =
        document.createElement("div");

    container.id = "starsContainer";

    app.appendChild(container);


    const numberOfStars = 160;


    for (let i = 0; i < numberOfStars; i++) {

        const star =
            document.createElement("span");

        star.className =
            "background-star";


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;


        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 5}s`;


        star.style.animationDuration =
            `${2 + Math.random() * 4}s`;


        container.appendChild(star);
    }
}


createBackgroundStars();


/* ==========================================
   تشغيل الموسيقى
========================================== */

function startMusic() {

    if (!backgroundMusic) {
        return;
    }

    backgroundMusic.volume = 0.45;

    backgroundMusic.play()
        .catch(() => {
            console.log(
                "الموسيقى تحتاج تفاعل من المستخدم."
            );
        });
}


/* ==========================================
   البداية
========================================== */

startBtn.addEventListener("click", () => {

    startMusic();

    showScreen("photoOne");

});


/* ==========================================
   الانتقال من الصورة الأولى للنجوم
========================================== */

photoNext.addEventListener("click", () => {

    showScreen("starsStage");

    createInteractiveStars();

});


/* ==========================================
   كلمات النجوم
========================================== */

const starWords = [

    {
        word: "ضحكتك",
        message:
            "الشيء اللي بيقدر يغير يومي في ثانية."
    },

    {
        word: "صوتك",
        message:
            "حتى الكلام العادي منك ليه صوت مختلف."
    },

    {
        word: "عيونك",
        message:
            "فيها كلام كتير مش محتاج يتقال."
    },

    {
        word: "براءتك",
        message:
            "التفصيلة اللي بتخليكي مختلفة."
    },

    {
        word: "حنانك",
        message:
            "الحاجة اللي بتخليني أحس إني بخير."
    },

    {
        word: "تفاصيلك",
        message:
            "الحاجات الصغيرة فيكي... اللي يمكن إنتِ مش واخدة بالك منها."
    },

    {
        word: "حبك ❤️",
        message:
            "أجمل حاجة حصلتلي."
    }

];


/* ==========================================
   إنشاء النجوم التفاعلية
========================================== */

let clickedStars = 0;


function createInteractiveStars() {

    interactiveStars.innerHTML = "";

    clickedStars = 0;


    starWords.forEach((item, index) => {

        const star =
            document.createElement("div");

        star.className =
            "interactive-star";


        /*
          أماكن النجوم
          كل نجمة لها مكان مختلف
        */

        const positions = [

            { left: 18, top: 28 },

            { left: 73, top: 24 },

            { left: 43, top: 38 },

            { left: 82, top: 52 },

            { left: 22, top: 61 },

            { left: 61, top: 70 },

            { left: 46, top: 82 }

        ];


        star.style.left =
            `${positions[index].left}%`;

        star.style.top =
            `${positions[index].top}%`;


        star.dataset.index =
            index;


        star.addEventListener(
            "click",
            () => {

                revealStar(
                    star,
                    item
                );

            }
        );


        interactiveStars.appendChild(star);

    });

}


/* ==========================================
   إظهار كلمة النجمة
========================================== */

function revealStar(star, item) {

    /*
      منع الضغط على النجمة
      أكثر من مرة
    */

    if (star.classList.contains("used")) {
        return;
    }


    star.classList.add("used");


    clickedStars++;


    /*
      عمل طبقة للكلمة
    */

    const word =
        document.createElement("div");

    word.className =
        "star-word";


    word.innerHTML = `
        <div>${item.word}</div>
        <small>${item.message}</small>
    `;


    starsStage.appendChild(word);


    /*
      إظهار الكلمة
    */

    setTimeout(() => {

        word.remove();

    }, 3000);


    /*
      بعد آخر نجمة
    */

    if (clickedStars === starWords.length) {

        setTimeout(() => {

            showScreen("photoTwo");

        }, 3200);

    }

}


/* ==========================================
   الصورة الثانية
========================================== */

photoTwo.addEventListener(
    "transitionend",
    () => {

        /*
          بعد ظهور الصورة الثانية
          ننتظر قليلًا ثم ننتقل
          للنجمة الأخيرة.
        */

        if (
            photoTwo.classList.contains("active")
        ) {

            setTimeout(() => {

                showScreen("finalStar");

            }, 5000);

        }

    }
);


/* ==========================================
   النجمة الأخيرة
========================================== */

finalStarButton.addEventListener(
    "click",
    () => {

        showScreen("samiraStage");


        setTimeout(() => {

            samiraName.classList.add("show");

            createSamiraStars();

        }, 700);


        setTimeout(() => {

            showScreen("finalStage");

        }, 5000);

    }
);


/* ==========================================
   نجوم اسم SAMIRA
========================================== */

function createSamiraStars() {

    const container =
        document.getElementById("samiraStars");


    container.innerHTML = "";


    const numberOfStars = 70;


    for (
        let i = 0;
        i < numberOfStars;
        i++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "background-star";


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;


        /*
          تبدأ من أماكن عشوائية
        */

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 2}s`;


        container.appendChild(star);

    }

}


/* ==========================================
   الرسالة النهائية
========================================== */

finalMessageBtn.addEventListener(
    "click",
    () => {

        finalMessage.classList.add("show");

        finalMessageBtn.style.display =
            "none";

    }
);
