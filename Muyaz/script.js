
let wishes = document.getElementById('wish-text');

let wishTxt = [
    '" Abu Sufiyan Muyaz "',
    'Many many happy returns of the day',
    'You are my Bast brother',
    'You are a very good boy',
    'Becauase you have a polity,beautiful mind',
    'Be a good & skilled programmer',
    'Be diligent and use the time',
    'Good luck on your next journey',
    'And,all time listening to parents',
    'Always pray for you',
    'Always be happy and healthy',
    'Always Love you Bro',
    'Creact By "Sabbir Hossain "'
];

let num = 0;
setInterval(function () {
    if (num >= wishTxt.length) {
        num = 0;
    }
    wishes.innerText = wishTxt[num];
    num++;
}, 3000);