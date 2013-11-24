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
            var img2 = 0
           // var id = 10;
            
            var list = "<ol id='lista'>";
                   

            for (var i = 0; i < data.topartists.artist.length; i++) {
                
                list += "<div class='dive' id='"+(div+i)+"'>" + '&nbsp;' + data.topartists.artist[i].name + "<img src='pics/-.png' id='"+(img+i)+"' onClick='fade(this.id)' class='minus'>" + "</div>";
               
                var artist = data.topartists.artist[i].name;

                localStorage.setItem('artist'+i, artist);

                }
                
        $(list + '</ol>').appendTo('#topartists');
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}



function fade(id) {
    
    var element = document.getElementById(id);
    var arr = new Array();

$('.dive').each(function() {
  arr.push($(this).text());
});
       
    $(document).ready(function(){
    $(element).toggle(
        function a(){
        $(element).fadeTo("fast", 0.5, function(){
            $("<img>").prop('src', 'pics/+.png')
            .appendTo(element)
            .addClass("minus2"); 
            localStorage.removeItem('artist'+id);   

        })
    },
        function b(){
        $(element).fadeTo("fast", 1, function(){
            $(".minus2").remove();
            localStorage.setItem('artist'+id,arr[id]);   

        })
    });

    });

    }
