function search(){
   
            var id = 10;
            if (localStorage.getItem("id")){
            } else {
              localStorage.setItem("id", id);
            }
            
            var div = 0;
            var img = 0;
            var list = "<ol id='lista'>";            
            var artcli;

            var search = new Array();
            for (var i = 0; i < 30; i++) {
                search[i] = localStorage.getItem("artist"+i);                          
               }                    

            var reals = new Array();
                for(var i = 0; i < search.length; i++){
                    if (search[i]){
                     reals.push(search[i]);
                }}      

                 $(document).ready(function(){
                  $('#plus').click(function(){
                    var novo = document.forme.artist.value;                
                        if (novo != "" && $.inArray(novo, reals) == -1) {               
                            localStorage.setItem("artist"+(parseInt(localStorage.getItem("id"))), novo); 
                            $("#lista").append("<div class='qualquer' id='"+(div+i)+"'>" + "<div onClick=location.href='artistinfo.html' class='diveText'> " + novo + "</div>" + "<div class='diveImg'>" + "<img src='pics/-.png' id='"+(parseInt(localStorage.getItem("id")))+"' onClick='fade(this.id)' class='minus'>" + "</div>" + "</div>");      
                            reals.push(novo);                            
                           localStorage.setItem("id", (parseInt(localStorage.getItem("id")))+1);                                                                                     
                          }                                                                    
                        });                                                       
                  });  
           
              for (var i = 0; i <= reals.length; i++) {                
                list += "<div class='qualquer' id='"+(div+i)+"'>" + "<div onClick=location.href='artistinfo.html' class='diveText'> " + reals[i] + "</div>" + "<div class='diveImg'>" + "<img src='pics/-.png' id='"+(img+i)+"' onClick='fade(this.id)' class='minus'>" + "</div>" + "</div>";         
                }

          $(list + '</ol>').appendTo('#listartists');
          $('.loading').fadeOut();

            $('.qualquer').last().remove();
             
            $(document).ready(function(){
              $('.diveText').click(function(){
               localStorage.setItem("artcli", $(this).text()); 
               location.href='artistinfo.html';                   
                  })
                });
            
}
var ide = 0;
function fade(id) {
    
    var element = document.getElementById(id);
    var arr = new Array();   

$('.qualquer').each(function() {
  arr.push($(this).text());
});
       
    $(document).ready(function(){
    $(element).toggle(
        function a(){
        $(element).fadeTo("fast", 0.5, function(){
            $("<img id='maix"+ide+"'>").attr('src', 'pics/+.gif')
            .appendTo(element)
            .addClass("minus3");
            localStorage.removeItem('artist'+id);            
        })
    },
        function b(){
        $(element).fadeTo("fast", 1, function(){
            $("#maix"+ide+"").remove();
            localStorage.setItem('artist'+id,arr[id]);   
        })
    });
    });   
}
    ide+=1; 