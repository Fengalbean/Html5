/**
 * Created by dbfeng on 2018/1/18.
 */

/**
 * 不支持CustomEvent的polyfill
 */
;(function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

;(function () {

    function ajaxEventTrigger(event) {
        var ajaxEvent = new CustomEvent(event, {detail: this });
        console.log(this)
        window.dispatchEvent(ajaxEvent);
    }

    var OldXHR = window.XMLHttpRequest;

    function newXHR() {
        var realXHR = new OldXHR();

        realXHR.addEventListener('error', function () {
            ajaxEventTrigger.call(this, 'ajaxError');
        }, false);

        realXHR.addEventListener('timeout', function () {
            ajaxEventTrigger.call(this, 'ajaxTimeout');
        }, false);


        realXHR.addEventListener('abort', function () {
            ajaxEventTrigger.call(this, 'ajaxAbort');
        }, false);


        realXHR.addEventListener('load', function () {
            ajaxEventTrigger.call(this, 'ajaxLoad');
        }, false);

        realXHR.addEventListener('loadstart', function () {
            ajaxEventTrigger.call(this, 'ajaxLoadStart');
        }, false);

        realXHR.addEventListener('progress', function () {
            ajaxEventTrigger.call(this, 'ajaxProgress');
        }, false);

        realXHR.addEventListener('loadend', function (e) {
            ajaxEventTrigger.call(this, 'ajaxLoadEnd');
        }, false);
        realXHR.addEventListener('readystatechange', function () {
            ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
        }, false);

        return realXHR;
    }

    window.XMLHttpRequest = newXHR;
})();