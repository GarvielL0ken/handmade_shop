export class NavigationBar {
	constructor(verbose) {
		this.verbose_ = verbose;

		if (this.verbose_)
			console.log(this.toString("CONSTRUCTOR"));
	}

	toString(function_name) {
		return ("NAVIGATIN BAR: " + function_name);
	}
}