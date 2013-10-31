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
                
                list += "<div class='dive' id='"+(div+i)+"'>" + data.topartists.artist[i].name + "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>"  + "</div>";
                
                var artist = data.topartists.artist[i].name;
                localStorage.setItem('artist'+i, artist);
                
                }
         jQuery(list + '</ol>').appendTo('#topartists');
         $('.loading').fadeOut();
        },
        
        error: function(data) {
           alert(data.error + " " + data.message);
        }
    });
    
}


function fade(id) {
    
    var element = document.getElementById(id);

    $(document).ready(function(){        
        $(element).fadeTo("fast", 0.5);
        localStorage.removeItem('artist'+id);
    });

}

/*function change(id) {

 if(document.getElementById(id).value == "pics/-.png"){
    document.getElementById(id).src="pics/+.gif";     
    }else{
     document.getElementById(id).src="pics/-.png";   
    }
}

*/
    
/*
function novo() {
    var div = document.createElement('div');
        div.innerHTML = document.form.nome.value;
        div.style.backgroundColor="black";
        var newContent = document.createTextNode(document.form.nome.value);
       // div.setAttribute('class', 'diven'); 

}*/