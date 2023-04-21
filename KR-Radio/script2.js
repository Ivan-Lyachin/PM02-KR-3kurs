const strana_str = document.getElementById('strana').value
console.log(strana_str)

// Вынимаем https ссылку для кнопки
function getValue(array) {
  let i = 0
  let max_click = 0
  let j
  while (i < array.length) {
    if (array[i].clickcount > max_click) {
      // console.log(i)
      // console.log(array[i].clickcount > max_click)

      // console.log(max_click)
      max_click = array[i].clickcount
      j = i
      console.log(j)
    }
    i++
  }
  window.open(array[j].homepage).focus()
}

// Обращаемся к базе данных через fetch и .then
const krData = function (strana_str) {
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
      getValue(data)
    })
}
