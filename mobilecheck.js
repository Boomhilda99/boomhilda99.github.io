function isMobileDevice() {
    return /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
}

function shouldForceDesktop() {
    return window.location.hash === "#forcedesktop";
}

window.onload = function() {
    if (isMobileDevice() && !shouldForceDesktop()) {
        window.location.href = "/mobile";
    }
};
