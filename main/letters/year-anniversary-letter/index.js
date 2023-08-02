const link_header = document.querySelector('.header-links-container');
const scroll_watcher = document.createElement('div');
const home_link = document.querySelector('.home')

scroll_watcher.setAttribute('data-scroll-watcher', '');
link_header.before(scroll_watcher)

const navObserver = new IntersectionObserver((entries) => {
    link_header.classList.toggle('sticking', !entries[0].isIntersecting),
    home_link.classList.toggle('sticky_header', !entries[0].isIntersecting)
}, {rootMargin: '10px 0px 0px 0px'})


navObserver.observe(scroll_watcher)
