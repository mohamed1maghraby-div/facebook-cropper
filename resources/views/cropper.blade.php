<style>
    #image{
        position: relative;
        -khtml-user-select: none;
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    #container{
        width: 400px;
        height: 400px;
        margin: auto;
        overflow: hidden;
    }
    #cropper{
        width: 400px;
        height: 400px;
        position: absolute;
        cursor: move;
        background-image: url(cropper-bg.png);
        background-size: 100% 100%;
    }
    #range{
        width: 400px;
        margin: auto;
        display: block;
    }
</style>
<div id="container" onmousedown="mouseDown_on(event)" onmouseup="mouseDown_off(event)" onmouseenter="mouseMove_on(event)" onmouseleave="mouseMove_off(event)">
    <img id="image" src="{{ asset('983427581.jpg') }}" alt="image">
    <div id="cropper"></div>
</div>

<br/>
<input id="range" type="range" min="10" max="40" onmousemove="resize_image(event)">
<button onclick="crop()">crop</button>
<script src="{{ asset('medo.js') }}"></script>