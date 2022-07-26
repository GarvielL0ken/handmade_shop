function getURLParameter(url, parameter) {
	var	url;
	var	regex;
	var	value;

	regex = parameter + '=([^&]+)';
	regex = new RegExp(regex);
	
	/*returns: 
		[0: parameter=value, 1: value] hence
		value[1]
	*/
	value = regex.exec(url);
	if (value)
		return (value[1]);
	return ('');
}

class Currency {
	static	/*bool*/	verbose=	1;

	static	/*int*/		base=		10;
	static	/*int*/		lowMax=		100;

	constructor(fltValue) {
		/*PROTECTED*/
		this.$high = 0;
		this.$low = 0;

		if (Currency.verbose)
			console.log(`CONSTRUCTOR: setValue(${fltValue})`);
		this.setValue(fltValue);
	}

	/*
	 *@param	{Currency}	toAdd;
	 */
	add(toAdd) {
		this.$low += toAdd.$low;
		this.$high += toAdd.$high;
		
		this.$high += (Currency.lowMax <= this.$low);
		this.$low -= ((Currency.lowMax < this.$low) * Currency.lowMax);

		return this;
	}

	subtract(toSubtract) {

		//Branchless to improve performance hopefully (needs to be tested)
		this.$high = this.$high - ((this.$low < toSubtract.$low));
		this.$low = this.$low + ((this.$low < toSubtract.$low) * Currency.lowMax);
		
		this.$low -= toSubtract.$low;
		this.$high -= toSubtract.$high;

		return this;
	}

	setValue(fltValue) {
		var	/*array*/	arrValue;

		/*PROTECTED*/
		this.$high = 0;
		this.$low = 0;

		arrValue = String(fltValue).split('.');

		console.log(`fltValue: ${fltValue}`);
		console.log(`arrValue: ${arrValue}`);
		this.$high = parseInt(arrValue[0]);
		if (arrValue[1])
			this.$low = parseInt(arrValue[1]);

		console.log(`high: ${this.$high}`);
		console.log(`low: ${this.$low}`);
	}

	setValueObject(objValue) {
		this.$high = parseInt(objValue.$high);
		this.$low = parseInt(objValue.$low);
	}

	toString() {
		return `${this.$high}.${this.$low}`;
	}
}

export {getURLParameter, Currency}