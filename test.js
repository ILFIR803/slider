'use strict';
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



for (let i=0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		if ((typeof(a)) === 'string' && typeof(a) != null && (typeof(b)) != null && a != '' &&  b!= '' && a.length < 50) {
			appData.expenses[a] = b;
		} else {
		
		}
}
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
// 	console.log("Низкий доход");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
// 	console.log("Средний доход");
// } else if (appData.moneyPerDay > 2000 ) {
// 	console.log("Высокий доход");
// } else {
// 	console.log("Ошибка ввода данных");
// }

switch (appData.moneyPerDay) {
	case appData.moneyPerDay < 100:
		console.log("Низкий доход");
		break;
	case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
		console.log("Средний доход");
		break;
	case appData.moneyPerDay > 2000:
		console.log("Высокий доход");
		break;
	default: 
		console.log("Ошибка ввода данных");
		break;
}