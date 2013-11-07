
function search(){
   
            var id = 10;
            var div = 0;
            var list = "<ol id='lista'>";

            var search = new Array();

            for (var i = 0; i < 10; i++) {
                search[i] = localStorage.getItem("artist"+i);                  
                    
               }     
           
            for (var i = 0; i < search.length; i++) {
                
                list += "<div class='dive' id='"+(div+i)+"'>" + search[i] + "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>"  + "</div>";

                }        

                $(document).ready(function(){
                  $('#plus').click(function(){
                    var novo = document.forme.artist.value;                  

                        if (novo != "") {
                           localStorage.setItem("artist"+id, novo); 
                             $("#lista").append("<div class='dive' id='artist"+id+"'>" + novo + "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>" + "</div>");      
                             novo = "";  
                             id++;                 
                        };                   
                
                });                       
                });
                
         $(list + '</ol>').appendTo('#listartists');
         $('.loading').fadeOut();       
    
}


function fade(id) {
    var x = true;
    var element = document.getElementById(id);

if (x==true) {      
        
     $(element).fadeTo("fast", 0.5);
     localStorage.removeItem('artist'+id);            
    x = false; 
  
} else {        
        $(element).fadeIn(0.5);
        localStorage.setItem('artist'+id, artist);      
        x=true;
    }

}

