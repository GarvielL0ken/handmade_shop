import { Cart } from "./classes/Cart.js";
import { Product } from "./classes/Product.js";
import { products } from "./data/data.js";

var application = new Vue({
	el : "#application",
	data : {
		cart : new Cart(true)
	},
	methods : {
	},
	mounted() {
	}
})
