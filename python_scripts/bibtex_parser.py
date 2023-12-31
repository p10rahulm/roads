import bibtexparser
from datetime import datetime
import time
import re



# Function to format the date
def format_date(timestamp):
    date = datetime.strptime(timestamp, '%a, %d %b %Y %H:%M:%S %z')
    return date.strftime('%Y-%m')

def format_month(timestamp):
    date = datetime.strptime(timestamp, '%a, %d %b %Y %H:%M:%S %z')
    return date.strftime('%m')

def format_date_for_filename(timestamp):
    date = datetime.strptime(timestamp, '%a, %d %b %Y %H:%M:%S %z')
    return date.strftime('%Y%m')

def format_title_for_filename(title):
    parsed_title = re.sub(r'[^A-Za-z0-9]', '', title).lower()
    # parsed_title = title.lower().replace(' ', '').replace(' \n', '')
    return parsed_title[:12]+parsed_title[-12:]

def format_apa_style(entry):
    journal = entry.get('journal', '').replace('\n', ' ')
    volume = entry.get('volume', '').replace('\n', ' ')
    year = entry.get('year', '').replace('\n', ' ')
    url = entry.get('url', '').replace('\n', ' ')
    return f"{journal}, {volume}, {year}, url: <a href='{url}' target='_blank'>{url}</a>."


def format_conference_apa_style(entry):
    booktitle_initial = entry.get('booktitle', '').replace('\n', ' ')
    booktitle_cleaned = re.sub(r'[{}]', '', booktitle_initial)
    # Split the string at commas and take the first two parts
    booktitle_parts = booktitle_cleaned.split(',', 2)[:2]
    # Combine the parts to get the text up to the second comma
    booktitle = ', '.join(booktitle_parts).strip()

    year = entry.get('year', '').replace('\n', ' ')
    pages = entry.get('pages', '').replace('\n', ' ')
    publisher = entry.get('publisher', '').replace('\n', ' ')
    url = entry.get('url', '').replace('\n', ' ')
    return f"{booktitle}"
    # return f"({year}). In {booktitle} (pp. {pages}). {publisher}, url: <a href='{url}' target='_blank'>{url}</a>."


def parse_bibtex_as_markdown_files(input_file_path='content/papers/siddharth.bib',output_file_path="outputs/siddharth/"):
    # Read the .bib file
    with open(input_file_path) as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)

    # Process each entry
    for entry in bib_database.entries:
        title = entry.get('title', '').replace('\n', ' ')
        authors = entry.get('author', '').replace('\n', ' ').replace(' and ', ', ')
        paper_link = entry.get('url', '').replace('\n', ' ')
        entry_type= 'conference'
        # Decide the format based on entry type
        if entry['ENTRYTYPE'] == 'article':
            # Format publication details in APA style
            publication_details = format_apa_style(entry)
            entry_type= 'article'
        elif entry['ENTRYTYPE'] == 'inproceedings':
            publication_details = format_conference_apa_style(entry)


        timestamp = entry.get('timestamp', ' ')
        conference_date = entry.get('year')
        conference_month = format_month(timestamp)
        conference_year = entry.get('year')

        # file_name_prefix = format_date_for_filename(timestamp) + "_"
        file_name_prefix = conference_year + conference_month + "_"
        file_name_title_postfix =format_title_for_filename(title)
        # Create and write to a new file
        file_name = f"{output_file_path}{file_name_prefix}{file_name_title_postfix}.md"
        with open(file_name, 'w') as file:
            file.write(f"+++\ntitle = \"{title}\"\nauthors = \"{authors}\"\npaper_link = \"{paper_link}\"\n")
            file.write(f"entrytype = \"{entry_type}\"\n")
            file.write(
                f"publication_details = \"{publication_details}\"\nconference_date = \"{conference_date}\"\nnotes = \"\"\n+++\n\n<b>Abstract:</b>\n")

    print("Files created successfully.")

if __name__=="__main__":
    start_time=time.time()
    people_list_to_parse = ['anand','arindam','rahul','siddharth']
    for person in people_list_to_parse:
        input_file_path =  'content/papers/'+ person + '.bib'
        output_file_path =  'content/papers/'+ person + '/'
        parse_bibtex_as_markdown_files(input_file_path=input_file_path,
                                       output_file_path=output_file_path)


    print("time taken = %d seconds"%(time.time()-start_time))