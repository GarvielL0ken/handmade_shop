import { Product } from "./classes/Product.js";
import { getURLParameter } from "./lib.js"

var application = new Vue({
	el : "#application",
	data : {
		title : '',
		products : [
			new Product(true, "Lorem", 'Garvielloken.jpg', 'Garviel Loken', 'Always so straight up and down'),
			new Product(true, "ipsum", 'TarikTorgaddon.jpg', 'Tarik Torgaddon', 'Do you really think you have a chance? Really? Your yellow ragamuffins against the best of the best?'),
			new Product(true, "dolor"),
			new Product(true, "sit"),
			new Product(true, "amet"),
			new Product(true, "consectetur"),
			new Product(true, "adipiscing"),
			new Product(true, "elit")
		]
	},
	methods : {
		printProduct() {
			if (this.selectedProduct)
				return (this.selectedProduct.printFullView());
			else
				return ('');
		}
	},
	mounted() {
		this.title = getURLParameter(window.location.href, "title");
		this.selectedProduct = Product.getProductByName(this.products, this.title); 
	}
})