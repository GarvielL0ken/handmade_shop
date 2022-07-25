import { Cart } from "./classes/Cart.js";
import { Product } from "./classes/Product.js";
import { products } from "./data/data.js";
import { Currency } from "./lib.js";

var application = new Vue({
	el : "#application",
	data : {
		cart : new Cart(true)
	},
	methods : {
		removeFromCart(product) {
			this.cart.deleteProductById(product.id_);
		}
	},
	mounted() {
	}
})
