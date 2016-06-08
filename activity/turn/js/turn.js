/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



;(function(){

    // 匹配数组中的id，返回索引
    function matchIndex(id, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]['prize_id'] == id) {
                return i;
            }
        }
        return -1;
    }

    // x~y的随机数
    function random(x, y) {
        return Math.round(Math.random() * (y - x) + x);
    }


    var argD = 0;                                     // 每圈的度数
    var currentD = 0;                                 // 起始度数
    var endD = 0;                                     // 结束度数
    var turns = [5, 6, 7, 8, 9, 10];                  // 随机圈数


    function Turn(id, options) {

        this.oc = document.getElementById(id);
        this.$canvas = $('#'+id);
        this.oct = this.oc.getContext('2d');
        this.w = 422;

        var _defaults = {
            //大转盘奖品区块对应背景颜色
            colors: ["#5fd9c7", "#FFFFFF", "#5fd9c7", "#FFFFFF", "#5fd9c7", "#FFFFFF", "#5fd9c7", "#FFFFFF"],
            //文字颜色
            fontColors: ['#fee900', '#666', '#fee900', '#666', '#fee900', '#666', '#fee900', '#666'],
            outsideRadius: this.w / 2 - 20,       //大转盘外圆的半径
            insideRadius: 50,                   //大转盘内圆的半径
            textRadius: 155,                    //大转盘奖品位置距离圆心的距离
            startAngle: 0,				        //开始角度
            bRotate: false				        //false:停止;ture:旋转
        };

        this.options = $.extend(_defaults, options);

        this._init();
    }

    Turn.prototype = {
        _init: function () {
            argD = 360 / this.options.restaraunts.length;

            this.oc.width = this.w;
            this.oc.height = this.w;


            var arc = 2 * Math.PI / ( this.options.restaraunts.length);   // 平均每个弧度
            this.options.arc = arc;
            this.oct.clearRect(0, 0, this.w, this.w);
            this.oct.strokeStyle = 'transparent';

            for (var i = 0; i < this.options.restaraunts.length; i++) {
                // 绘制圆

                var angle = this.options.startAngle + (i * arc - 2 * Math.PI);
                this.oct.fillStyle = this.options.colors[i];
                this.oct.beginPath();
                this.oct.arc(this.w / 2, this.w / 2, this.options.outsideRadius, angle, angle + arc, false);
                this.oct.arc(this.w / 2, this.w / 2, this.options.insideRadius, angle + arc, angle, true);
                this.oct.stroke();
                this.oct.fill();
                this.oct.save();

                // 绘制奖品
                this.oct.fillStyle = this.options.fontColors[i];
                this.oct.font = 'bold 22px "Helvetica Neue", Helvetica, Arial, sans-serif';
                var text = this.options.restaraunts[i]['prize_name'];
                this.oct.translate(
                    this.w / 2 + Math.cos(angle + arc / 2) * this.options.textRadius,
                    this.w / 2 + Math.sin(angle + arc / 2) * this.options.textRadius
                );
                this.oct.rotate(angle + arc / 2 + Math.PI / 2);

                for (var j = 0; j < text.length; j++) {
                    this.oct.fillText(text[j], -this.oct.measureText(text[j]).width / 2, j * 22);
                }

                this.oct.restore();

            }

        },

        rotate: function(data, callback){
            var _this = this;
            var _index = matchIndex(data.data.prize.prize_id, _this.options.restaraunts);

            endD = _index * (360 - argD) - argD / 2 + (turns[random(0, turns.length - 1)] * 360);

            this.$canvas.stopRotate();
            this.$canvas.rotate({
                duration: 5000,      //转动时间
                angle: currentD,     //默认角度
                animateTo: endD,     //转动角度
                easing: $.easing.easeInOutQuad,
                callback: function () {
                    currentD = endD % 360;
                    _this.options.bRotate = !_this.options.bRotate;

                    if(callback){
                        callback();
                    }

                }
            });

        }

    };


    window.Turn = Turn;
})();