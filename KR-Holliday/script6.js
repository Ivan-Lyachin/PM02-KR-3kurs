const god = document.getElementById('god').value
const strana_cod = document.getElementById('strana_cod').value

console.log(god, strana_cod)
const zapis = []
let j = 0
// Вынимаем ссылку строки
function getValue(array, god, strana_cod) {
  for (let i = 0; i < array.length; i++) {
    let data = array[i].date.substr(5, 2)

    //Создаем двумерный массив
    if (data === '05') {
      zapis[j] = [array[i].date, array[i].localName, array[i].name]
      j++
      console.log(data, array[i].date, zapis[j])
    }
  }
  //Вывод данных
  console.log(zapis)
}

/// Обращаемся к базе данных через функцию с async await
const krData = async function (god, strana_cod) {
  const response = await fetch(
    ` https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`,
  )

  console.log(response.status)

  // if (!response.ok)
  //   throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
  const data = await response.json()

  getValue(data, god, strana_cod)
}
