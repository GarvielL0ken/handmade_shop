import { products } from "./data/data.js"
import { Cart } from "./classes/Cart.js";
import { Product } from "./classes/Product.js";
import { getURLParameter } from "./lib.js"

var application = new Vue({
	el : "#application",
	data : {
		title : '',
		products : products,
		cart : new Cart(true)
	},
	methods : {
		printProduct() {
			if (this.selectedProduct)
				return (this.selectedProduct.printFullView());
			else
				return ('<h1>Error: Product Not Found</h1>');
		},
		addToCart(product) {
			this.cart.addProduct(product);
		}
	},
	mounted() {
		this.title = getURLParameter(window.location.href, "title");
		this.selectedProduct = Product.getProductByName(this.products, this.title);
	}
})