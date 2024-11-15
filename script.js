document.getElementById("add-education").addEventListener("click", () => {
    const container = document.getElementById("education-container");
    const block = document.createElement("div");
    block.classList.add("education-block");
    block.innerHTML = `
        <input type="text" class="degree" placeholder="Degree">
        <input type="text" class="institution" placeholder="Institution">
        <input type="text" class="completion-year" placeholder="Year of Completion">
        <input type="text" class="grade" placeholder="Grade/Percentage">
    `;
    container.appendChild(block);
});

document.getElementById("add-experience").addEventListener("click", () => {
    const container = document.getElementById("experience-container");
    const block = document.createElement("div");
    block.classList.add("experience-block");
    block.innerHTML = `
        <input type="text" class="job-title" placeholder="Job Title">
        <input type="text" class="company-name" placeholder="Company Name">
        <input type="text" class="duration" placeholder="Duration">
        <textarea class="job-description" placeholder="Job Description"></textarea>
    `;
    container.appendChild(block);
});

document.getElementById("create-resume").addEventListener("click", () => {
    const resumeContent = document.getElementById("resume-content");
    resumeContent.innerHTML = ""; // Clear previous content
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const objective = document.getElementById("objective").value;
    const skills = document.getElementById("skills").value.split(",");

    const personalInfo = `
        <div class="resume-section">
            <h2>${name}</h2>
            <p>Email: ${email} | Phone: ${phone}</p>
            <p>${address}</p>
        </div>
    `;
    resumeContent.innerHTML += personalInfo;

    if (objective) {
        resumeContent.innerHTML += `
            <div class="resume-section">
                <h3>Career Objective</h3>
                <p>${objective}</p>
            </div>
        `;
    }

    const educationBlocks = document.querySelectorAll(".education-block");
    if (educationBlocks.length > 0) {
        let educationHTML = `<div class="resume-section"><h3>Education</h3>`;
        educationBlocks.forEach(block => {
            const degree = block.querySelector(".degree").value;
            const institution = block.querySelector(".institution").value;
            const year = block.querySelector(".completion-year").value;
            const grade = block.querySelector(".grade").value;
            educationHTML += `<p>${degree} from ${institution} (${year}) - ${grade}</p>`;
        });
        educationHTML += "</div>";
        resumeContent.innerHTML += educationHTML;
    }

    const experienceBlocks = document.querySelectorAll(".experience-block");
    if (experienceBlocks.length > 0) {
        let experienceHTML = `<div class="resume-section"><h3>Work Experience</h3>`;
        experienceBlocks.forEach(block => {
            const jobTitle = block.querySelector(".job-title").value;
            const companyName = block.querySelector(".company-name").value;
            const duration = block.querySelector(".duration").value;
            const description = block.querySelector(".job-description").value;
            experienceHTML += `<p><b>${jobTitle}</b> at ${companyName} (${duration})</p><p>${description}</p>`;
        });
        experienceHTML += "</div>";
        resumeContent.innerHTML += experienceHTML;
    }

    if (skills.length > 0) {
        resumeContent.innerHTML += `
            <div class="resume-section">
                <h3>Skills</h3>
                <p>${skills.join(", ")}</p>
            </div>
        `;
    }

    document.getElementById("resume-output").classList.remove("hidden");
});

document.getElementById("print-resume").addEventListener("click", () => {
    window.print();
});