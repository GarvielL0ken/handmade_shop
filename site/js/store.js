import { products } from "./data/data.js";
import { Cart } from "./classes/Cart.js";
import { NavigationBar } from "./classes/NavigationBar.js";

var application = new Vue({
	el : "#application",
	data : {
		title : '',
		products : products,
		displayedProducts : '',
		cart : new Cart(true),
		navBar : new NavigationBar("Store")
	},
	methods : {
		addToCart(product) {
			this.cart.addProduct(product);
		}
	},
	mounted() {
		this.displayedProducts = products;

		this.navBar.cart = this.cart;
	}
})