var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});

/*
var gettop = new Array();
var realtop = new Array();

for (var i = 0; i < localStorage.length ; i++) {
    gettop[i] = localStorage.getItem("artist0");    
}
for(var i = 0; i < gettop.length; i++){
    if (gettop[i] != undefined && gettop[i] != null && gettop[i] != "NuLL") {
    realtop.push(gettop[i]);
    }
 }  
*/
$(document).ready(function(){
   for (var i = 0; i<localStorage.length; i++){
       getTopAlbums(localStorage.getItem("artist"+i), 10); 
     }       
});

function getTopAlbums(artist, limit){
   
    lastfm.artist.getTopAlbums({
        artist: artist,
        limit: limit
    },
    {
     success: function(data){
  
    var list = "<div>";  
    for (var i = 0; i < data.topalbums.album.length; i++) {                
    list += "<div class='diven'>" + "<div>" + "<img src='"+data.topalbums.album[i].image[0]['#text']+"'>" + "</div>" + "     " + "<span>" + data.topalbums.album[i].name + "</span>" + "</div>";        
      var nome =  data.topalbums.album[i].artist.name
    localStorage.setItem(nome, data.topalbums.album[i].name);
   }

  $(list + '</div>').appendTo('#topalbums');
  $('.loading').fadeOut();
   
}, error: function(data){
  alert(data.error + " " + data.message);
}});
}

$(document).ready(function(){
  $('.menu').hide();
  $(function() {
   $('.set').toggle(function() {
    $('.menu').show();
    $('body').css('overflow','hidden');
   }, function() {
    $('.menu').hide(); 
    $('body').css('overflow','auto');
   });
  });

  $("#edit").hover(function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
}, 
   function(){
     $(this).css("color","white"); 
     $(this).css("background-color","#CD2626");
    });

  $("#edit").click(function(){
    location.href='artists.html';
  })

  $("#logout").hover(function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  },
  function(){
     $(this).css("color","white"); 
     $(this).css("background-color","#CD2626");
    });  
  $("#logout").click(function(){
     if (confirm('Are you sure you want to log out?')) {
  location.href='main.html';
  localStorage.clear();
} else {}
  })

});