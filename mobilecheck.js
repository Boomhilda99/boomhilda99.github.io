function isMobileDevice() {
    return /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
}

window.onload = function() {
    if (isMobileDevice()) {
        window.location.href = "/mobile";
    }
};
