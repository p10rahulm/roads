# Type the command "cmd < sync.sh"
# Preliminary Checks:
# 1. Ensure "gcloud auth login" is already done
# 2. Ensure that you are on the IISc CISCO VPN

# Run the appropriate python scripts
python python_scripts/download_bibs_from_dblp.py
python python_scripts/bibtex_parser.py
python python_scripts/create_papers_list.py
python python_scripts/parse_intro_in_homepage.py

# Now Git changes
git add -A
git commit -m "Changed sync file, and changes to home page parsing."
git push

# Now attempt to directly update website through SSH
# Ensure local computer's ssh credentials are added to remote machine's ~/.ssh/authorized_keys
echo "updating https://algo.csa.iisc.ac.in/"
ssh -t algo@csacloud.iisc.ac.in -p 3232 "./syncroads.sh"
echo "Please check that the website http://algo.csa.iisc.ac.in/"
echo "and https://algo.csa.iisc.ac.in/ are updated"
# exit
