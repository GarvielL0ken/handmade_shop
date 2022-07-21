import { Product } from "./Product.js";

export class Cart {
	static localStorageKey = "cart";
	static verbose = false;

	/*-----------------------------------------------------------------------*/
	/*Construct a default instance and attempt to load data from localStorage*/
	/*
	 *@param	{}	;
	 */
	/*-----------------------------------------------------------------------*/
	constructor() {
		var strCart;
		var objCart;

		this.size = 0;
		this.products = [];

		this.verbose_ = Cart.verbose;

		strCart = localStorage.getItem(Cart.localStorageKey);
		if (!strCart)
			return;

		objCart = JSON.parse(strCart);
		this.size = objCart.size;
		this.loadProducts(objCart.products);
	}

	/*-----------------------------------------------------------------------*/
	/*Takes an object generated from JSON.parse and adds each element as a   */
	/*new type Product to this.products                                      */
	/*
	 *@param	{object}	objProducts;
	 */
	/*-----------------------------------------------------------------------*/
	loadProducts(objProducts) {
		objProducts.forEach(product => {
			this.addProduct(Product.parseProduct(product));
		});
	}

	/*-----------------------------------------------------------------------*/
	/*Takes a type Product and adds it to this.products                      */
	/*
	 *@param	{Product}	product;
	 */
	/*-----------------------------------------------------------------------*/
	addProduct(product) {
		this.products.push(product);
		this.save();
	}

	/*-----------------------------------------------------------------------*/
	/*Saves the instance to localStorage                                     */
	/*
	 *@param	{}	;
	 */
	/*-----------------------------------------------------------------------*/
	save() {
		localStorage.setItem(Cart.localStorageKey, JSON.stringify(this));
	}
}