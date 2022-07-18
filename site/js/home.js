import { Product } from "./classes/Product.js";

var application = new Vue({
	el : "#application",
	data : {
		test: "test",
		featuredProducts : [
			new Product(true, "Lorem"),
			new Product(true, "ipsum"),
			new Product(true, "dolor"),
			new Product(true, "sit")
		],
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
