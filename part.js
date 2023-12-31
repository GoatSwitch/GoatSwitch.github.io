
particlesJS("particles-js",
    {
        "particles":
        {
            "number":
            {
                "value": 6,
                "density":
                    { "enable": true, "value_area": 1200 }
            }, "color": { "value": "#dedede" },
            "shape": {
                "type": "polygon", "stroke": { "width": 0, "color": "#000" },
                "polygon": { "nb_sides": 6 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 }
            },
            "opacity": { "value": 0.3, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 100, "random": false, "anim": { "enable": true, "speed": 10, "size_min": 40, "sync": false } },
            "line_linked": { "enable": false, "distance": 200, "color": "#ffffff", "opacity": 1, "width": 2 },
            "move": {
                "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode":
                    "bounce", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
        },
        "interactivity":
        {
            "detect_on": "canvas", "events":
            {
                "onhover": { "enable": true, "mode": "bubble" },
                "onclick": { "enable": true, "mode": "repulse" }, "resize": true
            },
            "modes": {
                "grab":
                    { "distance": 400, "line_linked": { "opacity": 1 } },
                "bubble": { "distance": 231.44200550588337, "size": 98, "duration": 2, "opacity": 0.10557003759917487, "speed": 1 },
                "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
            }
        }, "retina_detect": true
    });