# Type the command "cmd < synchronizeCloudLinux.sh"
# Preliminary Checks:
# 1. Ensure "gcloud auth login" is already done
# 2. Ensure that you are on the IISc CISCO VPN

gsutil -m rsync -r assets gs://www.algorithmicfairness.site/assets
echo "Assets Directory Synced"

gsutil -m rsync -r assets gs://www.algorithmicfairness.site/content
echo "Contents Directory Synced"
gsutil -m rsync ./ gs://www.algorithmicfairness.site
# gsutil cp index.html gs://www.algorithmicfairness.site/content
echo "Base Directory Synced"


# Now Git changes
git add -A
git commit -m "content changes"
git push

# Now attempt to directly update website through SSH
# Ensure local computer's ssh credentials are added to remote machine's ~/.ssh/authorized_keys
echo "updating https://events.csa.iisc.ac.in/algorithmic-fairness-2023/"
ssh -t events@csacloud.iisc.ac.in -p 3232 "./syncAlgFairness.sh"
echo "Please check that the website http://www.algorithmicfairness.site/"
echo "and https://events.csa.iisc.ac.in/algorithmic-fairness-2023/ are updated"
# exit
