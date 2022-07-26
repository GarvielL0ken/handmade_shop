import { Cart } from "./classes/Cart.js";

var application = new Vue({
	el : "#application",
	data : {
		test: 'test success',
		cart : new Cart(true)
	}
})