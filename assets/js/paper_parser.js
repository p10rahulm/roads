function fetchPaperListUnsorted() {
    return fetch('content/papers/papers_list.txt')
        .then(response => response.text())
        .then(text => text.split('\n').filter(line => line.trim().length > 0));
}

function fetchPaperList() {
    return fetch('content/papers/papers_list.txt')
        .then(response => response.text())
        .then(text => {
            const paths = text.split('\n').filter(line => line.trim().length > 0);
            return paths.sort((a, b) => {
                const aFileName = a.split('/').pop();
                const bFileName = b.split('/').pop();
                return bFileName.localeCompare(aFileName);
            });
        });
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
    const paperlink = metadata.match(/paper_link = "(.*?)"/)[1];


    return {title, authors, publicationDetails, conferenceDate, abstract, notes, paperlink};
}

function createPaperHtml(paperData, fileName) {
    // Check if publications details is empty, else create the paper-publication-details span
    let publicationDetailsHtml = '';
    if (paperData.publicationDetails) {
        publicationDetailsHtml = `
        <span class="paper-publication-details">
            <b>Publication Details:</b> ${paperData.publicationDetails}
        </span>`;
    }
    // Check if abstract is empty, else create the abstract div
    let abstractHtml = '';
    if (paperData.abstract && paperData.abstract.trim() !== '') {
        abstractHtml = `
        <div class="paper-details-holder">
            <div class="paper-abstract-short" onclick="seeMoreAbstract(this)">
                <b>Abstract:</b> 
                ${paperData.abstract}
            </div>
            <div class="paper-notes">${paperData.notes}</div>
        </div>
    `;
    }

    return `
        <div id="${fileName}" class="paper-card paper-fullpage">
            <div class="paper-main-holder">
                <a href="${paperData.paperlink}" target="_blank">
                    <div class="paper-title"><b>Title:</b> ${paperData.title}</div>
                    <div class="paper-authors"><b>Authors:</b> ${paperData.authors}</div>
                </a>
                <span class="paper-release-date">${paperData.conferenceDate}</span>
                ${publicationDetailsHtml}
            </div>
            ${abstractHtml}
        </div>
    `;
}


let currentPaperIndex = 0;
const papersPerPage = 20; // Number of papers per page

function loadPapers(papersList, startIndex) {
    const endIndex = startIndex + papersPerPage;
    for (let i = startIndex; i < endIndex && i < papersList.length; i++) {
        const fileName = papersList[i].split('/').pop().replace('.md', '');
        fetchPaperContent(papersList[i])
            .then(content => parsePaperContent(content))
            .then(paperData => {
                const paperHtml = createPaperHtml(paperData, fileName);
                document.getElementById('papers-container').innerHTML += paperHtml;
            });
    }
}

/*
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
*/

function updatePapersContent() {
    fetchPaperList().then(papersList => {
        loadPapers(papersList, currentPaperIndex);
    });
}

function loadMorePapers() {
    fetchPaperList().then(papersList => {
        currentPaperIndex += papersPerPage;
        loadPapers(papersList, currentPaperIndex);
        if (currentPaperIndex >= papersList.length) {
            // Hide the Load More button if there are no more papers to load
            document.getElementById('load-more').style.display = 'none';
        }
    });
}



/*
document.addEventListener('DOMContentLoaded', function() {
    updatePapersContent();
});
*/
