const god = document.getElementById('god').value
const strana_cod = document.getElementById('strana_cod').value

console.log(god, strana_cod)
const zapis = []
let j = 0
// Вынимаем https ссылку строки
function getValue(array) {
  array.sort(sortFunction)
  function sortFunction(a, b) {
    if (a.localName === b.localName) {
      return 0
    } else {
      return a.localName < b.localName ? -1 : 1
    }
  }
  console.log(array)
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

  getValue(data)
}
