// 3-masala. oraliqdagilar(arr, a, b) — a dan b gacha (chegaralar ham kiradi) bo‘lgan elementlar
// Yechim: massivni aylanib chiqaman, element a dan kichik emas va b dan katta bo‘lmasa, uni yangi massivga qo‘shaman.
function oraliqdagilar(arr, a, b) {
  const natija = [];
  for (const element of arr) {
    if (element >= a && element <= b) {
      natija.push(element);
    }
  }
  return natija;
}

// Tekshiruvlar
console.log(oraliqdagilar([5, 12, 18, 3, 25, 9], 5, 15)); // kutilgan: [5, 12, 9]
console.log(oraliqdagilar([1, 2], 10, 20));               // kutilgan: []
console.log(oraliqdagilar([5, 15, 10], 5, 15));           // kutilgan: [5, 15, 10] (o‘z misolim: chegaralar kiradi)
console.log(oraliqdagilar([], 1, 10));                    // kutilgan: [] (chegaraviy holat: bo‘sh massiv)
