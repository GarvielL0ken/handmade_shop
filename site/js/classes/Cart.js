import { Product } from "./Product.js";

export class Cart {
	static localStorageKey = "cart";

	constructor(verbose) {
		var strCart;
		var objCart;

		this.size = 0;
		this.products = [];

		this.verbose_ = verbose;

		strCart = localStorage.getItem(Cart.localStorageKey);
		if (!strCart)
			return;

		objCart = JSON.parse(strCart);
		this.size = objCart.size;
		this.loadProducts(objCart.products);
	}

	loadProducts(objProducts) {
		objProducts.forEach(product => {
			this.addProduct(Product.parseProduct(product));
		});
	}

	addProduct(product) {
		this.products.push(product);
		this.save();
	}

	save() {
		localStorage.setItem(Cart.localStorageKey, JSON.stringify(this));
	}
}