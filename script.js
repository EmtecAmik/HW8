// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers


//  const numbersDiv = document.querySelector(".numbers")


//  for (let i = 100; i >= 50; i -= 10) {

//      const paragraph = document.createElement("p")
    
//     paragraph.textContent = i

//      numbersDiv.appendChild(paragraph)
//  }


// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const stringsArray = ["Lorem", "ipsum", "dolor", "sit", "amet"
// ]

// const stringsContainer = document.querySelector(".strings_container")

// stringsArray.forEach(function(string) {
//     const paragraph = document.createElement("p")
//     stringsContainer.appendChild(paragraph)
// })


// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.


// let users = [
//     { first_name: "Альберт", last_name: "Ракушкин", age: 25 },
//     { first_name: "Семен", last_name: "Бочковой", age: 17 },
//     { first_name: "Аркадий", last_name: "Променад", age: 30 }
// ]

// let usersContainer = document.querySelector(".users_container")

// for (let i = 0; i < users.length; i++) {
//     let user = users[i]

//     if (user.age >= 18) {
       
//         let card = document.createElement("div")
    
//         let userInfo = document.createElement("p")
//         userInfo.textContent = `Name: ${user.first_name} ${user.last_name}, Age: ${user.age}`

//         card.appendChild(userInfo)

//         usersContainer.appendChild(card)
//     }
// }