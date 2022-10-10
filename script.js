var form = document.querySelector('.signForm')
//var date = dateInput.value
var signBtn = document.getElementById('signSubmit')
var sign = document.getElementById('signInput')
var mercuryBtn = document.getElementById('mercurySubmit')
var mercury = document.getElementById('dateInput')
var dateInput = document.getElementById('dateInput')



document.querySelector('form.signForm').addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(sign.value);
var signValue = sign.value
  fetch("https://octoproxymus.herokuapp.com?secret=walrus&url=http://ohmanda.com/api/horoscope/" + signValue, {
    'Access-Control-Allow-Origin': '*'
  })
      .then(response => response.json())
      .then(function(astrology) {
        //console.log(astrology)
        displayHoroscope(astrology)
      })
  

})

document.querySelector('form.mercuryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(mercury.value);
var dateValue = sign.value
  fetch("https://mercuryretrogradeapi.com/?date=" + dateValue, {
    'Access-Control-Allow-Origin': '*'
  })
      .then(response => response.json())
      .then(function(mercury) {
      displayMercury(mercury)
      })
  

})

function displayHoroscope(data) {
  document.querySelector('.horoscopeEl').innerHTML= ""
  console.log(data)
  var horoscope = document.createElement('p')
  horoscope.textContent = data.horoscope
  document.querySelector('.horoscopeEl').append(horoscope)
}

function displayMercury(data2) {
  document.querySelector('.mercuryEl').innerHTML= ""
  console.log(data2)
  var mercury = document.createElement('p')
  mercury.textContent = data2.mercury
  document.querySelector('.mercuryEl').append(mercury)
}

// fetch("https://mercuryretrogradeapi.com/?date=" + date, {
//   'Access-Control-Allow-Origin': '*'
// })
//     .then(response => response.json())
//     .then(function(retrograde) {
//       console.log(retrograde)
//     })

// function handleSubmitSign(event) {
  
//   console.log(sign)
// }
