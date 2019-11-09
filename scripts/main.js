/*
 * JavaScript boilerplate and initialization routines.
 */

// Google Analytics
window.ga = function () {
    ga.q.push(arguments)
};
ga.q = [];
ga.l = +new Date;
ga('create', 'UA-141664580-1', 'auto');
ga('set', 'transport', 'beacon');
ga('send', 'pageview');
