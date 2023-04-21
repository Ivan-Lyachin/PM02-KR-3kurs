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
