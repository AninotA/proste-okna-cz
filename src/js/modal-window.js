// "use strict"

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('_req');


//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];

//     }
//   }

// });

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-main-open]'),
    // openModalBtnsec: document.querySelector('[data-modal-main-opensec]'),
    // openModalBtnthird: document.querySelector('[data-modal-main-openthird]'),
    closeModalBtn: document.querySelector('[data-modal-main-close]'),
    modal: document.querySelector('[data-main-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.openModalBtnsec.addEventListener('click', toggleModal);
  // refs.openModalBtnthird.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

