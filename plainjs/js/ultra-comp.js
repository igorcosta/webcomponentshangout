'use strict';

var ultraComp = Object.create(HTMLElement.prototype);

ultraComp.createdCallBack = function () {
	this.textContent = this.getAttribute('is');
}
document.registerElement('ultra-comp',{prototype:ultraComp});