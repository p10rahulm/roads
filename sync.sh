# Type the command "cmd < sync.sh"
# Preliminary Checks:
# 1. Ensure "gcloud auth login" is already done
# 2. Ensure that you are on the IISc CISCO VPN


# Now Git changes
git add -A
git commit -m "added paper link"
git push

# Now attempt to directly update website through SSH
# Ensure local computer's ssh credentials are added to remote machine's ~/.ssh/authorized_keys
echo "updating https://events.csa.iisc.ac.in/algorithmic-fairness-2023/"
ssh -t algo@csacloud.iisc.ac.in -p 3232 "./syncroads.sh"
echo "Please check that the website http://algo.csa.iisc.ac.in/"
echo "and https://algo.csa.iisc.ac.in/ are updated"
# exit
