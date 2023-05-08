const day = Number(prompt('День рождения?'));
const month =prompt('Месяц рождения?');

if (month === '1' || month === 'Январь' && day >= 21 && day <= 31) {
   alert('Вы Водолей');
} else if (month === '2' || month === 'Февраль' && day <= 18) {
   alert('Вы Водолей');
} else if (month === '2' || month === 'Февраль' && day >= 19 && day <= 30) {
   alert('Вы Рыбы');
} else if (month === '3' || month === 'Март' && day <= 20) {
   alert('Вы Рыбы');
} else if (month === 3 || month === 'Март' && (day >= 21 && day <= 31)) {
   alert('Вы Овен');
} else if (month === '4' || month === 'Апрель' && day <= 20) {
   alert('Вы Овен');
} else if (month === '4' || month === 'Апрель' && day >= 21 && day <= 30) {
   alert('Вы Телец');
} else if (month === '5' || month === 'Май' && day <= 21) {
   alert('Вы Телец');
} else if (month === '5' || month === 'Май' && day >= 22 && day <= 31) {
   alert('Вы Близнецы');
} else if (month === '6' || month === 'Июнь' && day <= 21) {
   alert('Вы Близнецы');
} else if (month === '6' || month === 'Июнь' && day >= 22 && day <= 30) {
   alert('Вы Рак');
} else if (month === '7' || month === 'Июль' && day <= 22) {
   alert('Вы Рак');
} else if (month === '7' || month === 'Июль' && day >= 23 && day <= 31) {
   alert('Вы Лев');
} else if (month === '8' || month === 'Август' && day <= 23) {
   alert('Вы Лев');
} else if (month === '8' || month === 'Август' && day >= 24 && day <= 30) {
   alert('Вы Дева');
} else if (month === '9' || month === 'Сентябрь' && day <= 22) {
   alert('Вы Дева');
} else if (month === '9' || month === 'Сентябрь' && day >= 23 && day <= 31) {
   alert('Вы Весы');
} else if (month === '10' || month === 'Октябрь' && day <= 23) {
   alert('Вы Весы');
} else if (month == '10' || month === 'Октябрь' && day >= 24 && day <= 30) {
   alert('Вы Скорпион');
} else if (month === '11' || month === 'Ноябрь' && day <= 22) {
   alert('Вы Скорпион');
} else if (month === '11' || month === 'Ноябрь' && day >= 23 && day <= 31) {
   alert('Вы Стрелец');
} else if (month === '12' || month === 'Декабрь' && day <= 21) {
   alert('Вы Стрелец');
} else if (month === '12' || month === 'Декабрь' && day >= 22 && day <= 30) {
   alert('Вы Козерог');
} else if (month === '1' || month === 'Январь' && day <= 20) {
   alert('Вы Козерог');
} else {
   alert('Error');
}