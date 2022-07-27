import { Cart } from "./classes/Cart.js";
import { NavigationBar } from "./classes/NavigationBar.js";

var application = new Vue({
	el : "#application",
	data : {
		cart : new Cart(true),
		navBar : new NavigationBar("")
	},
	methods : {
		removeFromCart(product) {
			this.cart.deleteProductById(product.id_);
		}
	},
	mounted() {
		this.navBar.cart = this.cart;
	}
})
