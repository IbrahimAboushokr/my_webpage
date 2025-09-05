
    
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

  // مراقب السيكشن الأول
  const aboutObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !aboutSectionShown) {
        aboutSectionShown = true;
        const aboutSection = $('#about');
        aboutSection.removeClass('d-none').hide().fadeIn(500, () => {

          // العنوان
          const h2 = $("#about h2");
          h2.removeClass("d-none").addClass("from-left");
          setTimeout(() => h2.addClass("in-view"), 250);

          // الصورة
          setTimeout(() => {
            const img = $("#about img");
            img.removeClass("d-none").addClass("from-left");
            setTimeout(() => img.addClass("in-view"), 250);

            // البراجراف
            setTimeout(() => {
              const p = $("#about p");
              const text = p.text();
              p.text(text).removeClass("d-none").addClass("from-left");
              setTimeout(() => p.addClass("in-view"), 250);

              // بعد الأول نشغل الثاني
              setTimeout(() => showContactsSection(), 1000);
            }, 1500);

          }, 1500);

        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  aboutObserver.observe(document.querySelector('#about'));

  // دالة لإظهار السيكشن الثاني
  function showContactsSection() {
    const contactsSection = $('#contacts');
    contactsSection.removeClass('d-none').hide().fadeIn(750, () => {

      const h2 = contactsSection.find('h2');
      h2.removeClass('d-none').addClass('from-left');
      setTimeout(() => h2.addClass('in-view'), 300);

      const mainP = contactsSection.find('p').first();
      const mainText = mainP.text();
      mainP.text(mainText).removeClass('d-none').addClass("from-left");
      setTimeout(() => mainP.addClass('in-view'), 300);

      const card = contactsSection.find('.col-lg-6 .card').first();
      const cardImg = card.find('img');
      const cardBody = card.find('.card-body');

      setTimeout(() => {
        card.removeClass('d-none').hide().fadeIn(500, () => {
          cardImg.removeClass('d-none').addClass('from-left');
          setTimeout(() => cardImg.addClass('in-view'), 250);

          cardBody.removeClass('d-none').addClass('from-left');
          setTimeout(() => cardBody.addClass('in-view'), 400);

          setTimeout(() => {
            const card2 = contactsSection.find('.col-lg-6 .card').last();
            const card2Body = card2.find('.card-body');
            const links = card2.find('.list-group a');

            card2.removeClass('d-none').hide().fadeIn(500, () => {
              card2Body.removeClass('d-none').addClass('from-left in-view');

              links.each(function(index) {
                const link = $(this);
                link.removeClass('d-none').addClass('icon-from-left');
                setTimeout(() => link.addClass('in-view'), 300 + index * 300);
              });

              setTimeout(() => showCommunicationSection(), 1500);
            });

          }, 1000);

        });
      }, 1000);

    });
  }

  // دالة لإظهار السيكشن الثالث
  function showCommunicationSection() {
    const commSection = $('#communication');
    commSection.removeClass('d-none').hide().fadeIn(1000, () => {

      const h2 = commSection.find('h2');
      h2.removeClass('d-none').addClass('from-left');
      setTimeout(() => h2.addClass('in-view'), 400);

      const mainP = commSection.find('p').first();
      const mainText = mainP.text();
      mainP.text(mainText).removeClass('d-none').addClass('from-left');
      setTimeout(() => mainP.addClass('in-view'), 400);

      setTimeout(() => {
        const infoDiv = commSection.find('.col-12.col-md-6').first().find('div');
        infoDiv.removeClass('d-none').addClass('from-left');
        setTimeout(() => infoDiv.addClass('in-view'), 500);
      }, 1000);

      setTimeout(() => {
        const mapDiv = commSection.find('.col-12.col-md-6').last().find('div');
        mapDiv.removeClass('d-none').addClass('from-left');
        setTimeout(() => mapDiv.addClass('in-view'), 750);
      }, 1500);

      setTimeout(() => showSliderSection(), 2500);
    });
  }

  // دالة لإظهار السيكشن الرابع
  function showSliderSection() {
    const sliderSection = $('section.m-2');
    sliderSection.removeClass('d-none').hide().fadeIn(1000, () => {
      const carousel = sliderSection.find('#carouselExampleIndicators');
      carousel.removeClass('d-none').addClass('from-left');
      setTimeout(() => carousel.addClass('in-view'), 500);
    });
  }

});


