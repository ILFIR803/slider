'use strict';
let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i=0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
				if ((typeof(a)) === 'string' && typeof(a) != null && (typeof(b)) != null && a != '' &&  b!= '' && a.length < 50) {
					appData.expenses[a] = b;
				} else {
					i = i-1;
				}
			}
	},
	chooseOptExpenses: function () {
	for (let i=0; i < 3; i++) {
		let a = prompt("Введите необязательную статью расходов в этом месяце", '');
			if ((typeof(a)) === 'string' && typeof(a) != null && a != '' &&  a.length < 50) {
				optionalExpenses[i+1] = a;
			} else {
			
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);

		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Низкий доход");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
			console.log("Средний доход");
		} else if (appData.moneyPerDay > 2000 ) {
			console.log("Высокий доход");
		} else {
			console.log("Ошибка ввода данных");
		}
	},
	checkSavings: function  () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений");
			let percent = +prompt("Под какой процент?");

			appData.monthIncome = save/100*12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}

	},
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		if (typeof(items) ==="string" || typeof(items) != null || items != '') {
			appData.income = items.split(', ');
		};
		chooseIncome.forEach(function(elem, i) {
			console.log(i+1 + ':' + elem)
		});
	}

};














