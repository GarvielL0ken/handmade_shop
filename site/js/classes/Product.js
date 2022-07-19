export class Product {
	static /*string*/	imagesPath = './img/content/';

	static getProductByName(arrProducts, name) {
		/*Product*/	var	product;

		product = arrProducts.filter((element) => {return (element.nameEquals(name))})[0];
		return (product);
	}

	constructor(verbose, name, imageName='', alt='', caption='') {
		this.name_ = name;
		
		this.caption_ = caption
		this.imageName_ = imageName;
		this.alt_ = alt;
		this.verbose_ = verbose;

		if (this.verbose_)
			console.log(this.toString("CONSTRUCTOR"));
	}

	nameEquals(name) {
		return (this.name_ === name);
	}

	printFullView() {
		/*string*/	var	html;

		html = "<div>";
		html += `<img class='product-img-full' src='${Product.imagesPath}/${this.imageName_}' alt=${this.alt_}><br>`;
		html += `<span>${this.name_}</span><br>`;
		html += `<span>${this.caption_}</span>`;
		html += "</div>";
		return (html);
	}

	printThumbnail() {
		/*string*/	var html;

		html = "<div class='product-thumbnail-container'>";
		html += `<a href='./view-product.html?title=${this.name_}'>`;
		html += `<img class='product-thumbnail-img' src='${Product.imagesPath}/${this.imageName_}' alt='${this.alt_}'><br>`;
		html += `<span>${this.name_}<span>`;
		html += "</div>";
		return (html);
	}

	toString(function_name) {
		return ("Product{}: " + function_name + " : " + this.name_);
	}
}