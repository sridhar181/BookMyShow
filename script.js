const changeMode = () => {
    let mybody = document.body
    mybody.classList.toggle('mydark');
}

function onloadPage(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('search').style.opacity = '0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';

}

document.addEventListener("DOMContentLoaded", function () {
    const coupon = document.getElementById("coupon");
    setTimeout(function () {
      coupon.style.visibility = "hidden";
    }, 4000);
  });