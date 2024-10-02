function showDetails(achievement) {
    const detailsSection = document.getElementById('achievement-details');
    detailsSection.style.display = 'block';

    let content = '';
    if (achievement === 'atl') {
        content = `
            <h2>ATL Student Innovator</h2>
            <p>Certified by NITI Aayog for creating a blind stick using sensors and Arduino in class 9.</p>
            <img src="" alt="NITI Aayog Logo">
        `;
    } else if (achievement === 'cbse10') {
        content = `
            <h2>Class 10 - 94%</h2>
            <p>I scored 94% in my CBSE class 10 board exams.</p>
            <img src="" alt="CBSE Logo">
        `;
    } else if (achievement === 'cbse12') {
        content = `
            <h2>Class 12 - 90%</h2>
            <p>I scored 90% in my CBSE class 12 board exams.</p>
            <img src="" alt="CBSE Logo">
        `;
    }
    
    detailsSection.innerHTML = content;
}
