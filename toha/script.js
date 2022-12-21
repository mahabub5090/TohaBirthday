
let wishes = document.getElementById('wish-text');

let wishTxt = [
    '" `Sabiha Hoq TohaMoni    (Miss. Mahabub) "',
    'Many many happy returns of the day',
    'You are My Love',
    'You are my heart',
    'you have a polity,beautiful mind',
    'Be a kind person',
    'Be diligent and use the time',
    'Good luck on your next journey',
    'And,all time listening to parents',
    'Always pray for you',
    'Always be happy and healthy',
    'Always Love you My Love',
    'Creact By "Your Lover --- Md. Mahabubar Rahman"'
];

let num = 0;
setInterval(function () {
    if (num >= wishTxt.length) {
        num = 0;
    }
    wishes.innerText = wishTxt[num];
    num++;
}, 3000);