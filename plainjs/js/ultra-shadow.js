'use strict';

var ultraComp = Object.create(HTMLElement.prototype);

ultraComp.createdCallBack = function () {
    var shadow = this.createShadowRoot();
    shadow.innerHTML = '' + 'this.getAttribute('is')' + '';
}
document.registerElement('ultra-comp',{prototype:ultraComp});