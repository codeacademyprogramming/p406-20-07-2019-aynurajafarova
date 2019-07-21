// document.querySelector('.dropdown-trigger').addEventListener('click', function () {
//     let navBar = document.querySelector('.navigation-bar')
//     if (navBar.style.display === 'none') {
//         navBar.style.display = 'block';
//     } else {
//         navBar.style.display = 'none';
//     }
// });



// document.querySelectorAll('.privacy-settings').forEach((privacySettings) => {
//     const dropdownTrigger = privacySettings.querySelector('.dropdown-trigger');
//     const navBar = privacySettings.querySelector('.navigation-bar');

//     dropdownTrigger.addEventListener('click', function () {
//         if (navBar.classList.contains('deactive')) {
//             navBar.classList.remove('deactive');
//         } else {
//             navBar.classList.add('deactive');
//         }
//     })
// })

document.querySelectorAll('.privacy-settings').forEach((privacySettings) => {
    const dropdownTrigger = privacySettings.querySelector('.dropdown-trigger');
    const navBar = privacySettings.querySelector('.navigation-bar');

    dropdownTrigger.addEventListener('click', function () {
        navBar.classList.toggle('deactive')
    });
});