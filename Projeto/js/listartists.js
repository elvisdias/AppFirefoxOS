
function search(){
   
            var id = 10;
            var div = 0;
            var img = 0;
            var list = "<ol id='lista'>";            
            var artcli;
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
                 $(document).ready(function(){
                  $('#plus').click(function(){
                    var novo = document.forme.artist.value;                
                        if (novo != "") {
                           localStorage.setItem("artist"+(id+1), novo); 
                             $("#lista").append("<div class='qualquer' id='"+(div+i)+"'>" + "<div onClick=location.href='artistinfo.html' class='diveText'> " + novo + "</div>" + "<div class='diveImg'>" + "<img src='pics/-.png' id='"+i+"' onClick='fade(this.id)' class='minus'>" + "</div>"+"</div>");      
                             reals.push(novo);  
                             novo.replace("");  
                             id++;                                            
                        };         
                                        
                });                       
                });  
           
            for (var i = 0; i < reals.length; i++) {
                
                //list += "<div class='dive' id='"+(div+i)+"'>" + reals[i] +  "<img src='pics/-.png' id='"+(i)+"' onClick='fade(this.id)' class='minus'>" + "</div>";
                list += "<div class='qualquer' id='"+(div+i)+"'>" + "<div onClick=location.href='artistinfo.html' class='diveText'> " + reals[i] + "</div>" + "<div class='diveImg'>" + "<img src='pics/-.png' id='"+(img+i)+"' onClick='fade(this.id)' class='minus'>" + "</div>" + "</div>";         
                }   

          $(list + '</ol>').appendTo('#listartists');
          $('.loading').fadeOut();
                
            $(document).ready(function(){
              $('.diveText').click(function(){
               localStorage.setItem("artcli", $(this).text()); 
               location.href='artistinfo.html';                   
                  })
                })   
}

function fade(id) {
    
    var element = document.getElementById(id);
    var arr = new Array();
    

$('.diveImg').each(function() {
  arr.push($(this).text());
});
       
    $(document).ready(function(){
    $(element).toggle(
        function a(){
        $(element).fadeTo("fast", 0.5, function(){
            $("<img>").prop('src', 'pics/+.png')
            .appendTo(element)
            .addClass("minus3"); 
           delete window.localStorage["artist"+id];               

        })
    },
        function b(id){
        $(element).fadeTo("fast", 1, function(){
            $(".minus3").remove();
            localStorage.setItem('artist'+id,arr[id]);   

        })
    });

    });

    }