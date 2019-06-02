"use strict";

$(function () {
  $.getJSON('./resource/json/urls.json', function (res) {
    console.log(res);
    renderList(res);
  });

  function renderList(res) {
    var data = {
      list: res
    };
    var html = template('listTpl', data);
    $('#list').html(html);
  }
});
//# sourceMappingURL=main.js.map
