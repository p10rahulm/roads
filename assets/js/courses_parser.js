function updateCoursesContent() {
    fetch('content/courses/courses.md')
        .then(response => response.text())
        .then(markdown => {
            const htmlTable = markdownToHtmlTable(markdown);
            document.getElementById('courses-container').innerHTML = htmlTable;
        })
        .catch(error => console.error('Error loading courses:', error));
}

function markdownToHtmlTable(markdown) {
    const lines = markdown.split('\n');
    let htmlTable = '<table>';

    lines.forEach((line, index) => {
        if (index === 1 || !line.startsWith('|')) return; // Skip the second line and non-table lines
        let htmlLine = line
            .trim() //We first remove whitespace around the line
            .replace(/^\|/, '<tr><td>') // Replace starting pipe with table row start
            .replace(/\|$/, '</td></tr>') // Replace ending pipe with table row end
            .replace(/\|/g, '</td><td>') // Replace remaining pipes with table data separators
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>'); // Replace markdown links with HTML links

        // Add header tags and class for the first row
        if (index === 0) {
            console.log("htmlLine before=", htmlLine);
            htmlLine = htmlLine
                .replace(/<td>/g, '<th class="courses-table-header">')
                .replace(/<\/td>/g, '</th>');
            console.log("htmlLine after=", htmlLine);
        } else {
            // Add specific classes to each column
            htmlLine = htmlLine.replace(/<td>/, '<td class="courses-table-category">');
            htmlLine = htmlLine.replace(/<\/td><td>/, '</td><td class="courses-table-title">');
            htmlLine = htmlLine.replace(/<\/td><td>/, '</td><td class="courses-table-instructors">');
            htmlLine = htmlLine.replace(/<\/td><td>/, '</td><td class="courses-table-year">');
            htmlLine = htmlLine.replace(/<\/td><td>/, '</td><td class="courses-table-notes">');
        }
        // console.log("htmlLine after after=", htmlLine);
        htmlTable += htmlLine;
    });

    htmlTable += '</table>';
    return htmlTable;
}
