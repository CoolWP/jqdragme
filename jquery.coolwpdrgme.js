/* 
* @Author: suifengtec coolwp.com
* @Date:   2016-01-29 19:37:06
* @Last Modified by:   suifengtec coolwp.com
* @Last Modified time: 2016-01-30 19:01:27
* @version : 1.0.0
*/

!(function($){
    $.fn.coolwpDragMe = function(params){
        var x, drag = this, isMove = false, defaults = {
            containerCSS:{'position':'relative','text-align':'center','width':'100%;','height':'34px','line-height':'34px','background-color':'#e8e8e8','baground':'#e8e8e8'},
            handlerCSS:{'position':'absolute','top':'0','left':'0','width':'10%','height':'32px','border':'1px solid #ccc','cursor':'move'},
            dragCSS:{'background':'#2ECC71','background-color':'#2ECC71','height':'34px','width':'0'},
            tip:'Drag the handler to right for CAPTCHA',
            tipPNG:'data:image/png;base64,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',
            successTip:'Passed!',
            successPNG:'data:image/png;base64,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',
            callback:false
        };
        var params = $.extend(defaults, params);
        this.before('<style>.cwp-drag-captcha-handler-bg{background: #fff url("'+params.tipPNG+'") no-repeat center;}.cwp-drag-captcha-passed-handler-bg{background: #fff url("'+params.successPNG+'") no-repeat center;}</style>');

        this.css(params.containerCSS);

        var html = '<div class="cwp_drag_bg"></div>'+
                    '<div class="drag_text" onselectstart="return false;" unselectable="on" style="position: absolute;top: 0px;-moz-user-select: none;-webkit-user-select: none;user-select: none;-o-user-select:none;-ms-user-select:none;width:100%;">'+params.tip+'</div>'+
                    '<div class="handler cwp-drag-captcha-handler-bg"></div>';
        this.append(html);
        var handler = drag.find('.handler');
         handler.css(params.handlerCSS);
        var cwp_drag_bg = drag.find('.cwp_drag_bg');
        cwp_drag_bg.css(params.dragCSS);
        var text = drag.find('.drag_text');
        /* the max x position of the handler. */
        var maxWidth = drag.width() - handler.width(); 

        /* get the x position of the handler when mousedown envent happening */
        handler
        .mousedown(function(e){
            isMove = true;
            x = e.pageX - parseInt(handler.css('left'), 10);
        });
       /* set  the x position of the drag area  equal the length of the handler movement when the handler movement between 0 and the max-width  */
        $(document)
        .mousemove(function(e){
            var _x = e.pageX - x;
            if(isMove){
                if(_x > 0 && _x <= maxWidth){
                    handler.css({'left': _x});
                    cwp_drag_bg.css({'width': _x});
                }else if(_x > maxWidth){

                    /*========clear event========*/
                    handler.removeClass('cwp-drag-captcha-handler-bg').addClass('cwp-drag-captcha-passed-handler-bg');
                    text.text(params.successTip);
                    drag.css({'color': '#fff'});
                    handler.unbind('mousedown');
                    $(document).unbind('mousemove');
                    $(document).unbind('mouseup');
                    /*========clear event========*/
                    /* change  handler and drag area  style */
                    cwp_drag_bg.css({'width': maxWidth});
                    handler.css({'left': maxWidth});
                    if ('function' === typeof params.callback) {
                        params.callback(true);
                    }
                   /*  callback();*/

                }
            }
        })
        /* the handler returns to the start position when mouseup event happening and  it does not move the the max x position, */
        .mouseup(function(e){
            isMove = false;
            var _x = e.pageX - x;

            if(_x < maxWidth){
                handler.css({'left': 0});
                cwp_drag_bg.css({'width': 0});

                    if ('function' === typeof params.callback) {
                       params.callback(false);
                    }
            }
        });
        
    };
})(jQuery);
