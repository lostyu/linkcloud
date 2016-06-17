;(function () {

    var areaW = 100;
    var areaH = 30;

    var _defaults = {
        bgc: '#999',
        color: '#666',
        text: '刮我有惊喜',
        r: 8,
        bGet: true
    };

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.targetTouches[0].clientX - rect.left * (canvas.width / rect.width),
            y: evt.targetTouches[0].clientY - rect.top * (canvas.height / rect.height)
        }
    }

    function fnFill(ev, scrape) {

        var x = getMousePos(scrape.canvas, ev).x;
        var y = getMousePos(scrape.canvas, ev).y;

        scrape.oct.beginPath();
        scrape.oct.fillStyle = '#fff';
        scrape.oct.arc(x, y, scrape.options.r, 0, Math.PI * 2);
        scrape.oct.fill();
    }

    function Scrape(id, options) {
        this.canvas = document.getElementById(id);
        this.oct = this.canvas.getContext('2d');
        this.options = $.extend({}, _defaults, options);
        this._init();
    }

    $.extend(Scrape.prototype, {
        _init: function () {
            this.w = $(this.canvas).width();
            this.h = $(this.canvas).height();
            this.canvas.width = this.w;
            this.canvas.height = this.h;

            this.oct.beginPath();
            this.oct.fillStyle = this.options.bgc;
            this.oct.fillRect(0, 0, this.w, this.h);
            this.oct.closePath();

            //this.oct.beginPath();
            //this.oct.fillStyle = '#fff';
            //this.oct.fillRect(this.w/2-areaW/2, this.h/2-areaH/2, areaW, areaH);
            //this.oct.closePath();

            this.oct.beginPath();
            var text = this.options.text;
            this.oct.fillStyle = this.options.color;
            this.oct.font = 'bold 22px "Helvetica Neue", Helvetica, Arial, sans-serif';
            this.oct.fillText(this.options.text, this.w / 2 - this.oct.measureText(text).width / 2, this.h / 2 + 10);
            this.oct.closePath();


            this.oct.globalCompositeOperation = 'destination-out';
            this.bindUI();
        },
        bindUI: function () {
            var _this = this;

            _this.canvas.addEventListener('touchstart', function (ev) {
                ev.preventDefault();
                fnFill(ev, _this);

                if(_this.options.bGet){
                    $(_this.canvas).trigger('lotteryGet');
                }
            }, false);

            _this.canvas.addEventListener('touchmove', function (ev) {
                fnFill(ev, _this);
            }, false);

            _this.canvas.addEventListener('touchend', function () {

                var num = 0;

                var data = _this.oct.getImageData(_this.w / 2 - areaW / 2, _this.h / 2 - areaH / 2, areaW, areaH).data;
                for (var i = 0; i < data.length; i += 4) {
                    if (data[i] && data[i + 1] && data[i + 2] && data[i + 3]) {
                        num++;
                    }
                }

                if (num < areaW * areaH * 0.7) {
                    _this.oct.clearRect(0, 0, _this.w, _this.w);
                    $(_this.canvas).trigger('lottery');
                }

            }, false);
        },
        destory: function(){
            this.canvas.removeEventListener('touchstart');
            this.canvas.removeEventListener('touchmove');
            this.canvas.removeEventListener('touchend');

            //this.options = $.extend({}, _defaults, options);
        }
    });

    window.Scrape = Scrape;
})();