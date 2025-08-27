document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function (e) {
        // Only toggle if clicking outside the description area
        if (!e.target.closest('.project-desc')) {
            const desc = box.querySelector('.project-desc');
            desc.classList.toggle('open');
        }
    });

    box.addEventListener('mouseleave', function () {
        const desc = box.querySelector('.project-desc');
        desc.classList.remove('open');
    });
});

