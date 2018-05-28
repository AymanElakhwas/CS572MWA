(function () {
    function isWeekend() {
        const todayDate = new Date();
        const day = todayDate.getDay();

        const weekend = {0:"weekday", 1:"weekday",2:"weekday",3:"weekday",4:"weekday",5:"weekday",6:"weekend"};
        return weekend[day];
    }

    console.log(isWeekend());
})();