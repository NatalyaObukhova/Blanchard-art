
var realism = document.querySelector("input[name=realism]");
var real = document.getElementById('real_list');
realism.addEventListener('change', function() {
  if (this.checked) {
    real.style.display = 'block';
    // impres.style.display = 'none';
    
  } else {
    real.style.display = 'none'
  }
  // document.querySelector(".header__checkbox").checked = false;

  document.getElementById('impressionism').checked = false;
  document.getElementById('postimpressionism').checked = false;
  document.getElementById('vanguard').checked = false;
  document.getElementById('futurism').checked = false;
  document.getElementById('impres_list').style.display = 'none';
  document.getElementById('pimpres_list').style.display = 'none';
  document.getElementById('vanga_list').style.display = 'none';
  document.getElementById('futur_list').style.display = 'none';
});



var impressionism = document.querySelector("input[name=impressionism]");
var impres = document.getElementById('impres_list');
impressionism.addEventListener('change', function() {
  if (this.checked) {
    impres.style.display = 'block';
    // real.style.display = 'none';
  } else {
    impres.style.display = 'none'
  }
  document.getElementById('realism').checked = false;
  document.getElementById('postimpressionism').checked = false;
  document.getElementById('vanguard').checked = false;
  document.getElementById('futurism').checked = false;
  document.getElementById('real_list').style.display = 'none';
  document.getElementById('pimpres_list').style.display = 'none';
  document.getElementById('vanga_list').style.display = 'none';
  document.getElementById('futur_list').style.display = 'none';
});

var postimpressionism = document.querySelector("input[name=postimpressionism]");
var pimpres = document.getElementById('pimpres_list');
postimpressionism.addEventListener('change', function() {
  if (this.checked) {
    pimpres.style.display = 'block';
  } else {
    pimpres.style.display = 'none'
  }
  document.getElementById('realism').checked = false;
  document.getElementById('impressionism').checked = false;
  document.getElementById('vanguard').checked = false;
  document.getElementById('futurism').checked = false;
  document.getElementById('real_list').style.display = 'none';
  document.getElementById('impres_list').style.display = 'none';
  document.getElementById('vanga_list').style.display = 'none';
  document.getElementById('futur_list').style.display = 'none';
});

var vanguard = document.querySelector("input[name=vanguard]");
var vanga = document.getElementById('vanga_list');
vanguard.addEventListener('change', function() {
  if (this.checked) {
    vanga.style.display = 'block';
  } else {
    vanga.style.display = 'none'
  }
  document.getElementById('realism').checked = false;
  document.getElementById('impressionism').checked = false;
  document.getElementById('postimpressionism').checked = false;
  document.getElementById('futurism').checked = false;
  document.getElementById('real_list').style.display = 'none';
  document.getElementById('impres_list').style.display = 'none';
  document.getElementById('pimpres_list').style.display = 'none';
  document.getElementById('futur_list').style.display = 'none';
});

var futurism = document.querySelector("input[name=futurism]");
var futur = document.getElementById('futur_list');
futurism.addEventListener('change', function() {
  if (this.checked) {
    futur.style.display = 'block';
  } else {
    futur.style.display = 'none'
  }
  document.getElementById('realism').checked = false;
  document.getElementById('impressionism').checked = false;
  document.getElementById('postimpressionism').checked = false;
  document.getElementById('vanguard').checked = false;
  document.getElementById('real_list').style.display = 'none';
  document.getElementById('impres_list').style.display = 'none';
  document.getElementById('pimpres_list').style.display = 'none';
  document.getElementById('vanga_list').style.display = 'none';
});




const sliders = document.querySelectorAll('.swiper-container');


sliders.forEach(function() {

  let gallery = new Swiper('.gallery__content__swiper', {
    loop: false,
    allowTouchMove: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 55,
      pagination: {
        el: ".gallery__pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".gallery__btn__next",
        prevEl: ".gallery__btn__prev",
      },
      a11y: {
        nextSlideMessage: "Следующая страница",
        prevSlideMessage: "Предыдущая страница",
        slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
        slideRole: "none",
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
          allowTouchMove: false,
        },
        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 38,
          allowTouchMove: true,
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          allowTouchMove: true,
        },
      },
      }
    )

  let event = new Swiper('.event-container', {
    loop: false,
    allowTouchMove: true,
    autoplay: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 73,
      navigation: {
        nextEl: ".event__btn__next",
        prevEl: ".event__btn__prev",
      },
      a11y: {
        nextSlideMessage: "Следующая страница",
        prevSlideMessage: "Предыдущая страница",
        slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
        slideRole: "none",
      },
      breakpoints: {
        1920: {
          spaceBetween: 51,
          pagination: {
            el: ".event__pagination",
          },
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 28,
          allowTouchMove: false,
        },
        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
          allowTouchMove: true,
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          allowTouchMove: true,
        },
      },
  });

  let project = new Swiper('.project__slider', {
    loop: false,
    allowTouchMove: true,
    autoplay: false,
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: ".project__btn__next",
        prevEl: ".project__btn__prev",
      },
      a11y: {
        nextSlideMessage: "Следующая страница",
        prevSlideMessage: "Предыдущая страница",
        slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
        slideRole: "none",
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 53,
          allowTouchMove: false,
        },
        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 42,
          allowTouchMove: true,
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          allowTouchMove: true,
        },
      },
  });
})



  new Accordion('.accordion-container');

