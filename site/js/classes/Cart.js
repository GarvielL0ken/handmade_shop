import { Product } from "./Product.js";
import { Currency } from "../lib.js";

export class Cart {
	static	/*bool*/	verbose = false;
	
	static	/*string*/	localStorageKey=	"cart";
	static	/*string*/	defaultClass=		"div-items-in-cart";
	static	/*string*/	overflowClass=		"div-items-in-cart overflow";
	
	static	/*int*/		maxIconDisplay=		100;

	/*------------------------------CONSTRUCTOR-------------------------------/
	 *Construct a default instance and attempt to load data from localStorage /
	 *@param	{}	;                                                         /
	 *@return	{Cart}                                                        /
	/*------------------------------CONSTRUCTOR------------------------------*/
	constructor() {
		/*PRIVATE*/
		/*bool*/	this.verbose_ = Cart.verbose;

		/*PUBLIC*/
		/*array*/	this.products = [];
		/*string*/	this.activeClass = Cart.defaultClass;
		/*float*/	this.total = new Currency(0.0);
		/*int*/		this.size = 0;
		
		/*String*/	var	strCart;
		
		/*Object*/	var	objCart;

		strCart = localStorage.getItem(Cart.localStorageKey);
		if (!strCart)
			return;

		objCart = JSON.parse(strCart);
		this.size = objCart.size;
		this.loadProducts(objCart.products);
	}


	/*------------------------------------------------------------------------/
	 *Takes an object generated from JSON.parse and adds each element as a    /
	 *new type Product to this.products                                       /
	 *@param	{object}	objProducts;                                      /
	 *@return	{void}		                                                  /
	/*-----------------------------------------------------------------------*/
	loadProducts(objProducts) {
		this.size = 0;
		objProducts.forEach(product => {
			this.addProduct(Product.parseProduct(product), false);
		});
	}

	/*-----------------------------------------------------------------------*/
	/*Saves the instance to localStorage                                     */
	/*
	 *@param	{}	;
	 */
	/*-----------------------------------------------------------------------*/
	save() {
		console.log("save: " + JSON.stringify(this));
		localStorage.setItem(Cart.localStorageKey, JSON.stringify(this));
	}

	/*-----------------------------------------------------------------------*/
	/*Takes a type Product and adds it to this.products                      */
	/*
	 *@param	{Product}	product;
	 */
	/*-----------------------------------------------------------------------*/
	addProduct(product, boolSave=true) {
		this.size += 1;
		this.total.add(product.price);
		this.products.push(product);
		if (boolSave)
			this.save();
	}

	/*-----------------------------------------------------------------------*/
	/*Removes a product specified by its id                                  */
	/*
	 *@param	{int}	productId;
	 */
	/*-----------------------------------------------------------------------*/
	deleteProductById(productId) {
		this.products = this.products.filter((product) => {
			if (product.idEquals(productId)) {
				this.size -= 1;
				this.total.subtract(product.price);
				return (false);
			}
			return (product);
		});
		this.save();
	}

	getSize() {
		if (this.size < Cart.maxIconDisplay) {
			this.activeClass = Cart.defaultClass;
			return this.size;
		}

		this.activeClass = Cart.overflowClass
		return '99+';
	}
}