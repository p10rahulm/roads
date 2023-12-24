from bs4 import BeautifulSoup
import markdown
import time

def convert_md_to_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as md_file:
        md_content = md_file.read()
    return markdown.markdown(md_content)

def update_html_div(html_file_path, div_id, new_content):
    # Open and read the HTML file
    with open(html_file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find the div with the specified id
    target_div = soup.find('div', id=div_id)
    if target_div:
        target_div.clear()  # Clear existing content
        target_div.append(BeautifulSoup(new_content, 'html.parser'))  # Insert new content
    else:
        print(f"No div found with id {div_id}")

    # Beautify (format) the HTML content
    formatted_html = soup.prettify()

    # Write the updated HTML back to the file
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(formatted_html)



if __name__=="__main__":
    start_time=time.time()

    html_content = convert_md_to_html('content/intro.md')
    update_html_div('index.html', 'intro-content', html_content)

    print("Homepage updated successfully.")
    print("time taken = %d seconds"%(time.time()-start_time))

