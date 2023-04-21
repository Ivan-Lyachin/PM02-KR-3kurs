const brand_item = document.getElementById('marka').value
const type_item = document.getElementById('product').value

console.log(brand_item, type_item)

// Вынимаем https ссылку строки
function getValue(array) {
  array.sort(sortFunction)
  function sortFunction(a, b) {
    if (a.name === b.name) {
      return 0
    } else {
      return a.name < b.name ? -1 : 1
    }
  }
  console.log(array)
  function sortFunction(a, b) {
    if (Number(a.price) === Number(b.price)) {
      return 0
    } else {
      return Number(a.price) < Number(b.price) ? -1 : 1
    }
  }
  console.log(array)
}

/// Обращаемся к базе данных через функцию с async await
const krData = async function (brand_item, type_item) {
  const response = await fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `,
  )

  console.log(response.status)

  if (!response.ok)
    throw new Error(`Ссылка не найдена. Ошибка ${response.status}`)
  const data = await response.json()

  getValue(data)
}
