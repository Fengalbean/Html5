"use strict";

/**
 * Created by freddy on 2017/11/1.
 */

/**
 * 事件公用函数
 * @type {{addHandler: EventUtil.addHandler, getEvent: EventUtil.getEvent, getTarget: EventUtil.getTarget, preventDefault: EventUtil.preventDefault, removeHandler: EventUtil.removeHandler, stopPropagation: EventUtil.stopPropagation}}
 */
var EventUtil = {
  // 绑定事件
  addHandler: function addHandler(el, type, func) {
    if (el.addEventListener) {
      el.addEventListener(type, func, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, func);
    } else {
      el['on' + type] = func;
    }
  },
  // 获取事件对象
  getEvent: function getEvent(event) {
    return event ? event : window.event;
  },
  // 获取触发的事件的元素
  getTarget: function getTarget(event) {
    return event.target || event.srcElement;
  },
  // 阻止默认事件
  preventDefault: function preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 移除事件
  removeHandler: function removeHandler(el, type, func) {
    if (el.removeEventListener) {
      el.addEventListener(type, func, false);
    } else if (el.detachEvent) {
      el.detachEvent('on' + type, func);
    } else {
      el['on' + type] = null;
    }
  },
  // 阻止事件捕获和冒泡
  stopPropagation: function stopPropagation(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};
//# sourceMappingURL=common.js.map
