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
      // console.log(j)
    }
    i++
  }
  window.open(array[j].homepage).focus()
}

// Обращаемся к базе данных через функцию с async await
const krData = async function (strana_str) {
  const response = await fetch(
    ` http://de1.api.radio-browser.info/json/stations/bycountry/${strana_str}`,
  )

  console.log(response.status)

  // if (!response.ok)
  //   throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
  const radiostation = await response.json()

  getValue(radiostation)
}
