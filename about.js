console.log('hello world');

function handleSubmit(evt) {
  evt.preventDefault();
  alert('Thank you for submitting! You rock!');
  console.log('form submit');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catImg = document.querySelector('img')
function catAlert(e) {
  e.preventDefault();
  alert('This cat loves you!!!')
}

catImg.addEventListener('click', catAlert);
