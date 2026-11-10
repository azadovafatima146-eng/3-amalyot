// 4-masala. satrniSiqish(s) — ketma-ket takrorlangan harflarni "harf + soni" ko‘rinishida siqish
// Yechim: satrni aylanib, joriy harf va uning ketma-ket sonini sanayman; harf o‘zgarganda "harf+soni"ni natijaga yozib, sanashni yangidan boshlayman.
function satrniSiqish(s) {
  if (s.length === 0) {
    return "";
  }

  let natija = "";
  let joriyHarf = s[0];
  let soni = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === joriyHarf) {
      soni++;
    } else {
      natija += joriyHarf + soni;
      joriyHarf = s[i];
      soni = 1;
    }
  }
  natija += joriyHarf + soni; // oxirgi guruhni ham yozamiz

  return natija;
}

// Tekshiruvlar
console.log(satrniSiqish("aaabccdddd"));   // kutilgan: "a3b1c2d4"
console.log(satrniSiqish("abc"));          // kutilgan: "a1b1c1"
console.log(satrniSiqish("zzzzzzzzzzzz")); // kutilgan: "z12" (o‘z misolim: ikki xonali son)
console.log(satrniSiqish(""));             // kutilgan: "" (chegaraviy holat: bo‘sh satr)
