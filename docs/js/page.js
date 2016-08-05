//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
$(function() {
    //Calls the tocify method on your HTML div.
    $("#toc").tocify({
      context: '._container',
      selectors: 'h1, h2, h3, h4',
      showAndHide: true,
      ignoreSelector: '.code-block--ui h1, .code-block--ui h2, .code-block--ui h3, .code-block--ui h4, .code-block--ui h5, .code-block--ui h6'
    });
});
