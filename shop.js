const catalogItems = [
	{
		id: 1,
		name: 'R121-3/4',
		description: 'Классическая гитара R121-3/4 Family Series, размер 3/4, матовая, с чехлом',
		size: 600,
		price: 14900,
		avalible: false
	},
	{
		id: 2,
		name: 'Yamaha C40',
		description: 'Классическая гитара Yamaha C40, начальный уровень',
		size: 580,
		price: 15700,
		avalible: false
	},
	{
		id: 3,
		name: 'Prima DSCG-603',
		description: 'Классическая гитара Prima DSCG-603, для начинающих',
		size: 620,
		price: 16000,
		avalible: false
	},
	{
		id: 4,
		name: ' Pro Arte Solid',
		description: 'Классическая гитара Pro Arte Solid, Tonewood Top, с глянцевым топом из массива',
		size: 630,
		price: 19800,
		avalible: false
	},
	{
		id: 5,
		name: 'Kremona S65C Sofi',
		description: 'Классическая гитара Kremona S65C Sofia Soloist Series, с топом из массива кедра',
		size: 600,
		price: 21000,
		avalible: false
	},
];


const cartItem = [
	{
		goodId: 1,
		amount: 1
	},
	{
		goodId: 2,
		amount: 1
	},
];

const totalAmountSumm = function (id) {
	let result = 0;
	let qty = 0;
	let totalArray = [];
	for (let i = 0; i < cartItem.length; i++) {
		result = catalogItems[cartItem[i].goodId].price * cartItem[i].amount;
		qty += cartItem[i].amount;
		result += result;
	}
	totalArray["Общая сумма"] = result;
	totalArray["Общее кол-во"] = qty;
	return totalArray;
}

// функция - добавление товра в корзину
const plusItem = function (id) {
	for (let i = 0; i <= cartItem.length; i++) {
		if (cartItem[i].goodId === id) {
			cartItem[i].amount++;
		} else {
			cartItem.push({ goodId: id, amount: 1 });
			console.log("Добавлен новый товар");
		}
		let total = totalAmountSumm(id);
		console.log(total);
		return console.log(cartItem);
	}
}


// функция - убираем товра из корзины
const minusItem = function (id) {
	for (let i = 0; i <= cartItem.length; i++) {
		if (cartItem[i].goodId === id && cartItem[i].amount > 1) {
			cartItem[i].amount--;
		} else {
			cartItem.unshift({ goodId: id, amount: 1 });
			console.log("Товар был удален");
		}
		return console.log(cartItem);
	}
}

const reseteCart = function () {

	for (let i = 0; i <= cartItem.length; i++) {
		delete cartItem[i];
		console.log(cartItem);
	}
	console.log("Корзина пуста");
}



// добавим товар в корзину
console.log(plusItem(1));
// console.log(plusItem(3));

// убираем  товар из корзины
// console.log(minusItem(1));

// Очищаем полностью корзину
// console.log(reseteCart());
