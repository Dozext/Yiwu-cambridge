window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header && window.scrollY > 50) { 
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; 
    } else if (header) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    }
    
    // Animación interactiva de la barra del proceso (Stepper)
    const stepItems = document.querySelectorAll('.step-item');
    const progressLine = document.getElementById('workflow-progress');
    
    if (stepItems.length && progressLine) {
        let activeCount = 0;
        stepItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                item.classList.add('active');
                activeCount = index;
            }
        });
        progressLine.style.height = `${(activeCount / (stepItems.length - 1)) * 100}%`;
    }
});