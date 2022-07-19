import { Product } from "./classes/Product.js";
import { products } from "./data/data.js";

var application = new Vue({
	el : "#application",
	data : {
		test: "test",
		featuredProducts : products,
		newProducts : [
			new Product(true, "amet"),
			new Product(true, "consectetur"),
			new Product(true, "adipiscing"),
			new Product(true, "elit")
		]
	},
	methods : {
		printHTML() {
			return ("<div class='col-sm-4'>Test</div>");
		}
	}
	
})
