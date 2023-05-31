const feedbackItems = document.querySelectorAll('.rating');
const container = document.getElementById('container');
let selectedValue;

feedbackItems.forEach(item => {
  item.addEventListener('click', function() {
    feedbackItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    selectedValue = this.querySelector('p').innerText;
  });
});

function send() {
  if (!selectedValue) {
    let err = document.getElementById('error');
    err.classList.add('error')
    err.classList.remove('hide')
    setTimeout(() => {
      err.classList.add('hide')
      err.classList.remove('error')
    },3000)
  } else {
    container.innerHTML =`
    <strong>Thanks For Feebaack.</strong>
    <p style="text-align:center;margin:10px 0 0 0;">Feedback: <b>${selectedValue}</b></p>`
  }
}
