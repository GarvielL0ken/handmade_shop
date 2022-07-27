import { Cart } from "./classes/Cart.js";
import { NavigationBar } from "./classes/NavigationBar.js";

var application = new Vue({
	el : "#application",
	data : {
		cart : new Cart(true),
		navBar : new NavigationBar("Contact Us")
	},
	mounted() {
		this.navBar.cart = this.cart;
	}
})