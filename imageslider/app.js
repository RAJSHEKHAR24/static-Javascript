/// slider ko target kiya 

const slides = document.querySelectorAll(".slider");

var index = 0;


/// slides variable le andar loop chala le har slider ke bech 100% gap diya

slides.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});



const goPrev = () => {
  if (index == 0) {
    index = slides.length - 1;
    slideImage();
  } else {
    index--;
    slideImage();
  }
};

const goNext = () => {
  if (index == slides.length - 1) {
    index = 0;
    slideImage();
  } else {
    index++;
    slideImage();
  }
};


// yaha me silde ko move karunga
const slideImage = () => {
  slides.forEach((slider) => {
    slider.style.transform = `translateX(-${index * 100}%)`;
  });
};
