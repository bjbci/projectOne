
var form = document.querySelector('.signForm')
//var date = dateInput.value
var signBtn = document.getElementById('signSubmit')
//var sign = document.getElementById('signInput')
var mercuryBtn = document.getElementById('mercurySubmit')
var mercury = document.getElementById('dateInput')
var dateInput = document.getElementById('dateInput')
document.querySelector('#signSelector').addEventListener('click', function (e) {
e.preventDefault();
console.log(e)
var signValue = e.target.id
  fetch("https://octoproxymus.herokuapp.com?secret=walrus&url=http://ohmanda.com/api/horoscope/" + signValue, {
    'Access-Control-Allow-Origin': '*'
  })
      .then(response => response.json())
      .then(function(astrology) {
       displayHoroscope(astrology)
      })
})
document.querySelector('form.mercuryForm').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(mercury.value);
var dateValue = dateInput.value
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
  var horoscope = document.createElement('p');
  horoscope.textContent = data.horoscope
  document.querySelector('.horoscopeEl').append(horoscope)
}

function displayMercury(data2) {
  //console.log(data2)
  var src =  data2.is_retrograde?"mercuryis.png": "mercurynot2.png"; //ternary operator 
  document.querySelector('.mercuryEl').innerHTML = `<img src="${src}" alt="Mercury Retrograde Graphic">` //template literals
}

var isIsNot=document.getElementById("isIsNotRetrograde")
console.log(isIsNot)
fetch("https://mercuryretrogradeapi.com")
.then(function(response){
    return response.json()

})
.then(function(jsonData){
    console.log(jsonData)
    if (jsonData === true){
        isIsNot.innerText="MERCURY IS IN RETROGRADE TODAY"
    }else {
        isIsNot.innerText="TODAY MERCURY IS NOT IN RETROGRADE"
    }
})
console.log(dateInput.multiple)
console.log(mercury.input)
var mercuryRetrogradeHx={
    dateSelected:dateInput.value,
    textWill:"Mercury will be in retrograde",
    textWillNot:"Mercury will not be in retrograde",
}
localStorage.setItem("mercuryRetrogradeHx",jsonData)
console.log(isRetrograde)