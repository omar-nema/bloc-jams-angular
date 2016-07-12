(function () {
    
    function Fixtures() {
        
        var Fixtures = {};
        var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl:  '/assets/images/album_covers/01.png',
        songs: [
            {title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue'},
            {title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
            {title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
            {title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink' },
            {title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta' }
        ]   
    };
        var albumSecond = {
            title: 'The Ecstatic',
            artist: 'Mos Def',
            label: 'Def Jam',
            year: '2004',
            albumArtUrl:  '/assets/images/album_covers/20.png',
            songs: [
                {title: 'One', duration: '4:26' },
                {title: 'Two', duration: '4:26' },
                {title: 'Tre', duration: '5:26' },
                {title: '4', duration: '6:26' },
                {title: '5', duration: '7:26' }
            ]   
        };
        
        Fixtures.getAlbum = function(){
            return albumPicasso;
        }
        
        Fixtures.getCollection = function(numberAlbums){
            this.albums = [];
            for (var i=0; i< numberAlbums; i++){
                this.albums.push(angular.copy(albumPicasso));
            }
            return this.albums;
        }
        
        return Fixtures;
    }
    
    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();