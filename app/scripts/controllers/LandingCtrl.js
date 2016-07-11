(function() {
    function LandingCtrl(){
        this.heroTitle = "music up";
    }
    
    angular 
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();