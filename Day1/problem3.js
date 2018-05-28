(function () {
    let applyCoupon = category => discount => item =>{ item.price -= discount * item.price; return item;};
    const item = {
        "name":"Biscuits",
        "type":"regular",
        "category":"food",
        "price":2.0
    };

    console.log(applyCoupon("food")(0.1)(item).price === 1.8);


})();