// select
    
  const filter = document.querySelector('.filter');
  const elem = new Choices(filter, {
    searchEnabled: false,
    selected: false,
    disabled: true,
    removeItems: true,
  });

  // catalog

  const catalogBtn = document.querySelectorAll('.tabs-nav__btn');
  const catalogList = document.querySelectorAll('.tabs-item');

  catalogBtn.forEach(function(element){

    element.addEventListener('click', function(e){
     const path = e.currentTarget.dataset.path;
  
     catalogBtn.forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
     e.currentTarget.classList.add('tabs-nav__btn--active');
  
     catalogList.forEach(function(element) {element.classList.remove('tabs-active')});
     document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
    });
  });


  // gallery-tab

  const galleryBtn = document.querySelectorAll('.gallery__slide');
  const galleryList = document.querySelectorAll('.gallery__tabs');

  galleryBtn.forEach(function(element){

    element.addEventListener('click', function(e){
     const path = e.currentTarget.dataset.path;
  
     galleryList.forEach(function(element) {element.classList.remove('gallery__tab--active')});
     document.querySelector(`[data-target="${path}"]`).classList.add('gallery__tab--active');
     document.body.classList.toggle('stop-scroll');
    });
  });

  // gallery__clear


  let galleryEl = document.querySelectorAll('.gallery__tab' );
  let close = document.querySelectorAll('.gallery__tab__close' );


  close.forEach(function(el){
    
     el.addEventListener('click',

     function () {

      galleryEl.forEach(function(element) {element.classList.remove('gallery__tab--active')});
      document.body.classList.remove('stop-scroll');
     })
  });


  tippy('#tt-0', {
    content: "Пример современных тенденций — современная методология разработки",
    theme: 'purple',
    trigger: 'click',
    onTrigger(instance, event) {
      instance.reference.classList.add('project-text__tooltip--active');
    },
    onHide(instance) {
      instance.reference.classList.remove('project-text__tooltip--active');
    },
    content: (reference) => reference.getAttribute('data-tooltip-content'),
    aria: {
      content: 'describedby',
    },
  })

  tippy('#tt-1', {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    theme: 'purple',
    trigger: 'click',
    onTrigger(instance, event) {
      instance.reference.classList.add('project-text__tooltip--active');
    },
    onHide(instance) {
      instance.reference.classList.remove('project-text__tooltip--active');
    },
    content: (reference) => reference.getAttribute('data-tooltip-content'),
    aria: {
      content: 'describedby',
    },
  });

  tippy('#tt-2', {
    content: "В стремлении повысить качество",
    theme: 'purple',
    trigger: 'click',
    onTrigger(instance, event) {
      instance.reference.classList.add('project-text__tooltip--active');
    },
    onHide(instance) {
      instance.reference.classList.remove('project-text__tooltip--active');
    },
    content: (reference) => reference.getAttribute('data-tooltip-content'),
    aria: {
      content: 'describedby',
    },
  });


  // burger

  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__menu');
  let menuLinks = menu.querySelectorAll('.nav__link');
  let entrance = document.querySelector('.header__el');

  burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    entrance.classList.toggle('header__el--active');

    document.body.classList.toggle('stop-scroll');
  })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      
        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        entrance.classList.remove('header__el--active');
    
        document.body.classList.remove('stop-scroll');
    })
});



// btnSearch

const btnSearch = document.querySelector('.header__search__open');
const search = document.querySelector('.header__search__mobile');
const searchClose = document.querySelector('.header__search__close');


btnSearch.addEventListener('click',

  function () {

    search.classList.toggle('header__search__mobile--active');
  }

);

searchClose.addEventListener('click',

  function () {

    search.classList.remove('header__search__mobile--active');
  }

);



// input-mask


var maskTel = document.getElementById('mask-tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(maskTel, maskOptions);


// validate

    const validator = new JustValidate(document.querySelector('#contacts-form'));

    validator
  .addField(document.querySelector('#name'), [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Недопустимый формат'
    },
  ]);
