import { products } from "./data/data.js"
import { Cart } from "./classes/Cart.js"
import { Product } from "./classes/Product.js";

var application = new Vue({
	el : "#application",
	data : {
		title : '',
		products : products,
		displayedProducts : '',
		cart : new Cart(true)
	},
	methods : {
		addToCart(product) {
			this.cart.addProduct(product);
		}
	},
	mounted() {
		this.displayedProducts = products;
		console.log(this.cart);
	}
})