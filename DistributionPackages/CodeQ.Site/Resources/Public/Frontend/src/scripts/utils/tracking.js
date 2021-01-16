// Global site tag (gtag.js) - Google Analytics
const GA_TRACKING_ID = 'UA-XXXXX-Y';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_TRACKING_ID, { 'anonymize_ip': true });

(function(d, o, g) {
	let a = d.createElement(o);
	let m = d.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m);
})(document, 'script', 'https://www.googletagmanager.com/gtag/js?id=' + GA_TRACKING_ID);
