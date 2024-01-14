function toggleMenu(){
    document.querySelector('.about-btn').classList.toggle('active');
    document.querySelector('.about-nav').classList.toggle('active');
}

function toggleAccordion(){
    document.getElementById('link1').addEventListener('click', function(){
        document.querySelector('.about-content').classList.toggle('active');
    })
    document.getElementById('link2').addEventListener('click', function(){
        document.querySelector('.about-footer').classList.toggle('active');
    })
}

toggleAccordion();