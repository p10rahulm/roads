function fetchPeopleList() {
    return fetch('content/people/people_list.txt')
        .then(response => response.text())
        .then(text => text.split('\n').filter(line => line.trim().length > 0));
}


function fetchPeopleContent(path) {
    return fetch(path).then(response => response.text());
}

function parsePeopleContent(content) {
    const metadata = content.split('+++')[1].trim();
    const name = metadata.match(/name = "(.*?)"/)[1];
    const affiliationToLab = metadata.match(/affiliation_to_lab = "(.*?)"/)[1];
    const currentRole = metadata.match(/current_role = "(.*?)"/)[1];
    const currentAffiliation = metadata.match(/current_affiliation = "(.*?)"/)[1];
    const pageLink = metadata.match(/page_link = "(.*?)"/)[1];
    const photoFilename = metadata.match(/photo_filename = "(.*?)"/)[1];
    const notes = metadata.match(/notes = "(.*?)"/)[1];

    return { name, affiliationToLab, currentRole, currentAffiliation, pageLink, photoFilename, notes };
}


function createPersonCardHtml(personData) {
    return `
    <div class="person-card">
        <div class="person-image-holder">
            <a class="person-image-link-href" href="${personData.pageLink}" target="_blank">
                <img class="person-image" src="content/people/images/${personData.photoFilename}" alt="${personData.name} Photo">
            </a>
        </div>
        <div class="person-speaker">
            <a class="person-link-href" href="${personData.pageLink}" target="_blank">
                ${personData.name}
            </a>
            <div class="person-current-role">${personData.currentRole}</div>
            <div class="person-current-affiliation">${personData.currentAffiliation}</div>
        </div>
    </div>`;
}


function updatePeopleContent() {
    fetchPeopleList().then(peopleList => {
        peopleList.forEach(peoplePath => {
            fetchPeopleContent(peoplePath)
                .then(content => parsePeopleContent(content))
                .then(peopleData => {
                    const peopleHtml = createPersonCardHtml(peopleData);
                    let containerId = '';

                    // Determine the container based on affiliation
                    switch (peopleData.affiliationToLab) {
                        case 'professor':
                            containerId = 'professors-container';
                            break;
                        case 'mtech_research':
                            containerId = 'mtech_research-container';
                            break;
                        case 'mtech':
                            containerId = 'mtech-container';
                            break;
                        case 'postdoc_student':
                            containerId = 'postdoc-container';
                            break;
                        case 'phd_student':
                            containerId = 'phd-container';
                            break;
                        case 'alumni':
                            containerId = 'alumni-container';
                            break;
                        case 'research_associate':
                            containerId = 'ra-container';
                            break;
                        case 'intern':
                            containerId = 'intern-container';
                            break;
                        case 'past_intern':
                            containerId = 'past-intern-container';
                            break;
                        default:
                            containerId = 'alumni-container'; // Default container
                    }

                    // Add HTML to the appropriate container
                    document.getElementById(containerId).innerHTML += peopleHtml;
                });
        });
    });
}

/*
document.addEventListener('DOMContentLoaded', function() {
    updatePeopleContent();
});
*/
