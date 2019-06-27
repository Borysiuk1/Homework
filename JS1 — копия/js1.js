var img = document.querySelector('img');
var arr = [
    'images/n4.png',
    'images/n5.png',
    'images/n6.png'
]

var slideShow = () => {
    setTimeout(() => {
        img.src = arr[0];
    }, 0);;
    setTimeout(() => {
        img.src = arr[1];
    }, 1000);
    setTimeout(() => {
        img.src = arr[2];
    }, 2000);

    setTimeout(() => {
        slideShow();
    }, 3000)
}

slideShow();
