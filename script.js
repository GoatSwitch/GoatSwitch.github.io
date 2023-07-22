window.onload = () => {
    divParticlesJs = document.getElementById("particles-js");

    if (divParticlesJs) {
        canvasParticleJs = divParticlesJs.getElementsByTagName("canvas")[0];
    }
}

function onBodyMouseMove(e) {
    if (divParticlesJs && canvasParticleJs) {
        const divParticlesJsRect = divParticlesJs.getBoundingClientRect();
        const newMouseEvent = new MouseEvent("mousemove", {
            clientX: e.clientX - divParticlesJsRect.left,
            clientY: e.clientY - divParticlesJsRect.top,
        });

        canvasParticleJs.dispatchEvent(newMouseEvent);
    }
}