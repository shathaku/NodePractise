
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j)
        }, 1000);
    })(i)
}



