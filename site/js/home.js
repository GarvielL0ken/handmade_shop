import { Cart } from "./classes/Cart.js";
import { NavigationBar } from "./classes/NavigationBar.js";
import { products } from "./data/data.js";

var application = new Vue({
	el : "#application",
	data : {
		test: "test",
		featuredProducts : "",
		newProducts : "",
		strCategory : "",
		cart : new Cart(true),
		navBar : new NavigationBar("Home")
	},
	methods : {
		isInCategory(product) {
			return product.isInCategory(this.strCategory);
		},
		printHTML() {
			return ("<div class='col-sm-4'>Test</div>");
		}
	},
	mounted() {
		this.strCategory = "Featured";
		this.featuredProducts = products.filter(this.isInCategory);
		
		this.strCategory = "New";
		this.newProducts = products.filter(this.isInCategory);
		
		this.navBar.cart = this.cart;
	}
	
})
