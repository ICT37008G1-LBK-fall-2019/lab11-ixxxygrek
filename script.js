
let teqsti = document.querySelector('.teqsti').teqstiContent;
let teqsti2 = document.querySelector('.teqsti2');
let teqstiArray = teqsti.split(' ');
let xui = teqstiArray.map((item) => {
    if (item.match(/\w@\w/)){
        item = '<b  style="color:green">' + '#personaldata#' + '</b>';
        
    } else if (item.match(/(514|551|555|557|558|559|568|570|571|574|577|591|592|593|595|596|597|598|599)[0-9]{6}/)) {
        item = '<b style="color:blue">' + '#personaldata#' + '</b>';
    }
    return item;
});

let newteqsti = xui.join(' ');
teqsti2.innerHTML = newteqsti;

