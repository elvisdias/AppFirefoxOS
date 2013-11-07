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
           // var id = 10;
            
            var list = "<ol id='lista'>";
                   

            for (var i = 0; i < data.topartists.artist.length; i++) {
                
                list += "<div class='dive' id='"+(div+i)+"'>" + data.topartists.artist[i].name + "<img src='pics/-.png' id='"+(img+i)+"' onClick='fade(this.id)' class='minus'>"  + "</div>";
               
                var artist = data.topartists.artist[i].name;

                localStorage.setItem('artist'+i, artist);

                }

               /* $(document).ready(function(){
                    
                    $('#plus').click(function(){
                    var novo = document.forme.artist.value;                  

                        if (novo != "") {
                           localStorage.setItem("artist"+id, novo); 
                             $("#lista").append("<div class='dive' id='artist"+id+"'>" + novo + "<img src='pics/-.png' id='1' onClick='fade(this.id)' class='minus'>" + "</div>");      
                             novo = "";  
                             id++;                 
                        };                   
                
                });                       
                });*/
                
         jQuery(list + '</ol>').appendTo('#topartists');
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}


function fade(id) {
    var x = true;
    var element = document.getElementById(id);

if (x==true) {      
     $(element).attr('src', 'pics/+.png');   
     $(element).fadeTo("fast", 0.5);
     localStorage.removeItem('artist'+id); 
              
    x = false; 
  
} else {        
        $(element).fadeIn(0.5);
        localStorage.setItem('artist'+id, artist);      
        x=true;
    }

}

