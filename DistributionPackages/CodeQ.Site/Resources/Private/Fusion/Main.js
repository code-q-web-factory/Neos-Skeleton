import 'lazysizes';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';

Alpine.plugin(focus);
Alpine.plugin(collapse);

// We use this to enable the AlpineJS debugger in the browser.
if (document.documentElement.dataset.debug != undefined) {
    window.Alpine = Alpine;
}

// Safari 11 polyfill for AlpineJS, see also https://github.com/alpinejs/alpine/discussions/1964
if (typeof window.queueMicrotask !== "function") {
    window.queueMicrotask = function (callback) {
        Promise.resolve()
            .then(callback)
            .catch(e => setTimeout(() => { throw e; }));
    };
}

Alpine.start();
