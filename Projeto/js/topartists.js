var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


$(document).ready(function(){
    
    getTopArtists(localStorage.getItem("key"), 10);    
       
});

function getTopArtists(user, limit){
   
    lastfm.user.getTopArtists({
        user: user,
        limit: limit
    },
    {
        success: function(data) {
            var img =  0;
            var div = 0;
            var list = '<ol>';
            for (var i = 0; i < data.topartists.artist.length; i++) {
                
                list += "<div class='dive' id='" + (div+i) + "'>" + data.topartists.artist[i].name + "<img src='pics/-.png' class='minus' id='" + (img+i) + "'>"  + "</div>";
                }


            jQuery(list + '</ol>').appendTo('#topartists');
        },
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}
var img= [0,1,2,3,4,5,6,7,8,9];

$(document).ready(function(){
$.each( img, function(){ 
    $("#" + this).bind("click", function() {
    $('div').fadeTo("fast", 0.5);
})
})
}); 
    
   
    
/*
function novo() {
    var div = document.createElement('div');
        div.innerHTML = document.form.nome.value;
        div.style.backgroundColor="black";
        var newContent = document.createTextNode(document.form.nome.value);
       // div.setAttribute('class', 'diven'); 

}*/