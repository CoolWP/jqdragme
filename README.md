# jqdragme
a jQuery Plugin for CAPTCHA
## Intro
* everyone parameter are optional,but you can change everyone;
* support callback;
* only on js file;
* it's responsive;
& the only depency is [jQuery](https://github.com/jquery/jquery).
## Usage

```javascript
        jQuery(function($){
            $('#coolwp-drag-me').coolwpDragMe({
                tip:            '将滑块拖动到右侧进行人机验证',
                successTip:     '验证成功！',
                callback:       function(res){
                                    window.console.log(res);
                                    if(true===res){
                                       // alert('success!');
                                    }else{
                                        //alert('failure!');
                                       // window.location.href='http://coolwp.com/create-jquery-plugin-3.html';
                                   }
                             
                                }
            });
        });   
```

## Project Home

[jQuery Drag Me](http://coolwp.com/create-jquery-plugin-3.html)