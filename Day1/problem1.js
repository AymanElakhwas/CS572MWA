(function () {

    Array.prototype.isDual = function () {
        if(this.length == 0)
            return 1;
        if(this.length % 2 != 0)
            return 0;
        let pairSum = this[0]+this[1];
        for(let i = 2; i < this.length; i+=2){
            if(pairSum != this[i]+this[i+1])
                return 0;
        }
        return 1;
    }

    let testArr1 = new Array(1,2,3,0);
    console.log(testArr1.isDual());

    let testArr2 = new Array(1,2,2,1,3,0);
    console.log(testArr2.isDual());

    let testArr3 = new Array(1,1,2,2);
    console.log(testArr3.isDual());

    let testArr4 = new Array(1,2,3);
    console.log(testArr4.isDual());

    let testArr5 = new Array();
    console.log(testArr5.isDual());

})();