import os
import time

def write_files_to_files_list(directory = 'content/papers/', output_file = 'content/papers/papers_list.txt'):
    with open(output_file, 'w') as file_list:
        for root, dirs, files in os.walk(directory):
            for name in files:
                if name.endswith('.md'):
                    file_path = os.path.join(root, name).replace('\\', '/')
                    file_list.write(file_path + '\n')



if __name__=="__main__":
    start_time=time.time()
    write_files_to_files_list(directory = 'content/papers/', output_file = 'content/papers/papers_list.txt')

    print("File list created successfully.")
    print("time taken = %d seconds"%(time.time()-start_time))