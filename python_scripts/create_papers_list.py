import os
import time
import re

def write_files_to_files_list(directory = 'content/papers/', output_file_path = 'content/papers/papers_list.txt'):
    file_paths=[]
    for root, dirs, files in os.walk(directory):
        for name in files:
            if name.endswith('.md'):
                file_path = os.path.join(root, name).replace('\\', '/')
                file_paths.append(file_path)

    # Sort the file paths by the filename
    sorted_file_paths = sorted(file_paths, key=lambda x: x.split('/')[-1])

    # Categorize by Entry Type
    articles = {}
    conferences = {}
    article_num = 1
    conference_num = 1

    for file_path in sorted_file_paths:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            entry_type_match = re.search(r'entrytype = "(.*?)"', content)
            if entry_type_match:
                entry_type = entry_type_match.group(1)
                if entry_type == "article":
                    articles[file_path] = article_num
                    # articles.append((article_num,file_path, entry_type))
                    article_num+=1
                elif entry_type == "conference":
                    # conferences.append((conference_num,file_path, entry_type))
                    conferences[file_path] = conference_num
                    conference_num+=1
    output_lines = []
    for file_path in sorted_file_paths:
        if file_path in conferences:
            output_lines.append("C" + str(conferences[file_path]) + " | " + file_path)
        elif file_path in articles:
            output_lines.append("J" + str(articles[file_path]) + " | " + file_path)
    # reverse output lines
    output_lines= output_lines[::-1]
    with open(output_file_path, 'w') as output_file:
     for line in output_lines:
        output_file.write(line + '\n')



if __name__=="__main__":
    start_time=time.time()
    write_files_to_files_list(directory = 'content/papers/', output_file_path = 'content/papers/papers_list.txt')

    print("File list created successfully.")
    print("time taken = %d seconds"%(time.time()-start_time))