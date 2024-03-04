// array
const listImg = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

// variables
const fullCarousell = document.querySelector('.full-carousell');
const imgContainer = document.querySelector('.img-container');
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');
let autoScrol;
let counter = 0;

// array-className
const imgCollection = document.getElementsByClassName('img');
const imgPreviewCollection = document.getElementsByClassName('img-preview');

// function
function downScroll(){
  imgCollection[counter].classList.add('hide');
  imgPreviewCollection[counter].classList.add('shadow');
  imgPreviewCollection[counter].classList.remove('selected');
  counter++
  if (counter > (imgCollection.length - 1)){
    counter = 0;
  }
  imgCollection[counter].classList.remove('hide');
  imgPreviewCollection[counter].classList.remove('shadow');
  imgPreviewCollection[counter].classList.add('selected');
};

function upScroll(){
  imgCollection[counter].classList.add('hide');
  imgPreviewCollection[counter].classList.add('shadow');
  imgPreviewCollection[counter].classList.remove('selected');
  counter--
  if (counter < 0){
    counter = (imgCollection.length - 1);
  }
  imgCollection[counter].classList.remove('hide');
  imgPreviewCollection[counter].classList.remove('shadow');
  imgPreviewCollection[counter].classList.add('selected');
}

// code

for(let i = 0; i < listImg.length; i++){
  const img = listImg[i];
  imgContainer.innerHTML += `
  <img class="img hide" src="${img}">
  `
};

imgCollection[counter].classList.remove('hide');
imgPreviewCollection[counter].classList.remove('shadow');
imgPreviewCollection[counter].classList.add('selected');


topBtn.addEventListener('click', function(){
  upScroll()
});

bottomBtn.addEventListener('click', function(){
  downScroll();
});

autoScrol = setInterval(downScroll, 3000);

fullCarousell.addEventListener('mouseover', function(){
  clearInterval(autoScrol);
});

fullCarousell.addEventListener('mouseout', function(){
  autoScrol = setInterval(downScroll, 3000);
});

