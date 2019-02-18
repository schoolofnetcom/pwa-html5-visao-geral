if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function(reg) {
            console.log('APP: Service worker registered');
        })
        .catch(function(err) {
            console.log('APP: err', err);
        })
}