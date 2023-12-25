
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
    // Split the markdown text into lines
    const lines = markdown.split('\n');

    // Start the HTML table
    let htmlTable = '<table>';

    // Process each line
    lines.forEach((line, index) => {
        if (line.startsWith('|')) {
            // Replace markdown table syntax with HTML table syntax
            const htmlLine = line
                .replace(/^\|/, '<tr><td>') // Replace starting pipe with table row start
                .replace(/\|$/, '</td></tr>') // Replace ending pipe with table row end
                .replace(/\|/g, '</td><td>'); // Replace remaining pipes with table data separators

            // Add header tags for the first row
            if (index === 1) {
                htmlTable += htmlLine.replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
            } else {
                htmlTable += htmlLine;
            }
        }
    });

    // Close the HTML table
    htmlTable += '</table>';

    return htmlTable;
}
