function fetchPaperList() {
    return fetch('content/papers/papers_list.txt')
        .then(response => response.text())
        .then(text => text.split('\n').filter(line => line.trim().length > 0));
}

function fetchPaperContent(path) {
    return fetch(path).then(response => response.text());
}

function parsePaperContent(content) {
    const metadata = content.split('+++')[1].trim();
    const abstract = content.split('<b>Abstract:</b>')[1].trim().split('<div')[0].trim();
    const title = metadata.match(/title = "(.*?)"/)[1];
    const authors = metadata.match(/authors = "(.*?)"/)[1];
    const publicationDetails = metadata.match(/publication_details = "(.*?)"/)[1];
    const conferenceDate = metadata.match(/conference_date = "(.*?)"/)[1];
    const notes = metadata.match(/notes = "(.*?)"/)[1];

    return {title, authors, publicationDetails, conferenceDate, abstract, notes};
}

function createPaperHtml(paperData, fileName) {
    return `
        <div id="${fileName}" class="paper-card paper-fullpage">
            <div class="paper-title">${paperData.title}</div>
            <div class="paper-authors">${paperData.authors}</div>
            <div class="paper-publication-details">${paperData.publicationDetails}</div>
            <div class="paper-release-date">${paperData.conferenceDate}</div>

            <div class="paper-details-holder">
                <div class="paper-abstract" onclick="seeMoreAbstract(this)">
                    <b>Abstract:</b> 
                    ${paperData.abstract}
                </div>
                <div class="paper-notes">${paperData.notes}</div>
            </div>
        </div>
    `;
}

function updatePapersContent() {
    fetchPaperList().then(papersList => {
        papersList.forEach(paperPath => {
            const fileName = paperPath.split('/').pop().replace('.md', '');
            fetchPaperContent(paperPath)
                .then(content => parsePaperContent(content))
                .then(paperData => {
                    const paperHtml = createPaperHtml(paperData, fileName);
                    document.getElementById('papers-container').innerHTML += paperHtml;
                });
        });
    });
}

/*
document.addEventListener('DOMContentLoaded', function() {
    updatePapersContent();
});
*/
