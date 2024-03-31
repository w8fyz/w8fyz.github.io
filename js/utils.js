function onScreen(elem, allowElemBehind = false, allowElemAhead = false) {
    const scrollDist = document.documentElement.scrollTop;
    const elemOffset = window.scrollY + elem.getBoundingClientRect().top;

    if (!allowElemBehind && !(elemOffset + elem.offsetHeight > scrollDist))
        return false;

    if (!allowElemAhead && !(scrollDist + window.innerHeight > elemOffset))
        return false;

    return true;
}