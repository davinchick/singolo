document.addEventListener("DOMContentLoaded", () =>{

// --------------------- menu check && scroll effects
      const header = document.querySelector('.header');
      const links = header.querySelectorAll('.menu_link');

      const removeCl = () =>{
         [...links].forEach(el => {
         el.classList.remove('active');
       });
      };

      const scroll = (section) => {
         if (section) {
             section.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
             });
           }
      };
      document.addEventListener("DOMContentLoaded", () =>{

         // --------------------- menu check && scroll effects
               const header = document.querySelector('.header');
               const links = header.querySelectorAll('.menu_link');
         
               const removeCl = () =>{
                  [...links].forEach(el => {
                  el.classList.remove('active');
                });
               };
         
               const scroll = (section) => {
                  if (section) {
                      section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
               };
         
               header.addEventListener('click', (e) => {
                  const target = e.target;
                  if (target.classList.contains('menu_link')) {
                    e.preventDefault(); 
                    removeCl(); 
                    target.classList.add('active'); 
         
                    const sectionId = target.getAttribute('href').substr(1);  //--remove '#'
                    const targetId = document.getElementById(sectionId);
                    scroll(targetId);
                  }  
               });
         
         
         // ----------------------- Slider section
              
               const phone1 = document.querySelector('.slider_cellphone1');
               const bg1 = phone1.querySelector('.bg_left');
               const phone2 = document.querySelector('.slider_cellphone2');
               const bg2 = phone2.querySelector('.bg_right');
               const phone3 = document.querySelector('.slide__second__phone');
               const bg3 = phone3.querySelector('.slide__second__phone__layer');
               phone1.addEventListener('click', (e) => {
                  e.preventDefault();    
                  bg1.classList.toggle("blackScreen");
               });
               phone2.addEventListener('click', (e) => {  
                  e.preventDefault();   
                  bg2.classList.toggle("blackScreen");
               });
               phone3.addEventListener('click', (e) => {
                  e.preventDefault();
                  bg3.classList.toggle("lol");
               });
         
         
               var slideIndex = 1; 
               goToSlide(slideIndex);
               const buttonNext = document.querySelector(".btn-slider.right"); 
               buttonNext.onclick = function plusSlide() {
                  goToSlide(slideIndex += 1);
               };
               const buttonPrev = document.querySelector(".btn-slider.left"); 
               buttonPrev.onclick = function minusSlide() {
                  goToSlide(slideIndex -= 1);
               };
               function goToSlide(n) { 
                  var i;
                  var slides = document.getElementsByClassName("slider__cellphone"); 
                  if (n > slides.length) {
                     slideIndex = 1;
                  }
                  if (n < 1) {
                     slideIndex = slides.length;
                  }
                  for (i = 0; i < slides.length; i++) {
                     slides[i].style.display = "none";
                  } 
                  slides[slideIndex - 1].style.display = "flex"; 
               }
         
         
         
         
          // ----------------------- Portfolio section
         
         // -------border for each image 
               const blockImage = document.querySelectorAll(".gallery__item");
               for (var i = 0; i < blockImage.length; i++) {
                  blockImage[i].onclick = function() {
                     for (var j = 0; j < blockImage.length; j++) {
                        blockImage[j].style.border = '';
                     }
                     this.style.border = '5px solid #F06C64';
                  };
               }
         
                 const tabsUl = document.querySelector('.tabs__caption');
                 const gallery = document.querySelector('.gallery');
                 tabsUl.addEventListener('click', function (event) {
                     const galleryDiv = gallery.querySelectorAll('div');
                     const el = event.target;
                     if (el.tagName === 'LI') {
                         tabsUl.querySelectorAll('.portfolio_btn').forEach(el => {
                             el.classList.remove('active_tab');
                         });
                         gallery.insertAdjacentElement('afterbegin', galleryDiv[galleryDiv.length - 1]);
                         el.classList.add('active_tab');
                     }
                 });
         
         
         
          // ----------------------- FeedBAck section
         
               const email = document.querySelector(".email");
               const name = document.querySelector(".name");
               const subject = document.querySelector(".subject"); 
               const textarea = document.querySelector(".form__textarea");
         
               const modalWindow = document.querySelector(".modalWindow");
               const modalText = document.querySelector(".subject__text");
               const modalTextDescr = document.querySelector(".descr__text");
               const feedbackName = document.querySelector(".feedback_name");
         
               const showModalWindow = document.querySelector("#submitBtn");
               const modalWindowExit = document.querySelector(".closeBtn");
         
               showModalWindow.addEventListener("click", function (event) {
                  event.preventDefault();
                  feedbackName.innerHTML = `${name.value},`;
                  if (correctName() && correctEmail()) {
                     if (!subject.value) {
                           modalText.innerHTML = "Без темы";
                           if (!textarea.value) {
                            modalTextDescr.innerHTML = "Без описания";
                           }
                     }
                     else {
                           modalText.innerHTML = `Тема: ${subject.value}.`;
                           modalTextDescr.innerHTML = `Описание: ${textarea.value}`;
                     }
                     modalWindow.classList.remove("disabled");
                  }
               });  
         
               modalWindowExit.addEventListener("click", function () {
                  name.value = '';
                  email.value = '';
                  subject.value = '';
                  textarea.value = '';
                  modalWindow.classList.add("disabled");
               });
         
         // -----Input Name validation
               const correctName = function () {
                  const validName = function (name) {
                     let res = /[А-Яа-яA-Za-z' -]+/u;
                     return res.test(name);
                  };
                  if (!name.value) {
                     name.style.outline = '2px solid red';
                     return false;
                  }
                  else if (validName(name.value) == false) {
                     name.style.outline = '2px solid red';
                     return false;
                  }
                  name.style.outline = '';
                  return true;
               };
         
         // -----Input Email validation
               const correctEmail = function () {
                  const validMail= function(email) {
                     let res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                     return res.test(email);
                  };
                  if (!email.value) {
                     email.style.outline = '2px solid red';
                     return false;
                  }
                  else if (validMail(email.value) === false) {
                     email.style.outline = '2px solid red';
                     return false;
                  }
                  email.style.outline = '';
                  return true;
               };
         
         
         
         
            //   ------------- Burger Menu
            const burger = document.querySelector(".menu-header__icon");
            const headerMenu = document.querySelector(".header__menu");
            burger.addEventListener("click", function () {
                headerMenu.classList.toggle("active");
                burger.classList.toggle("active");
                if(headerMenu.classList.contains('active')){
                    document.body.style.overflow = "hidden"; 
                } else {
                    document.body.style.overflow = "";
                }
            });
         
         
         });
         
      header.addEventListener('click', (e) => {
         const target = e.target;
         if (target.classList.contains('menu_link')) {
           e.preventDefault(); 
           removeCl(); 
           target.classList.add('active'); 

           const sectionId = target.getAttribute('href').substr(1);  //--remove '#'
           const targetId = document.getElementById(sectionId);
           scroll(targetId);
         }  
      });


// ----------------------- Slider section
     
      const phone1 = document.querySelector('.slider_cellphone1');
      const bg1 = phone1.querySelector('.bg_left');
      const phone2 = document.querySelector('.slider_cellphone2');
      const bg2 = phone2.querySelector('.bg_right');
      const phone3 = document.querySelector('.slide__second__phone');
      const bg3 = phone3.querySelector('.slide__second__phone__layer');
      phone1.addEventListener('click', (e) => {
         e.preventDefault();    
         bg1.classList.toggle("blackScreen");
      });
      phone2.addEventListener('click', (e) => {  
         e.preventDefault();   
         bg2.classList.toggle("blackScreen");
      });
      phone3.addEventListener('click', (e) => {
         e.preventDefault();
         bg3.classList.toggle("lol");
      });


      var slideIndex = 1; 
      goToSlide(slideIndex);
      const buttonNext = document.querySelector(".btn-slider.right"); 
      buttonNext.onclick = function plusSlide() {
         goToSlide(slideIndex += 1);
      };
      const buttonPrev = document.querySelector(".btn-slider.left"); 
      buttonPrev.onclick = function minusSlide() {
         goToSlide(slideIndex -= 1);
      };
      function goToSlide(n) { 
         var i;
         var slides = document.getElementsByClassName("slider__cellphone"); 
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         } 
         slides[slideIndex - 1].style.display = "flex"; 
      }




 // ----------------------- Portfolio section

// -------border for each image 
      const blockImage = document.querySelectorAll(".gallery__item");
      for (var i = 0; i < blockImage.length; i++) {
         blockImage[i].onclick = function() {
            for (var j = 0; j < blockImage.length; j++) {
               blockImage[j].style.border = '';
            }
            this.style.border = '5px solid #F06C64';
         };
      }

        const tabsUl = document.querySelector('.tabs__caption');
        const gallery = document.querySelector('.gallery');
        tabsUl.addEventListener('click', function (event) {
            const galleryDiv = gallery.querySelectorAll('div');
            const el = event.target;
            if (el.tagName === 'LI') {
                tabsUl.querySelectorAll('.portfolio_btn').forEach(el => {
                    el.classList.remove('active_tab');
                });
                gallery.insertAdjacentElement('afterbegin', galleryDiv[galleryDiv.length - 1]);
                el.classList.add('active_tab');
            }
        });



 // ----------------------- FeedBAck section

      const email = document.querySelector(".email");
      const name = document.querySelector(".name");
      const subject = document.querySelector(".subject"); 
      const textarea = document.querySelector(".form__textarea");

      const modalWindow = document.querySelector(".modalWindow");
      const modalText = document.querySelector(".subject__text");
      const modalTextDescr = document.querySelector(".descr__text");
      const feedbackName = document.querySelector(".feedback_name");

      const showModalWindow = document.querySelector("#submitBtn");
      const modalWindowExit = document.querySelector(".closeBtn");

      showModalWindow.addEventListener("click", function (event) {
         event.preventDefault();
         feedbackName.innerHTML = `${name.value},`;
         if (correctName() && correctEmail()) {
            if (!subject.value) {
                  modalText.innerHTML = "Без темы";
                  if (!textarea.value) {
                   modalTextDescr.innerHTML = "Без описания";
                  }
            }
            else {
                  modalText.innerHTML = `Тема: ${subject.value}.`;
                  modalTextDescr.innerHTML = `Описание: ${textarea.value}`;
            }
            modalWindow.classList.remove("disabled");
         }
      });  

      modalWindowExit.addEventListener("click", function () {
         name.value = '';
         email.value = '';
         subject.value = '';
         textarea.value = '';
         modalWindow.classList.add("disabled");
      });

// -----Input Name validation
      const correctName = function () {
         const validName = function (name) {
            let res = /[А-Яа-яA-Za-z' -]+/u;
            return res.test(name);
         };
         if (!name.value) {
            name.style.outline = '2px solid red';
            return false;
         }
         else if (validName(name.value) == false) {
            name.style.outline = '2px solid red';
            return false;
         }
         name.style.outline = '';
         return true;
      };

// -----Input Email validation
      const correctEmail = function () {
         const validMail= function(email) {
            let res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return res.test(email);
         };
         if (!email.value) {
            email.style.outline = '2px solid red';
            return false;
         }
         else if (validMail(email.value) === false) {
            email.style.outline = '2px solid red';
            return false;
         }
         email.style.outline = '';
         return true;
      };




   //   ------------- Burger Menu
   const burger = document.querySelector(".menu-header__icon");
   const headerMenu = document.querySelector(".header__menu");
   burger.addEventListener("click", function () {
       headerMenu.classList.toggle("active");
       burger.classList.toggle("active");
       if(headerMenu.classList.contains('active')){
           document.body.style.overflow = "hidden"; 
       } else {
           document.body.style.overflow = "";
       }
   });


});
