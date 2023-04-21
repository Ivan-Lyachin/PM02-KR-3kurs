const brand_item = document.getElementById('marka').value
const type_item = document.getElementById('product').value

console.log(brand_item, type_item)
const baza = []

// Вынимаем https ссылку строки
function getValue(array) {
  for (let i = 0; i < array.length; i++) {
    baza[i] = {
      brand: array[i].brand,
      name: array[i].name,
      description: array[i].description,
      image_link: array[i].image_link,
      price: array[i].price,
    }
  }
  console.log(array)
  console.log(baza)
}
// Обращаемся к базе данных через fetch и .then
const krData = function (brand_item, type_item) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `,
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
