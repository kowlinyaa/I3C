function display1(page) {
    const contentArea = document.getElementById('about_page1');

    if(page=== 'page1'){
        contentArea.innerHTML = `
            <p>Hackathons & Innovation Challenges Competitive, high-impact events to test ideas under real pressure.</p>
            <p class="pages">Slide 1/3</p>`;
    }else if(page=== 'page2'){
        contentArea.innerHTML = `
            <p>Workshops & Skill Training From coding bootcamps to product design and startup strategy.</p>
            <p class="pages">Slide 2/3</p>`;
    }else if(page==='page3'){
        contentArea.innerHTML = `
            <p>Mentorship & Networking Connect with alumni, industry leaders, and entrepreneurs for career guidance.</p>
            <p class="pages">Slide 3/3</p>`
    }
}



function display2(page) {
    const contentArea = document.getElementById('about_page2');

    if(page=== 'page1'){
        contentArea.innerHTML = `
            <p>Gain hands-on technical, design, and business skills through real projects and mentorship.</p>
            <p class="pages">Slide 1/4</p>`;
    }else if(page=== 'page2'){
        contentArea.innerHTML = `
            <p>Boost your career opportunities with experience recruiters actually look for, before you graduate.</p>
            <p class="pages">Slide 2/4</p>`;
    }else if(page==='page3'){
        contentArea.innerHTML = `
            <p>Build a portfolio of real-world projects to confidently show in interviews and applications.</p>
            <p class="pages">Slide 3/4</p>`
    }else if(page=== 'page4'){
        contentArea.innerHTML = `
            <p>Be part of Bhattadev University's growing innovation community of builders and mentors.</p>
            <p class="pages">Slide 4/4</p>`
    }
}

