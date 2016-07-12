(function(){
    
    function CollectionCtrl(Fixtures){
        this.albums = Fixtures.getCollection(12);
//        this.albums = [];        
//        for (var i=0; i<12; i++){
//            this.albums.push(angular.copy(albumPicasso));
//        }
    };
    

    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
    
})();





//(function() {
//    function AlbumCtrl(Fixtures){
////        this.albumData = angular.copy(albumPicasso);
//        console.log(Fixtures.getAlbum());
//        this.albumData = Fixtures.getAlbum();
//    }
//    
//    angular 
//        .module('blocJams')
////        .controller('AlbumCtrl', AlbumCtrl);
//        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);    
//})();
//





//
//var buildCollectionItemTemplate = function(){
//    var template = 
//    '<div class="collection-album-container column fourth"> ' + '<img src="assets/images/album_covers/01.png">' + '' + '<div class="collection-album-info caption">' + '<p>'+ '<a class="album-name" href="album.html">The Colors</a>' + '<br/>' + '<a href="/album.html">Pablo Picasso</a>' + '<br/>' + ' X songs' + '<br/>' + '</p>' + '</div>' + '</div>';
//    return $(template); 
//}
//
//$(window).load(function() {
//
////    var collectionContainer = document.getElementsByClassName('album-covers')[0];
//    //note, still have to select 0th element
//    //no more innerhtml here, just dump out HTML with empty();
//    $('.album-covers').empty();
//    
//    for (var i=0; i<12; i++){
//        $('.album-covers').append(buildCollectionItemTemplate());
//    }
//});