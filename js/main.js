var app1 = angular.module('app1',[]);

app1.controller('main',function($scope,$http,$sce){
  var vm = $scope;

  vm.randomQuote = "Angular is working!!"
  vm.author = "Developer"
  //var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?callback=JSON_CALLBACK"
  var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=JSON_CALLBACK"


  vm.fetchRandomQuote = function(){
    $http.jsonp(url)
        .success(function(data){
          vm.randomQuote = data[0].content.replace('<p>','').replace('</p>','');
          vm.author = data[0].title;
          $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
          + encodeURIComponent('"' + vm.randomQuote + '" ' + vm.author));
    });
  }
});
