import { Cart } from "./Cart.js";

export class NavigationBar {
	static /*bool*/		verbose=		true;

	static /*string*/	brandImagePath=	"./img/layout/brand-image.png";

	/*------------------------------CONSTRUCTOR-------------------------------/
	 *@param	{string}	activePage;                                       /
	 *@return	{NavigatiomBar}                                               /
	/*------------------------------CONSTRUCTOR------------------------------*/
	constructor(activePage) {
		
		/*PRIVATE*/
		this.activePage_ = activePage;

		/*PUBLIC*/
		this.cart = null;

		if (NavigationBar.verbose_)
			console.log(this.toString("CONSTRUCTOR"));
	}

	/*--------------------------------TOHTML----------------------------------/
	 *GENERATES A STRING CONTAINING THE HTML FOR THE NAVBAR                   /
	 *@param	{void}                                                        /
	 *@return	{String}                                                      /
	/*--------------------------------TOHTML---------------------------------*/
	toHTML() {
		var	/*string*/	html;

		html = '';
		html = this.generateBrandLink();
		html += this.generateNavLink("Home", "./home.html");
		html += this.generateNavLink("Store", "./store.html");
		html += this.generateNavLink("Contact Us", "./contact.html");
		html += this.generateNavLink("About", "./about.html");
		html += this.generateCartLink();

		return html;
	}

	/*--------------------------GENERATE-BRAND-LINK---------------------------/
	 *GENERATES HTML FOR THE BRAND ICON/LINK                                  /
	 *@param	{void}                                                        /
	 *@return	{String}                                                      /
	/*--------------------------GENERATE-BRAND-LINK--------------------------*/
	generateBrandLink() {
		var	/*string*/	html;

		html = `<a class="navbar-brand" href=./home.html>`;
		html += `<img src="${NavigationBar.brandImagePath}">`;
		html += `</a>`;

		return html;
	}
	/*--------------------------GENERATE-CART-LINK----------------------------/
	 *GENERATES HTML FOR THE LINK TO THE CART                                 /
	 *@param	{void}                                                        /
	 *@return	{String}                                                      /
	/*--------------------------GENERATE-CART-LINK---------------------------*/
	generateCartLink() {
		var	/*string*/	html;
		var	/*string*/	activeClass;
		var	/*int*/		size;

		activeClass = Cart.defaultClass;
		size = 0;

		if (this.cart) {
			size = this.cart.getSize();
		}

		html = '';
		html +=	`<a id="nav-link-cart" class="" href="./view-cart.html">`;
		html +=		`<div id="btn-cart">`;
		html +=			`<div class="${activeClass}">${size}</div>`;
		html +=		`</div>`;
		html +=	`</a>`;

		return html;
	}
	/*---------------------------GENERATE-NAV-LINK----------------------------/
	 *GENERATES HTML FOR EACH NAVLINK                                         /
	 *@param	{String}	page;                                             /
	 *@param	{String}	href;                                             /
	 *@return	{String}                                                      /
	/*---------------------------GENERATE-NAV-LINK---------------------------*/
	generateNavLink(page, href) {
		var	/*string*/	html;

		html = '<a class="nav-link';
		if (page === this.activePage_)
			html += ' active';
		html += `" href="${href}">${page}</a>`;

		return html;
	}

	toString(function_name) {
		return ("NAVIGATIN BAR: " + function_name);
	}
}