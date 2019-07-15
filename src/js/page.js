// Executes your code when the DOM is ready.  Acts the same as $(document).ready().
/* eslint vars-on-top: "off" */
/* eslint no-var: "off" */
/* global $:true */


/*
Tabbed Panels js
*/
((function initTabs() {
  $('.tab-panels--tab').click(function onClick(e) {
    e.preventDefault();
    var self = $(this);
    var inputGroup = self.closest('.tab-panels');
    var idName = null;

    inputGroup.find('.active').removeClass('active');
    self.addClass('active');
    idName = self.attr('href');
    $(idName).addClass('active');
  });
})());
