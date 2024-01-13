const elements = document.querySelectorAll('.color-title');

elements.forEach(element => {
    const atttibuteValue = element.getAttribute('id');
    element.style.setProperty('--color', atttibuteValue);
});