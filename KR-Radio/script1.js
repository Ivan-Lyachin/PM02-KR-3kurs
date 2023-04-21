const strana_str = document.getElementById('strana').value
console.log(strana_str)
// 4 кнопки
const knopka_1 = 'latino'
const knopka_2 = 'rock'
const knopka_3 = 'electronic'
const knopka_4 = 'relax'
const btn_janr = document.querySelector('.janr')
const htm = `<article >
knopka 1 = ${knopka_1}, knopka 2 = ${knopka_2}, knopka 3 = ${knopka_3}, knopka 4 = ${knopka_4}
  </article> `

btn_janr.insertAdjacentHTML('beforeend', htm)

// Вынимаем https ссылку для кнопки
function getValue(array, knopka) {
  let i = 0
  while (i < array.length) {
    console.log(i)
    console.log(knopka)
    console.log(array[i].tags)
    if (array[i].tags.includes(knopka)) {
      console.log(array[i].tags.includes(knopka))
      window.open(array[i].homepage).focus()
      return
    }

    i++
  }
}

// Обращаемся к базе данных через fetch и .then
const krData = function (knopka) {
  fetch(
    ` http://de1.api.radio-browser.info/json/stations/bycountry/${strana_str}`,
  )
    .then((response) => {
      console.log(response.status)

      if (!response.ok)
        throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
      return response.json()
    })
    .then(function (data) {
      getValue(data, knopka)
    })
}
