// git remote remove origin
// console.log([...arguments])
// let add = function (num1, num2, num3) {
// 	return num1 + num2 + num3
// }
// console.log(add(10, 20, 30)) //60 не поддерживана хоистингу

// let hello = function (user = 'Guest') {
// 	console.log(`Hello ${user}`)
// }
// hello('Tom')
// hello()

// Замыкание
//реализовать счетчик
// let counter = 0
// function counterFunc() {
// 	counter++
// 	console.log(counter)
// }
// counterFunc()

// function parrentFunc() {
// 	let counter = 0 //возварщает функцию
// 	return function () {
// 		counter++
// 		return counter
// 	}
// }
// let firstCounter = parrentFunc()
// console.log(firstCounter())
// console.log(firstCounter())
// console.log(firstCounter())
// let twoCounter = parrentFunc()
// console.log(twoCounter())
// console.log(twoCounter())
// console.log(twoCounter())

// function addNums(x) {
// 	return function (y) {
// 		return x + y
// 	}
// }

// let addFirst = addNums(10)
// console.log(addFirst(20))

// let addSecond = addNums(50)
// console.log(addFirst(30))
// console.log(addFirst(20))

// let e = 10
// function sum(a) {
// 	return function (b) {
// 		return function (c) {
// 			return function (d) {
// 				return a + b + c + d + e
// 			}
// 		}
// 	}
// }

//1
// создать функцию, которая принимает массив и ключевое слово для запроса, если это слово есть в массиве, то вывести алерт: Слово найдено, в противном случае вывести алерт: Данные не найдены(function expression)

// let searchFunc = function (arr, searchInput) {
// 	for (i of arr) {
// 		if (i.toLowerCase() === searchInput.toLowerCase()) {
// 			alert('Слово есть в массиве')
// 			return
// 		}
// 	}
// 	alert('Слово не найдено')
// 	return
// }

// let someArr = ['Tom', 'Jose', 'Monika', 'Rodrguez']
// searchFunc(someArr, 'Jack')
// searchFunc(someArr, 'Jose')

//2
// реализовать имитацию регистрации юзера, должно быть 3 функции, создание пользователя, юзер вводит имя, пароль, подтверждение пароля, происходит проверка на корректность паролей, если все ок, добавляем в бд формат: [{username: Name, password: Password, isLogin: true}, {username: Name, password: Password, isLogin: false}, {username: Name, password: Password, isLogin: false}], функция для логина, должна запрашивать логин и пароль, затем сверять с уже зареганными пользователями, если такой пользователь есть и пароль подходит, то выводить сообщение пользователь успешно авторизован, и менеджер, который все запускает(использовать function declaration)

//понять что от меня хотят
//собирать по кусочкам

//задача регистрация пользлвателя

// const db = [] // -> [{username: Name, password: Password, isLogin: true}]
// function registrUser() {
// 	let username = prompt('Enter username')
// 	// должны совпадать пароли и если логин совпадают
// 	for (i of db) {
// 		if (i.username === username) {
// 			alert('User with given username already exists!')
// 			manager()
// 		}
// 	}
// 	let password = prompt('Enter password')
// 	let passwordConfirm = prompt('Enter password condirmimation')
// 	if (password !== passwordConfirm) {
// 		// alert('Password don\'t match!')
// 		alert("Password don't match!")
// 		manager()
// 	}
// 	let userObject = {
// 		username: username,
// 		password: password,
// 		isLogin: false,
// 	}
// 	db.push(userObject)
// 	alert('Успешно')
// 	console.log(db)
// }

// function manager() {
// 	let answ = prompt('Registr(r), login(l),exit(e)').toLowerCase
// 	switch (answ) {
// 		case 'r':
// 			registrUser()
// 			break
// 		case 'e':
// 			return
// 		default:
// 			alert('Invalid operation')
// 			return
// 	}
// }
// manager()

// const db = [] //[{username: str, pass:str, isLogin: bool}]
// function registerUser() {
// 	let username = prompt('Enter username')
// 	for (i of db) {
// 		if (i.username === username) {
// 			alert('User with given username already exists!')
// 			manager()
// 			return
// 		}
// 	}
// 	let password = prompt('Enter password')
// 	let passwordConfirm = prompt('Enter password again')
// 	if (password !== passwordConfirm) {
// 		alert('Password do not match!')
// 		manager()
// 		return
// 	}
// 	let userObj = {
// 		username: username,
// 		password: password,
// 		isLogin: false,
// 	}
// 	db.push(userObj)
// 	alert('Successfull!')
// 	console.log(db)
// 	manager()
// }

// function manager() {
// 	let answ = prompt('Register(r), login(l), exit(e)').toLowerCase()
// 	switch (answ) {
// 		case 'r':
// 			registerUser()
// 			break
// 		case 'e':
// 			return
// 		default:
// 			alert('Invalid operation!')
// 			return
// 	}
// }

// manager(