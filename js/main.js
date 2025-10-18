
    
$(document).ready(function() {
    // التحقق من اللغة الحالية من وسم <html>
    let currentLang = $("html").attr("lang");

    // الكلمات حسب اللغة
    let phrases = currentLang === "it" 
        ? ["Sviluppatore", "Progettista"]   // إيطالي
        : ["Developer", "Designer"];        // إنجليزي

    let index = 0;
    let textIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {
        let fullText = phrases[index];
        if (!isDeleting) {
            currentText = fullText.substring(0, textIndex + 1);
            textIndex++;
            if (textIndex === fullText.length) {
                isDeleting = true;
            }
        } else {
            currentText = fullText.substring(0, textIndex - 1);
            textIndex--;
            if (textIndex === 0) {
                isDeleting = false;
                index = (index + 1) % phrases.length; // alterna بين الكلمات
            }
        }
        $(".typing-text").text(currentText);
    }

    setInterval(typeEffect, 300); // سرعة الكتابة
});


$(".imgfox").show(800, ()=>{
$(".linkfox a").show(1500,()=>{
$(" .vport h2 ").show(1000,()=>{
$(" .vport h1 ").show(1000,()=>{
$(" .myP").show(500);
});
});
});
});
//////////////////////////////////////////
$(document).ready(function () {
  let aboutSectionShown = false;

  const aboutObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !aboutSectionShown) {
        aboutSectionShown = true;
        const aboutSection = $('#about');
        aboutSection.removeClass('d-none').hide().fadeIn(1, () => {

          const h2 = $("#about h2");
          h2.removeClass("d-none").addClass("from-left in-view");

          const img = $("#about img");
          img.removeClass("d-none").addClass("from-left in-view");

          const p = $("#about p");
          const text = p.text();
          p.text(text).removeClass("d-none").addClass("from-left in-view");

          showContactsSection();
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  aboutObserver.observe(document.querySelector('#about'));

  function showContactsSection() {
    const contactsSection = $('#contacts');
    contactsSection.removeClass('d-none').hide().fadeIn(1, () => {

      const h2 = contactsSection.find('h2');
      h2.removeClass('d-none').addClass('from-left in-view');

      const mainP = contactsSection.find('p').first();
      const mainText = mainP.text();
      mainP.text(mainText).removeClass('d-none').addClass("from-left in-view");

      const cards = contactsSection.find('.col-lg-6 .card');
      cards.removeClass('d-none').hide().fadeIn(1, () => {
        cards.find('img, .card-body').removeClass('d-none').addClass('from-left in-view');

        // اللينكات الخمسة (GitHub, CV, Facebook, WhatsApp, Instagram)
        const links = cards.find('.list-group a');
        links.each(function (index) {
          const link = $(this);
          setTimeout(() => {
            link.removeClass('d-none').addClass('icon-from-left in-view');
          }, 150 * index); // كل لينك بعد 150ms من اللي قبله
        });

        showCommunicationSection();
      });
    });
  }

  function showCommunicationSection() {
    const commSection = $('#communication');
    commSection.removeClass('d-none').hide().fadeIn(1, () => {
      commSection.find('h2, p, .col-12.col-md-6 div')
        .removeClass('d-none')
        .addClass('from-left in-view');
      showSliderSection();
    });
  }

  function showSliderSection() {
    const sliderSection = $('section.m-2');
    sliderSection.removeClass('d-none').hide().fadeIn(1, () => {
      sliderSection.find('#carouselExampleIndicators')
        .removeClass('d-none')
        .addClass('from-left in-view');
    });
  }

});


