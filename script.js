var form = document.querySelector('.signForm')
var dateInput = document.getElementById('dateInput')
var date = dateInput.value
var signBtn = document.getElementById('signSubmit')
var sign = document.getElementById('signInput')


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

function displayHoroscope(data) {
  document.querySelector('.horoscopeEl').innerHTML= ""
  console.log(data)
  var horoscope = document.createElement('p')
  horoscope.textContent = data.horoscope
  document.querySelector('.horoscopeEl').append(horoscope)
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
