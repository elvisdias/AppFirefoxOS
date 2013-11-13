
function search(){
   
            var id = 10;
            var div = 0;
            var list = "<ol id='lista'>";

            var search = new Array();

            for (var i = 0; i < 30; i++) {
                search[i] = localStorage.getItem("artist"+i);      
                    
               }     
               
            var reals = new Array();
                for(var i = 0; i<search.length; i++){
                    if (search[i]){
                     reals.push(search[i]);
                }       
                 }        
           
            for (var i = 0; i < reals.length; i++) {
                
                list += "<div class='dive' onClick=location.href='artistinfo.html' id='"+(div+i)+"'>" + reals[i] + "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>"  + "</div>";

                }        

                $(document).ready(function(){
                  $('#plus').click(function(){
                    var novo = document.forme.artist.value;                  

                        if (novo != "") {
                           localStorage.setItem("artist"+id, novo); 
                             $("#lista").append("<div class='dive' id='artist"+id+"'>" + novo + "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>" + "</div>");      
                             id++; 
                             novo.replace(""); 
                             reals.push(novo);                    
                        };         
                                        
                });                       
                });
                
         $(list + '</ol>').appendTo('#listartists');
         $('.loading').fadeOut();       
    
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
