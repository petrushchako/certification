## innerHTML
The innerHTML property is great when you need to dynamically write text onto the page and some leement we need to add are not present.

```
function checkoutWindow(){
    checkWin = window.open("checkout.htm", "", "width=300, height=300, status=no")
    chckWin.document.write("<p>This document is current as of" + Date());
}

fucntion closecheckOut(){
    checkWin.close();
}
```