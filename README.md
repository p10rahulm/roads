
# Project Documentation

## Overview

This repository contains the website project for showcasing a collection of academic papers and information about 
people involved in the research lab. The content is dynamically loaded and managed through the `content` folder, and updates are synchronized to the live website via a script.

## Content Structure

- `content/`: Contains all the editable content for the website.
    - `courses/`: Contains a single file to update the current and past courses.
    - `awards_grants/`: Contains files to list the grants, industry projects faculty awards, and student awards.
    - `front_page/`: Contains files to list the `research_directions` and `focus_points`.
    - `news/`: Contains a single file to update the current news.
    - `papers/`: Holds the markdown files for each academic paper.
    - `people/`: Contains markdown files for individual profiles.

## Getting Started

To get started use the following commands.
1. `python -m venv venv` to create an environment called venv
2. `venv/scripts/activate` to activate venv on windows or `source myenv/bin/activate` on linux installations.
3. `pip install -r requirements.txt` to install the required project packages on your environment.


## Updating the website

To make updates or modifications to the website, follow these steps:
1. Change the content in the website in the specific folder as provided in the `Content Structure` section above.
2. Ensure you are on the IISc VPN
3. Ensure your public key is loaded on the authorized_keys in the `.ssh` folder for `algo@csacloud.iisc.ac.in:3232`
4. Run `./sync.sh`.
5. Verify that the content at https://algo.csa.iisc.ac.in/ is updated.



### Editing Content

1. **Papers**: To add or update papers, edit the markdown files in `content/papers/`. Each paper should have its own markdown file.

2. **People**: To add or modify information about lab members, edit the markdown files in `content/people/`. Each person should have their individual markdown file.

### Synchronizing Changes

After making your changes in the `content` folder:

1. Run the synchronization script to update the website:

   ```bash
   ./sync.sh
   ```

   This script processes the markdown files and updates the website accordingly.

## Development

For local development, you can modify the content in the `content` folder and use the provided script to synchronize changes.

### Prerequisites

Ensure you have the necessary permissions and tools to execute the `sync.sh` script on your system.

## Contributing

Contributions to the project are welcome. Please follow the standard procedures for contributing to repositories (forking, creating a feature branch, submitting pull requests).

## License

[Add License Information Here]

---

Feel free to modify and enhance this `README.md` as per the specifics and additional details of your project.