// function capitalizeFirstLetter (string) {
//   return string[0].toUpperCase() + string.slice(1)
// }

// const customerNames = customers.map(function (customer) {
//   return capitalizeFirstLetter(customer.name.first) +
//     ' ' +
//     capitalizeFirstLetter(customer.name.last)
// })

// const customerListItems = customerNames.map(function (name) {
//   const li = document.createElement('li')
//   li.textContent = name
//   return li
// })

// console.log(customerNames)

// const ul = document.createElement('ul')
// for (const li of customerListItems) {
//   ul.appendChild(li)
// }

// document.querySelector('#customers').appendChild(ul)

// // const customerPictures = customers.map(function (customer) {
// //   const img = document.createElement('img')
// //     img.src = customer.picture.large
// //     return img
// // })
const database = document.querySelector('#database')

function customerProfiles() {
  for (let customer of customers) {
    const profile = document.createElement('div')
    profile.classList.add('profile')

    const pic = document.createElement('img')
    pic.classList.add('pic')
    pic.src = customer.picture.large
    profile.appendChild(pic)

    const name = document.createElement('h2')
    name.classList.add('name')
    name.textContent = name.first + ' ' + name.last
    profile.appendChild(name)

    const address = document.createElement('p')
    location.classList.add('address')
    location.textContent = location.street + location.city + nameToAbbr(location.state) + location.postcode
    profile.appendChild(address)
}

database.appendChild('profile')
}
customerProfiles()