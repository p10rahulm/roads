document.addEventListener('DOMContentLoaded', function() {
    fetch('content/courses/courses.md')
        .then(response => response.text())
        .then(markdown => {
            const htmlTable = markdownToHtmlTable(markdown);
            document.getElementById('courses-container').innerHTML = htmlTable;
        })
        .catch(error => console.error('Error loading courses:', error));
});

function markdownToHtmlTable(markdown) {
    const lines = markdown.split('\n');
    let htmlTable = '<table>';

    lines.forEach((line, index) => {
        // Skip the second line (table formatting line) and non-table lines
        if (index === 1 || !line.startsWith('|')) return;

        let htmlLine = line
            .replace(/^\|/, '<tr><td>') // Replace starting pipe with table row start
            .replace(/\|$/, '</td></tr>') // Replace ending pipe with table row end
            .replace(/\|/g, '</td><td>') // Replace remaining pipes with table data separators
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>'); // Replace markdown links with HTML links

        // Add header tags for the first row
        if (index === 0) {
            htmlLine = htmlLine.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
        }

        htmlTable += htmlLine;
    });

    htmlTable += '</table>';
    return htmlTable;
}
