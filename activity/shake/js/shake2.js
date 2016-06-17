(function () {

    var imgUrl = '';

    function random(x, y){
        return Math.round(Math.random()*(y-x)+x);
    }

    function Shake(id) {
        this.$container = $('#'+id);
        this.$jinbBox = this.$container.find('.j-jinb');
        this.$box = this.$container.find('.j-box');
        this.w = this.$container.width();
        this.top = this.$box.offset().top;
        imgUrl = this.$jinbBox.find('img').attr('src');


        this._init();
    }

    $.extend(Shake.prototype, {
        _init: function () {

        },

        shake: function(){
            this.$jinbBox.html('');
            var _str = '';
            for(var i=0;i<10;i++){
                var x = random(50, this.w - 70);
                var y = random(50, this.top - 30);
                var w = random(15, 30);
                _str += '<img class="move" style="left:'+ x +'px;top:'+ y +'px; width:'+w+'px;" src="'+ imgUrl +'" />';
            }
            this.$jinbBox.html(_str);
        }

    });

    window.Shake = Shake;
})();