$(document).ready(function(){
  
  var quote;
  var author;
  
  // Get quote from API
  function getNewQuote () {
    $.ajax({
      url:      'http://api.forismatic.com/api/1.0/.',
      dataType: 'jsonp',
      jsonp:    'jsonp',
      data: {
        method: 'getQuote',
        format: 'jsonp',
        lang:   'en'
      },
      success:  function(response){
        quote  =  response.quoteText;
        author =  response.quoteAuthor;
        sender =  response.SenderName;
        
        $('.quote-content').text(quote);
        
        if (author) {
          $('.quote-author').text(author);
        } else {
          $('.quote-author').text('unknown');
        }
      },
    });
  }
  
  getNewQuote();
  
  
  // Generate new quote from button click
  $('.new-quote').on('click', function(event){
    event.preventDefault;
    getNewQuote();
  });
  
  // Share from twitter
  $('.share-quote').on('click', function(event){
    event.preventDefault;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
  });
  
});