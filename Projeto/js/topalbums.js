var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});
var gettop = new Array();

$(document).ready(function(){
    for (var i = 0; i < 20; i++) {
    gettop[i] = getTopAlbums(localStorage.getItem("artist"+ i), 10);    
}
       
});

function getTopAlbums(artist, limit){
   
    lastfm.artist.getTopAlbums({
        artist: artist,
        limit: limit
    },
    {
        success: function(data) {
            var list = '<ol>';
               
            var realtop = new Array();
                for(var i = 0; i < gettop.length; i++){
                    if (gettop[i] != undefined && gettop[i] != null && gettop[i] != "NuLL") {
                            realtop.push(gettop[i]);
                        }
                     }       

            for (var i = 0; i < realtop.length; i++) {
                
                list = "<div class='dive2' onClick=location.href='album.html'>" +  realtop[i] + "</div>";
                
                }

         jQuery(list + '</ol>').appendTo('#topalbums');
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}


$(document).ready(function(){
$('#home').hide();
/*$('#house').click(function(){
    $('#home').fadeIn();
    $("html, body").css({'width':'100%', 'height':'100%', 'overflow':'hidden'});
})*/
});

