import { Cart } from "./classes/Cart.js";

var application = new Vue({
	el : "#application",
	data : {
		cart : new Cart(true)
	}
})