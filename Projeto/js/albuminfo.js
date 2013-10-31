var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


$(document).ready(function(){
    
    getInfo("Placebo","meds"); 
       
});

function getInfo(artist, album){
   
    lastfm.album.getInfo({
        artist: artist,
        album: album
    },
    {
        success: function(data) {
        
            var div = '<div>';
                           
            div += "<div>" +  data.getinfo.album.name + "</div>";
                
         jQuery(div + '</div>').appendTo('#albuminfo');
        
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}