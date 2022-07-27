import { Cart } from "./classes/Cart.js";
import { NavigationBar } from "./classes/NavigationBar.js";

var application = new Vue({
	el : "#application",
	data : {
		test: 'test success',
		cart : new Cart(true),
		navBar : new NavigationBar("About")
	},
	mounted() {
		this.navBar.cart = this.cart;
	}
})