alert("Привіт! Пройди простий тест, для заповнення використовуй лише дві відповіді 'правда' чи 'брехня'");
let count = 0;
let g1 = prompt('Хребет y верблюда викривлений за формою горба.');
if (g1.toLowerCase() == 'брехня') {
    count++;
} else {
    console.log('Нєа, горби верблюда складаються з тканини');
    
}
console.log(count);

let g2 = prompt('Блискавка ніколи не вдаряє в одне і те ж місце двічі');
if (g2.toLowerCase() == 'брехня') {
    count++;
} else {
    console.log('Ще як вдаряє');
}
console.log(count);

let g3 = prompt('Пабло Пікассо був настільки бідний, що спалював свої картини, щоб зігрітися.');
if (g3.toLowerCase() == 'правда'){
    count++;
} else {
    console.log('Пікасу був дяйсно настільки бідним що спалював картини(');
}
console.log(count);

let g4 = prompt('Помідор - це ягода.');
if (g4.toLowerCase() == 'правда'){
    count++;
} else {
    console.log('З точки зору опису науковців - це дійсно ягода');
}
console.log(count);

let g5 = prompt('В Африці водяться мухи-людожери');
if (g5.toLowerCase() == 'правда'){
    count++;
} else {
    console.log('Вони водяться(');
}
console.log(count);

let g6 = prompt('Відповідно до закону рівноваги у Всесвіті існують Білі діри в противагу Чорним.');
if (g6.toLowerCase() == 'брехня') {
    count++;
} else {
    console.log('Нііі які Білі діри?');
}
console.log(count);

let g7 = prompt('Половина всіх гірських порід на Землі має марсіанське походження.');
if (g7.toLowerCase() == 'брехня') {
    count++;
} else {
    console.log('Ми на Землі:)');
}
console.log(count)


let g8 = prompt('У 2004 році вчені виявили зірку-алмаз. Її діаметр - 4000 км, а ядро містить 10 мільярдів трильйонів карат.');
if (g8.toLowerCase() == 'правда'){
    count++;
} else {
    console.log('Це правда, було б непагано собі таку мати?');
}
console.log(count);

let g9 =  prompt('Крихітні нейтронні зірки з діаметром в 10 км, важать як Сонце. Сила тяжіння на них така, що висадившийся астронавт буде важити 1 млн тонн.');
if (g9.toLowerCase() == 'правда') {
    count++;
} else {
    console.log('Це правда');
}
console.log(count);


let g10 = prompt('У Землі кілька природних супутників.');
if (g10.toLowerCase() == 'брехня'){
    count++;
} else {
    console.log('В нас тільки Луна:)');
}
console.log(count);

if (count>0 && count<=3){
    console.log('Здається ти не поїв перед тестом(');
} else if (count>3 && count<=6) {
    console.log('Ти непогано поїв перед тестом. Маєш більше половини правильних відповідей:)');
} else if (count>6 && count<=8) {
    console.log('В тебе багато правильних відповідей, напевно підкрипився шоколадкою?');
} else if (count>8 && count<=10) {
    console.log('Ти супер, всі відповіді вірні! Признавайся, в тебе повноцінний раціон для вундеркіндів?');
}