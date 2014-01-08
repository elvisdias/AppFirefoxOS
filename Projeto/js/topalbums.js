var cache = new LastFMCache();''

var lastfm = new LastFM({
    apiKey    : '9fabf44e1c52af6458afb92a0fc0c557',
    apiSecret : '4e80f575b0ccff9c5f4b1161c67618e1',
    cache     : cache
});


//var tam = localStorage.length -3;
console.log(localStorage.length);
if(localStorage.length > 2) {

var albums = [];
$(document).ready(function(){
 for (var i = 0; i <= localStorage.length; i++){
  if (localStorage.getItem("artist"+i) != null) {
  getTopAlbums(localStorage.getItem("artist"+i), 7);
  };                 
}
}) 

function getTopAlbums(artist, limit){
    lastfm.artist.getTopAlbums({
        artist: artist,
        limit: limit
    },
    {
     success: function(data){  

    /*var list = "<div>";  

    for (var i = 0; i < tam; i++) {                
    
    list += "<div class='diven'>" + "<div>" + "<img src='"+ data.topalbums.album[i].image[0]['#text']+"'>" + "</div>" + "     " + "<span>" + data.topalbums.album[i].name + "</span>" + "</div>";            
    }    
    
    $(list + '</div>').appendTo('#topalbums');
    $('.loading').fadeOut(); */

      for (var i = 0; i < data.topalbums.album.length ; i++) {
        var albumName = data.topalbums.album[i].name
        albums[i] = albumName
      } 

for (var i = 0; i < localStorage.length; i++){    
for (var e = 0; e < data.topalbums.album.length; e++){

if (localStorage.getItem("artist"+i) != null && albums[e] != null){

lastfm.album.getInfo({artist: localStorage.getItem("artist"+i), album: albums[e]}, {
  success: function(data){

   var list = "<div>";  
   var datee = data.album.releasedate; 
   var y = "2013";
   var a = new RegExp('\\b' + y + '\\b');

    if(a.test(datee)) {
    
    list += "<div class='diven'>" + "<div>" + "<img src='"+ data.album.image[0]['#text']+"'>" + "</div>" + "<span>" + data.album.name + "</span>" + "</div>";        
  
  localStorage.setItem(data.album.name, data.album.artist); 

    $(list + '</div>').appendTo('#topalbums');
    $('.loading').fadeOut();

    } 

     $(document).ready(function(){
      $('.diven').click(function(){
        location.href='albuminfoo.html';
        localStorage.setItem("albcli", $(this).text());    
        var abb = localStorage.getItem("albcli");
        var e = localStorage.getItem(abb);
        localStorage.setItem("artcli",e);               
       })
    })   

  //console.log(a.test(datee));
  //console.log(datee);
}, error: function(data){

}});
  }}}

}, error: function(data){
  alert(data.error + " " + data.message);
}});
}

} else {
  $(document).ready(function(){
    
    $("<p id='pp'>" + "No news by now" + "</p>").appendTo('#topalbums')
    
      $('.loading').fadeOut();
    })
    
}

if( $('#topalbums').is(':empty') ) {
  $(document).ready(function(){
    
    $("<p id='pp'>" + "No news by now" + "</p>").appendTo('#topalbums')
    
      $('.loading').fadeOut();
    })
}
  

$(document).ready(function(){
  $('.menu').hide();
  $(function() {
   $('.set').toggle(function() {
    $('.menu').show();
    $('body').css('overflow','hidden');

    $('#topalbums').click(function() {
    $('.menu').hide();
  });
   }, function() {
    $('.menu').hide(); 
    $('body').css('overflow','auto');
   });
  });
});
$(document).ready(function(){
  $('.menu').hide();
  $(function() {
   $('#').toggle(function() {
    $('.menu').show();
    $('body').css('overflow','hidden');
   }, function() {
    $('.menu').hide(); 
    $('body').css('overflow','auto');
   });
  });
$("#edit").click(function(){
    location.href='artists.html';
  })

  $("#edit").hover(function(){
  $(this).css("background-color", "#EEE9E9");
  $(this).css("color","black");
}, 
   function(){
     $(this).css("color","black"); 
     $(this).css("background-color","white");
    });

  
  $("#logout").hover(function(){
  $(this).css("background-color","#EEE9E9");
  $(this).css("color","black");
  },
  function(){
     $(this).css("color","black"); 
     $(this).css("background-color","white");
    });  

  $("#logout").click(function(){
     if (confirm('Are you sure you want to log out?')) {
  location.href='main.html';
  localStorage.clear();
} else {}
  })
});