window.onload = function () {
  const button = document.querySelector('.main__btn');
  const comment = document.querySelector('.input__comment');
  const phone = document.querySelector('.input__phone');


  button.addEventListener("click", function (event) {
     event.preventDefault();
     checkComment();
     checkPhone();
  });


  function checkComment() {
    if (comment.value.trim().length === 0) {
      comment.value = 'gumerovm74@gmail.com';
    }
  }

  function checkPhone() {
    let regexp = /^\+(375)(\d{2})(\d{7})/;
    let str = phone.value;

    regexp.test(str) ?
    phone.value = "Номер верный!":
    phone.value = "Не верный номер введен вами!";
  }
};