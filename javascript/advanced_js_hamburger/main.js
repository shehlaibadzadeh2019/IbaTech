function Hamburger(size, stuffing) {
    try{
        if(!size || size.type != 'size') throw new HamburgerException("no size given");
             this.size = size;
        if(!stuffing || stuffing.type != 'stuffing') throw new HamburgerException('Stuffing argument is wrong');
                this.stuffing = [stuffing];
        this.toppings = [];
    }
    catch(e) {
        alert(e.message);
    }
}
Hamburger.SIZE_SMALL = {
    name: 'Small',
    price: 50,
    calories: 20,
    type: 'size'
};
Hamburger.SIZE_LARGE = {
    name: 'Large',
    price: 100,
    calories: 50,
    type: 'size'
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20,
    type: 'stuffing'
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5,
    type: 'stuffing'
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
    type: 'stuffing'
};
Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    calories: 5,
    type: 'topping'
};
Hamburger.TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    calories: 0,
    type: 'topping'
};
Hamburger.prototype.addTopping = function (topping) {
    try {
        if(!topping || topping.type != 'topping') throw new HamburgerException('Not Valid Topping');
        if(this.toppings.find((item) => item.name == topping.name)) throw new HamburgerException('Topping already exist');
        this.toppings.push(topping);
    }
    catch(e) {
        alert(e.message);
    }
}
Hamburger.prototype.removeTopping = function (topping) {
    let flag = false, index;
            try{
                if(!topping || topping.type != 'topping') throw new HamburgerException("There is no available Topping");
                for (const item of this.toppings) {
                    if(item.name == topping.name )
                        flag = true;
                        index = this.toppings.indexOf(item);
                }
                if(!flag) throw new HamburgerException("Topping not exist");
                else  {
                    this.toppings.splice(index, 1);
                    // console.log("Deleted succesfully");
                }
                   
            }
            catch(e){
                console.log(e.message);
            }
}
Hamburger.prototype.getToppings = function () {
    return this.toppings;
}
Hamburger.prototype.getSize = function () {
    return this.size;
}
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}
Hamburger.prototype.calculatePrice = function () {
    return [this.size, ...this.stuffing, ...this.toppings].reduce((sum, item) => sum + item.price, 0);
}
Hamburger.prototype.calculateCalories = function () {
    return [this.size, ...this.stuffing, ...this.toppings].reduce((sum, item) => sum + item.calories, 0);
}
Hamburger.prototype.getSize = function () {
    return this.size;
}
Hamburger.prototype.getTopping = function () {
    return this.toppings;
}
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}
function HamburgerException (message) { 
    this.message = message;
 }
// small hamburger with cheese
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// mayo topping
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// asking the number of calories
console.log("Calories: %f", hamburger.calculateCalories());
// asking the price
console.log("Price: %f", hamburger.calculatePrice());
// I've changed my mind, and I've decided to add more topping
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// Did hte price changed?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// How large is this hamburger
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1
var h2 = new Hamburger();
// pass incorrect values, an topping instead of a size
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'
// add to many toppings
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 

