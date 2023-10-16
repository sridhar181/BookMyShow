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

  let x = document.getElementById('out');
  let y = document.getElementById('weather');

  function geolocation(){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showPosition)
      }else{
          x.innerText = "Geo Not Supported"
      }
  }

  function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) =>  res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        y.innerText=`Weather of ${cityName} is ${temp}`
    })
}