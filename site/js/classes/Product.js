import { Currency } from "../lib.js";

export class Product {
	static /*string*/	imagesPath=	'./img/content/';
	static /*int*/		productId=	0;
	static /*bool*/		verbose=	false;

	/*------------------------------STATIC------------------------------------/
	 *
	 *@param	{}	;
	 *
	/*------------------------------STATIC-----------------------------------*/
	static getProductByName(arrProducts, name) {
		/*Product*/	var	product;

		product = arrProducts.filter((element) => {
			return (element.nameEquals(name))
		});

		return product[0];
	}

	/*------------------------------STATIC------------------------------------/
	 *
	 *@param	{}	;
	 *
	/*------------------------------STATIC-----------------------------------*/
	static parseProduct(product) {
		var newProduct;
		
		var name;
		var categories;
		var imageName;
		var alt;
		var caption;
		var price;

		var	id;

		name = product.name_;
		categories = (product.categories_[0] ? product.categories_ : "");
		imageName = product.imageName_;
		alt = product.alt_;
		caption = product.caption_;
		id = product.id_;
		price = new Currency(0);
		price.setValueObject(product.price);

		newProduct = new Product(false, name, categories, imageName, alt, caption, price, id);

		return newProduct;
	}

	/*------------------------------------------------------------------------/
	 *                                                                        /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*-----------------------------------------------------------------------*/
	constructor(name, categories='', imageName='', alt='', caption='', price=0.0, id=null) {
		this.id_ = ++Product.productId;
		
		/*PRIVATE*/
		/*bool*/	this.verbose_=		false;
		
		/*Set*/		this.categories_=	null;
		
		/*String*/	this.alt_=			alt;
		/*String*/	this.caption_=		caption;
		/*String*/	this.imageName_=	imageName;
		/*String*/	this.name_=			name;

		/*PUBLIC*/
		/*float*/	this.price=			new Currency(price);

		if (categories)
			this.categories_=	new Set(categories.split(";"));

		if (this.verbose_)
			console.log(this.toString("CONSTRUCTOR"));
	}

	/*-----------------------------IDEQUALS-----------------------------------/
	 * Compares a given int to the instance's id                              /
	 *@param	{int}	id;                                                   /
	 *@return	{bool}                                                        /
	/*-----------------------------IDEQUALS----------------------------------*/
	idEquals(id) {
		return (this.id_ === id);
	}

	/*----------------------------NAMEEQUALS----------------------------------/
	 * Compares a given string to the instance's name                         /
	 *@param	{string}	name;                                             /
	 *@return	{bool}                                                        /
	/*----------------------------NAMEEQUALS---------------------------------*/
	nameEquals(name) {
		return (this.name_ === name);
	}

	/*------------------------------------------------------------------------/
	 *                                                                        /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*-----------------------------------------------------------------------*/
	isInCategory(strCategory='') {
		return (this.categories_.has(strCategory))
	}

	/*----------------------------PRINT-CART-VIEW-----------------------------/
	 * Returns the html required by the view cart page                        /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*----------------------------PRINT-CART-VIEW----------------------------*/
	printCartView() {
		/*string*/	var	html;

		html = "<div>";
		html += `<span>${this.name_}</span>`;
		html += `<span>${this.price}</span>`;
		html += "</div>";

		return html;
	}

	/*----------------------------PRINT-FULL-VIEW-----------------------------/
	 * Returns the html required by the view product page                     /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*----------------------------PRINT-FULL-VIEW----------------------------*/
	printFullView() {
		/*string*/	var	html;

		html = "<div>";
		html += `<img class='product-img-full' src='${Product.imagesPath}/${this.imageName_}' alt=${this.alt_}><br>`;
		html += `<span>${this.name_}</span><br>`;
		html += `<span>${this.caption_}</span>`;
		html += "</div>";
		return html;
	}

	/*----------------------------PRINT-THUMBNAIL-----------------------------/
	 * Returns the html when printing a thumbnail version of the product      /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*----------------------------PRINT-THUMBNAIL----------------------------*/
	printThumbnail() {
		/*string*/	var html;

		html = `<a href='./view-product.html?title=${this.name_}' class='nav-link'>`;
		html += `<div class='img-wrapper'>`
		html += `<img class='product-thumbnail-img' src='${Product.imagesPath}/${this.imageName_}' alt='${this.alt_}'>`;
		html += `</div><br>`
		html += `<span>${this.name_}</span>`;
		html += "</a>"
		return html;
	}

	/*------------------------------------------------------------------------/
	 *                                                                        /
	 *@param	{}	;                                                         /
	 *                                                                        /
	/*-----------------------------------------------------------------------*/
	toString(function_name) {
		return ("Product{}: " + function_name + " : " + this.name_ + ":" + this.id_);
	}
}