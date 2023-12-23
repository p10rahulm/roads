import requests
import time

def download_and_save_bib_files(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            # Splitting the line to get filename and URL
            filename, url = line.strip().split(' || ')
            # Download the content
            response = requests.get(url)
            if response.status_code == 200:
                # Save the content to a file
                with open('content/papers/' + filename, 'w', encoding='utf-8') as bib_file:
                    bib_file.write(response.text)
            else:
                print(f"Failed to download {url}")


if __name__=="__main__":
    start_time=time.time()
    download_and_save_bib_files('content/papers/list_of_dblp_links.txt')

    print("Bibtex files downloaded successfully.")
    print("time taken = %d seconds"%(time.time()-start_time))