const myForm = document.querySelector('#my-form');
const itemInput = document.querySelector('#item');
const msg = document.querySelector('.msg');
const itemList = document.querySelector('#list');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(itemInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter an item';
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${itemInput.value}`));
    itemList.appendChild(li);

    itemInput.value = '';

  }
}