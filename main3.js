function getReddit (){
var searchinput = document.getElementById('searchbox').value;
var link = 'https://www.reddit.com/r/'+ searchinput + '.json';
    

var promise = $.ajax({
   url:link,
   type:'get',
dataType: 'json'
}).then(function(response){
    console.log(response);
    var templateSource= $('#reddit-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
  data: response.data.children
    });
    
    $('#response').html(html);
    


    
}, function(){
    console.log('there was an error');
});
}


function showDiv() {
    var e = document.getElementById('description');
    if(e.style.display == 'block')
    e.style.display = 'none';
    else
     e.style.display = 'block';
      
}