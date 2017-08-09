module.exports = {
    getRoot : function(){
        
        var d = new Date();
        var sec = d.getSeconds();

        return Math.sqrt(sec);
    }
}


