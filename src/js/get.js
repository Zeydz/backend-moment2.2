"use strict";

/* Kör fetchWorkExperiences när sidan laddats in. */
document.addEventListener('DOMContentLoaded', () => {
    fetchWorkExperiences();
});

/* Hämtar all data från api/work-experiences */
async function fetchWorkExperiences() {
    try {
        const response = await fetch ('https://backend-moment2.onrender.com/api/work-experiences');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message) || 'Failed to fetch work experiences.'
        }

        const workExperiencesList = document.getElementById('work-experiences-list');
        workExperiencesList.innerHTML = '';

        data.forEach(workExperience => {
            const listItem = document.createElement('li');
            listItem.textContent = `${workExperience.companyname} - ${workExperience.jobtitle}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Ta bort';
            deleteButton.addEventListener('click', () => d)


            listItem.appendChild(deleteButton);
            workExperiencesList.appendChild(listItem);

        })

    } catch (error) {
        console.error('Error fetching work experiences: ' + error.message);
    }
}