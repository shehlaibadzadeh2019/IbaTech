class Hamburger{
    constructor(size, stuffing){
        try{
            if(!size || size.type != 'size')
            throw new HamburgerException("no size given");
            this._size = size;
            if(!stuffing  || stuffing.type != 'stuffing')
            throw new HamburgerException('Stuffing argument is wrong');
            this._stuffing = [stuffing];
        }
        catch(e){
            console.log(e.message);
        }
        this._toppings = [];
    }
    addTopping(topping){
        try{
            if(!topping || topping.type != 'topping')
            throw new HamburgerException('Not Valid Topping');
            if(this._toppings.find((item)=> item.name == topping.name)) throw new HamburgerException('Topping already exist');
            this._toppings.push(topping);
        }
        catch(e){
            console.log(e.message);
        }
    }
    removeTopping(topping){
        let flag = false, index;
        try{
            if(!topping || topping.type != 'topping')
            throw new HamburgerException("There is no available Topping");
            for (const item of this._toppings) {
                if(item.name == topping.name )
                    flag = true;
                    index = this._toppings.indexOf(item);
            }
            if(!flag) throw new HamburgerException("Topping not exist");
            else  {
                this._toppings.splice(index, 1);
                console.log("Deleted succesfully");
            }
        }
        catch(e){
            console.log(e.message);
        }
    }
    get toppings(){
        return this._toppings;
    }
    get size(){
        return this._size;
    }
    get stuffing(){
        return this._stuffing;
    }
    calculatePrice(){
        let price = [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item)=> sum + item.price, 0);
        return price;
    }
    calculateCalories(){
        let cal  = [this._size, ...this._stuffing, ...this._toppings].reduce((sum, item)=> sum + item.calories, 0);
        return cal;
    }
}
    Hamburger.SIZE_SMALL = {
        price: 50,
        calories: 20,
        type: 'size'
    };
    Hamburger.SIZE_LARGE = {
        price: 100,
        calories: 40,
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
console.log("Is hamburger large: %s", hamburger.size === Hamburger.SIZE_LARGE); // -> false
// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.toppings.length); // 1
var h2 = new Hamburger();
// pass incorrect values, an topping instead of a size
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// add to many toppings
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 

