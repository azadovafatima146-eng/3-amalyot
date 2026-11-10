// 1-masala. armstrongSon(n) — raqamlarining har biri raqamlar soni darajasiga ko‘tarilib qo‘shilsa, sonning o‘zi chiqadimi
// Yechim: avval sonda nechta raqam borligini sanayman, keyin har bir raqamni shu darajaga ko‘tarib yig‘indiga qo‘shaman va n bilan solishtiraman.
function armstrongSon(n) {
  let raqamlarSoni = 0;
  let qolgan = n;
  while (qolgan > 0) {
    raqamlarSoni++;
    qolgan = Math.floor(qolgan / 10);
  }

  let yigindi = 0;
  qolgan = n;
  while (qolgan > 0) {
    const raqam = qolgan % 10;
    yigindi += raqam ** raqamlarSoni;
    qolgan = Math.floor(qolgan / 10);
  }

  return yigindi === n;
}

// Tekshiruvlar
console.log(armstrongSon(153));  // kutilgan: true
console.log(armstrongSon(154));  // kutilgan: false
console.log(armstrongSon(9474)); // kutilgan: true (o‘z misolim: 9^4+4^4+7^4+4^4)
console.log(armstrongSon(7));    // kutilgan: true (chegaraviy holat: bitta raqamli son)
