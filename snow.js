window.onload = function () {

    //Get the canvas and context and store in vars
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    //Set Canvas width and height to window w and h
    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.height = H;
    canvas.width = W;

    //Generate the snow Flakes and apply the attributes

    var mf = 100; // Max Flakes would be 100
    var flakes = [];

    // loop through empty flakes and apply the attributes

    for (var i = 0; i < mf; i++) {

        flakes.push({
            //Random gives a number b/w 0 and 1
            x: Math.random() * W, // This will give it the x co-ordinate
            y: Math.random() * H, // Y co-ordinate
            r: Math.random() * 5 + 2, // Min Radius will be 2px and Max = 7px
            d: Math.random() + 1 // Max Density will be 2 and min 1
        })

    }

    // Drawing Flakes to Canvas

    function drawFlakes() {

        ctx.clearRect(0, 0, W, H); // Clears the entire Canvas
        ctx.fillStyle = "white"; // Styling the flakes with colour white
        ctx.beginPath(); // Starts Drawing Canvas

        for (var i = 0; i < mf; i++) {

            var f = flakes[i]; // Gets the flakes
            ctx.moveTo(f.x, f.y); // Moves to the x and y co- ordinate
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
            //       x     y   r   (start,end)degrees


        }

        ctx.fill(); // Fills the flakes with fillstyle i.e white colour
        moveFlakes(); // Animates it to move
    };

    //Animating the Flakes

    var angle = 0;

    function moveFlakes() {

        angle += 0.01;

        for (var i = 0; i < mf; i++) {
            // Storing Current Flake

            var f = flakes[i];

            //Update x and y Co-ordinate

            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            // If snowFlakes Reaches bottome send it to the top again

            if (f.y > H) {
                flakes[i] = {
                    x: Math.random() * W,
                    y: 0,
                    r: f.r,
                    d: f.d
                }
            }

        }

    };

    setInterval(drawFlakes, 25);

};