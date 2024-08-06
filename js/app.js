// header
let ulList = document.querySelector('header nav>ul');
let link = document.querySelectorAll('header ul a');
let humborger = document.querySelector('.humborger');

humborger.addEventListener('click', () => {
    humborger.classList.toggle('active');
    ulList.classList.toggle('active');
})

link.forEach(n => n.addEventListener('click', () => {
    humborger.classList.remove('active');
    ulList.classList.remove('active');
}))


document.addEventListener('DOMContentLoaded', () => {
    // تحديد جميع الأقسام في الصفحة
    const sections = document.querySelectorAll('section');
    // تحديد جميع الروابط في شريط التنقل
    const navLinks = document.querySelectorAll('ul li>a');
    // دالة لتحديث الرابط النشط بناءً على القسم المرئي
    function updateActiveLink() {
        // حساب موقع التمرير الحالي
        const scrollPosition = window.scrollY + 50;
        // العثور على فهرس القسم النشط
        const index = Array.from(sections).findIndex(section =>
            scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight
        );
        // إزالة الفئة النشطة من جميع الروابط
        navLinks.forEach((link) => link.classList.remove('active'));
        // إضافة الفئة النشطة للرابط المقابل للقسم النشط
        if (index !== -1) {
            navLinks[index].classList.add('active');
        }
    }
    // استدعاء الدالة عند تحميل الصفحة لتعيين الرابط النشط بشكل مبدئي
    updateActiveLink();
    // استدعاء الدالة عند كل تمرير لتحديث الرابط النشط
    window.addEventListener('scroll', updateActiveLink);
});


// menu
function showItems(sectionId) {
    const buttons = document.querySelectorAll('.menu-button');
    const sections = document.querySelectorAll('.menu-items');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(sectionId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// events swiper
const swiper1 = new Swiper('.swiper1', {
    loop: true,
    autoplay: {
        delay: 2500, // مدة التأخير بين الشرائح بالملي ثانية
        disableOnInteraction: false, // يسمح بالتفاعل مع السويبر
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    breakpoints: {
        "320": {
            "slidesPerView": 1,
            "spaceBetween": 40
        },
        "768": {
            "slidesPerView": 2,
            "spaceBetween": 10
        },
        "1200": {
            "slidesPerView": 3,
            "spaceBetween": 10
        }
    }
});

// galler swiper
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    autoplay: {
        delay: 2500, // مدة التأخير بين الشرائح بالملي ثانية
        disableOnInteraction: false, // يسمح بالتفاعل مع السويبر
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        "320": {
            "slidesPerView": 1,
            "spaceBetween": 40
        },
        "768": {
            "slidesPerView": 3,
            "spaceBetween": 10
        },
        "1200": {
            "slidesPerView": 5,
            "spaceBetween": 10
        }
    }
})