// 5-masala. bahoStatistikasi(ballar) — har bir bahoga nechta talaba to‘g‘ri kelishini obyektda qaytarish
// Yechim: to‘rtta hisoblagichli obyekt yarataman, har bir ballni diapazoniga qarab tegishli hisoblagichga 1 qo‘shaman.
function bahoStatistikasi(ballar) {
  const statistika = { alo: 0, yaxshi: 0, qoniqarli: 0, qoniqarsiz: 0 };

  for (const ball of ballar) {
    if (ball >= 86) {
      statistika.alo++;
    } else if (ball >= 71) {
      statistika.yaxshi++;
    } else if (ball >= 56) {
      statistika.qoniqarli++;
    } else {
      statistika.qoniqarsiz++;
    }
  }

  return statistika;
}

// Tekshiruvlar
console.log(bahoStatistikasi([92, 75, 60, 45, 88, 71])); // kutilgan: { alo: 2, yaxshi: 2, qoniqarli: 1, qoniqarsiz: 1 }
console.log(bahoStatistikasi([100, 86, 85, 56, 55, 0])); // kutilgan: { alo: 2, yaxshi: 1, qoniqarli: 1, qoniqarsiz: 2 } (o‘z misolim: chegaralar)
console.log(bahoStatistikasi([]));                       // kutilgan: { alo: 0, yaxshi: 0, qoniqarli: 0, qoniqarsiz: 0 } (chegaraviy holat)
console.log(bahoStatistikasi([70]));                     // kutilgan: { alo: 0, yaxshi: 0, qoniqarli: 1, qoniqarsiz: 0 } (bitta element)
