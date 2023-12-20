# In this file we will setup the sync
cd roads
git pull origin main
echo 'fetched latest files from git'
cp index.html /var/www/algo/index.html
cp papers.html /var/www/algo/papers.html
cp people.html /var/www/algo/people.html
# cp ./* /var/www/events/algorithmic-fairness-2023/
echo 'index file copied from base directory to hosting directory'
cp -R ./assets /var/www/algo/
echo 'copied files in assets directory'
cp -R ./content /var/www/algo/
echo 'copied files in content directory'