function svg_interact(svg,p) {
    var p = p ? p : {},
        zoom_speed = p.zoom_speed ? p.zoom_speed : 1.15,
        viewBox = svg[0][0].viewBox.baseVal;
        panning = null,
        current_mouse = null;


    /* Panning moves the viewbox */

    function mousemove(){
        current_mouse = d3.svg.mouse(this);
        if (panning)  {
            viewBox.x +=(panning[0] -current_mouse[0]);
            viewBox.y += (panning[1] - current_mouse[1]);
        }
    };

    svg.on("mousemove",mousemove)
    svg.on("mousedown", function() { panning = d3.svg.mouse(this)});
    d3.select(window).on("mouseup",function () { panning = null;})
    svg[0][0].ondragstart = function() { return false }  // Firefox fix


    /* Zoom with mousewheel - keeping mouse position in same location*/

    function wheel(event) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta/120;
        } else if (event.detail) {
            delta = -event.detail/3;
        }
        move = (delta<0) ? -delta * zoom_speed : 1/(delta*zoom_speed);

        viewBox.x=(current_mouse[0]-(current_mouse[0]-viewBox.x)*move);
        viewBox.y=(current_mouse[1]-(current_mouse[1]-viewBox.y)*move);
        viewBox.height = viewBox.height * move;
        viewBox.width = viewBox.width * move;
        };


    svg[0][0].addEventListener('DOMMouseScroll', wheel, false);
    svg[0][0].onmousewheel = wheel;
    document.onmousewheel = function () { return null};



    return svg;
}s
