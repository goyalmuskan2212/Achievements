function showDetails(achievement) {
    const detailsSection = document.getElementById('achievement-details');
    detailsSection.style.display = 'block';

    let content = '';
    if (achievement === 'atl') {
        content = `
            <h2>ATL Student Innovator</h2>
            <p>I was certified as an ATL Student Innovator by NITI Aayog for developing a smart blind stick using sensors and Arduino, aimed at assisting visually impaired individuals with obstacle detection.</p>
        `;
    } else if (achievement === 'cbse10') {
        content = `
            <h2>Class 10 - 94%</h2>
            <p>I achieved a score of 94% in my CBSE Class 10 board examinations.</p>
        `;
    } else if (achievement === 'cbse12') {
        content = `
            <h2>Class 12 - 90%</h2>
            <p>I achieved a score of 90% in my CBSE Class 12 board examinations..</p>
        `;
    }
    
    detailsSection.innerHTML = content;
}
