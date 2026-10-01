const legacyProjects = {
    '#case-electron-chatbot': 'project-electron.html',
    '#case-broadcasting-platform': 'project-broadcasting.html',
    '#case-ise-platform': 'project-ise.html',
    '#case-tad-platform': 'project-tad.html',
    '#case-studies': 'work.html',
    '#skills': 'about.html',
    '#experience': 'about.html',
    '#process': 'about.html',
    '#design': 'https://gonzasha345-art.github.io/designportfolio/'
};
if (legacyProjects[window.location.hash]) {
    window.location.replace(legacyProjects[window.location.hash]);
}
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#portfolio-navigation');
function closeMenu() {
    menu?.setAttribute('aria-expanded', 'false');
    navigation?.classList.remove('is-open');
}
menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation?.classList.toggle('is-open', open);
});
navigation?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
    }
});
