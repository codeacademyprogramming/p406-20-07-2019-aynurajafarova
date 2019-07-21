document.querySelector('.heading').addEventListener('click', function () {
    let content = document.querySelector('.content')
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});