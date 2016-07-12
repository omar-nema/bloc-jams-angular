(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {};
        var currentBuzzObject = null;
        var currentAlbum = Fixtures.getAlbum();
        
//        @function setSong
//        @desc stop song and set new one 
//        @param {object} song
        var setSong = function(song){
           if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing = null;                    
                }   
            /*
            @ desc buzz object audio file
            @type {object}
            */
                currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                });               
                SongPlayer.currentSong = song;            
        };
        var playSong = function(song){
                currentBuzzObject.play();
                song.playing = true;              
        };
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
        };
                
        
        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);  
        };            
        SongPlayer.currentSong = null;    
        
        SongPlayer.play = function(song){
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song){
                setSong(song);
                playSong(song);             
            } else if (SongPlayer.currentSong === song){
                if (currentBuzzObject.isPaused()) {
                playSong(song);                    
                } 
            } ;

        };
        
        SongPlayer.pause = function(song){
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;  
        };     
        
        
        
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex = currentSongIndex - 1;
            if (currentSongIndex < 0){
                stopSong(songPlayer.currentSong);
//                currentBuzzObject.stop();
//                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);                     
            }
        };
        
        
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex = currentSongIndex + 1;
            if (currentSongIndex > currentAlbum.length){
                currentBuzzObject.pause();
                SongPlayer.currentSong.playing = null;                
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);                     
            }
        };
        
  

        return SongPlayer;
    };
    

    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();