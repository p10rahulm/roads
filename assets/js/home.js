// Load the recent news
fetch('content/recent_news/recent_news.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const listItems = lines.map(line => line.trim() ? `<li>${line}</li>` : '').join('');
        document.getElementById('news-content').innerHTML = `<ul>${listItems}</ul>`;
    })
    .catch(error => console.error('Error loading news:', error));
