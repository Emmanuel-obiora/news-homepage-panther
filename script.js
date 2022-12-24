function openModal(){
    const open = document.getElementById('modalLock');
    const navs = document.getElementById('hideNav');

    open.classList.add('open-modal');
    navs.classList.add('show-nav');

}
function closeModal(){
    const open = document.getElementById('modalLock');
    const navs = document.getElementById('hideNav');

    open.classList.remove('open-modal');
    navs.classList.remove('show-nav');
}