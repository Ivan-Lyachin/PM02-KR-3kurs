const god = document.getElementById('god').value
const strana_cod = document.getElementById('strana_cod').value

console.log(god, strana_cod)

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
// Обращаемся к базе данных через fetch и .then
const krData = function (god, strana_cod) {
  fetch(` https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`)
    .then((response) => {
      console.log(response.status)

      if (!response.ok)
        throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
      return response.json()
    })
    .then(function (data) {
      getValue(data, god, strana_cod)
    })
}
