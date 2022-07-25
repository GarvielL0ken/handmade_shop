import { Cart } from "./classes/Cart.js";
import { Product } from "./classes/Product.js";
import { products } from "./data/data.js";

var application = new Vue({
	el : "#application",
	data : {
		test: "test",
		featuredProducts : "",
		newProducts : "",
		strCategory : "",
		cart : new Cart(true)
	},
	methods : {
		isInCategory(product) {
			console.log(this.strCategory);
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
	}
	
})
