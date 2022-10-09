
var image = document.getElementById("image");
var container = document.getElementById("container");
var cropper = document.getElementById("cropper");
var range = document.getElementById("range");

var mouseMove = false;
var mouseDown = false;

var initMouseX = 0;
var initMouseY = 0;
var initImageX = 0;
var initImageY = 0;
var ratio = 1;
var margin = 50;

cropper.style.left = container.offsetLeft;
cropper.style.top = container.offsetTop;

reset_image();
var originalImageWidth;
var originalImageHeight;

    originalImageWidth = image.clientWidth;
    originalImageHeight = image.clientHeight;

window.onmousemove = function(event){
    if(mouseMove && mouseDown){
        var x = event.clientX - initMouseX;
        var y = event.clientY - initMouseY;
        
        x = initImageX + x;
        y = initImageY + y;
        
        if(x > margin){
            x = margin;
        }
        if(y > margin){
            y = margin;
        }
        xlimit = container.clientWidth - image.clientWidth - margin;
        if(x < xlimit){
            x = xlimit;
        }
        ylimit = container.clientHeight - image.clientHeight - margin;
        if(y < ylimit){
            y = ylimit;
        }
        image.style.left = x;
        image.style.top = y;
    }
}
window.onmouseup = function(event){
    mouseDown = false;
}

function resize_image(){
    var w = image.clientWidth;
    var h = image.clientHeight;
    image.style.width = (range.value / 10) * originalImageWidth;
    image.style.height = (range.value / 10) * originalImageHeight;
    var w2 = image.clientWidth;
    var h2 = image.clientHeight;
    if(w - w2 != 0){
        var diff = (w - w2) / 2;
        var diff2 = (h - h2) / 2;
        var x = (image.offsetLeft - container.offsetLeft) + diff;
        var y = (image.offsetTop - container.offsetTop) + diff2;
        if(x > margin){
            x = margin;
        }
        if(y > margin){
            y = margin;
        }
        xlimit = container.clientWidth - image.clientWidth - margin;
        if(x < xlimit){
            x = xlimit;
        }
        ylimit = container.clientHeight - image.clientHeight - margin;
        if(y < ylimit){
            y = ylimit;
        }

        image.style.left = x;
        image.style.top = y;

    }
}

function reset_image(){
    //actucally width of the image
    console.log(image.naturalWidth);
    console.log(image.naturalHeight);
    if(image.naturalWidth > image.naturalHeight){
        ratio = image.naturalWidth / image.naturalHeight;
        image.style.height = container.clientHeight - (margin * 2);
        image.style.width = (container.clientWidth  - (margin * 2)) * ratio;
        image.style.top = margin;
        var extra = (image.clientWidth - container.clientWidth) / 2;
        image.style.left = extra * -1;
    }else{
        ratio = image.naturalHeight / image.naturalWidth;
        image.style.width = container.clientWidth - (margin * 2);
        image.style.height = (container.clientHeight  - (margin * 2)) * ratio;
        image.style.left = margin;
        var extra = (image.clientHeight - container.clientHeight) / 2;
        image.style.top = extra * -1;
    }
    range.value = 10;
}


function mouseDown_on(event)
{
    mouseDown = true;
    initMouseX = event.clientX;
    initMouseY = event.clientY;
    initImageX = image.offsetLeft - container.offsetLeft;
    initImageY = image.offsetTop - container.offsetTop;

}
function mouseDown_off()
{
    mouseDown = false;
}
function mouseMove_on()
{
    mouseMove = true;
}
function mouseMove_off()
{
    mouseMove = false;
}

function crop(){
    if(image.naturalWidth > image.naturalHeight){
        ratio = image.naturalHeight / (container.clientHeight - (margin * 2));
    }else{
        ratio = image.naturalWidth / (container.clientWidth - (margin * 2));
    }
    var x1 = image.style.left;
    x1 = x1.replace("px", "");
    if(x1 < 0){x1 = x1 * -1;}
    x1 = x1 - margin;

    var y1 = image.style.top;
    y1 = y1.replace("px", "");
    if(y1 < 0){y1 = y1 * -1;}
    y1 = y1 - margin;

    var x2 = (x1 + (container.clientWidth) - (margin * 2));
    var y2 = (y1 + (container.clientHeight) - (margin * 2));

    var width = (x2 - x1) * ratio;
    var height = (y2 - y1) * ratio;

    x1 = x1 * ratio;
    y2 = y2 * ratio;

    var zoomFactor = (range.value / 10);
    x1 = x1 / zoomFactor;
    y1 = y1 / zoomFactor;
    width = width / zoomFactor;
    height = height / zoomFactor;

    // x1 -- y1 -- width -- height
}