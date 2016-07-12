(function(){
    function SongPlayer(){
        var SongPlayer = {};
        var currentSong = null;
        var currentBuzzObject = null;
        
        
//        @function setSong
//        @desc stop song and set new one 
//        @param {object} song
        
        var setSong = function(song){
           if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;                    
                }   
            /*
            @ desc buzz object audio file
            @type {object}
            */
                currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                });               
                currentSong = song;            
        };
        
        var playSong = function(currentBuzzObject, song){
                currentBuzzObject.play();
                song.playing = true;              
        };
        
        SongPlayer.play = function(song){
            
            if (currentSong !== song){
                setSong(song);
                playSong(currentBuzzObject, song);
//                currentBuzzObject.play();
//                song.playing = true;                    
            } else if (currentSong === song){
                if (currentBuzzObject.isPaused()) {
//                    currentBuzzObject.play();
//                    song.playing = true;
                playSong(currentBuzzObject, song);                    
                } 
            } ;

        };
        
        SongPlayer.pause = function(song){
            currentBuzzObject.pause();
            song.playing = false;  
        };        

        return SongPlayer;
    };
    

    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();