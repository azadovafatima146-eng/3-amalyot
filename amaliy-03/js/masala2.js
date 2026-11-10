// 2-masala. palindromSatr(s) — bo‘sh joy va harf kattaligini hisobga olmaganda satr palindrommi
// Yechim: bo‘sh joylarni tashlab, harflarni kichik qilib yangi satr yig‘aman, so‘ng ikki chetdan o‘rtaga qarab belgilarni solishtiraman.
function palindromSatr(s) {
  let tozaSatr = "";
  for (const belgi of s) {
    if (belgi !== " ") {
      tozaSatr += belgi.toLowerCase();
    }
  }

  let chap = 0;
  let ong = tozaSatr.length - 1;
  while (chap < ong) {
    if (tozaSatr[chap] !== tozaSatr[ong]) {
      return false;
    }
    chap++;
    ong--;
  }
  return true;
}

// Tekshiruvlar
console.log(palindromSatr("Kiyik"));   // kutilgan: true
console.log(palindromSatr("Olma"));    // kutilgan: false
console.log(palindromSatr("Men nem")); // kutilgan: true (o‘z misolim, bo‘sh joyli)
console.log(palindromSatr(""));        // kutilgan: true (chegaraviy holat: bo‘sh satr)
