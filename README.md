# jqdragme
a jQuery Plugin for CAPTCHA
## Intro
* everyone parameter is optional,but you can change everyone;
* support callback;
* only on js file;
* it's responsive;
& the only depency is [jQuery](https://github.com/jquery/jquery).

## Usage

For [bower](https://github.com/bower/bower)
```
bower install jqdragme --save

```
For [npm](https://github.com/npm/npm)
```
npm install  jqdragme --save
```

```javascript
        jQuery(function($){
            $('#coolwp-drag-me').coolwpDragMe({
                tip:            'Drag the handler to right for CAPTCHA',
                successTip:     'Success!',
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
