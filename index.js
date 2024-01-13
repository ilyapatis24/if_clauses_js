"use strict";

/Mission 1/;
let username = "Ilya", balance = 5001;

if (username === "admin") {
    console.log("Администратор\n");
    } else if (username === "") {
    console.log("Гость\n");
    } else {
    if (balance > 5000) {
    console.log("ВИП-клиент\n");
    } else if (balance > 1000) {
    console.log("Постоянный покупатель\n");
    }
}

/Mission 2/
let user = "netologist", orderOwner = "Ilya_Poteshonkov";

if (user === "admin" || user === orderOwner) {
    console.log("Редактирование разрешено\n");
    } else console.log("Заказ нельзя редактировать\n"); 

/Mission 3/
let bonusBalance = 500, orderPrice = 3000, purchasesPerMonth = 1, bonusStandard = 0.15, bonusHigh = 0.2, bonusAddition = 0.1, bonusTotal, salePercent = 0;

if (purchasesPerMonth >= 2) {
    bonusTotal = bonusBalance + orderPrice*bonusHigh + orderPrice*bonusAddition;
    salePercent = Math.floor((bonusHigh + bonusAddition)*100);
    console.log(`Процент от покупки: ${salePercent}%`);
    console.log(`Бонусный баланс покупателя: ${bonusTotal}`);
}
else  { 
    bonusTotal = bonusBalance + orderPrice*bonusStandard;
    salePercent = Math.floor(bonusStandard*100);
    console.log(`Процент от покупки: ${salePercent}%`);
    console.log(`Бонусный баланс покупателя: ${bonusTotal}`);
}