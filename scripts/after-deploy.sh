REPOSITORY=/home/ubuntu

cd $REPOSITORY

sudo npm install
sudo npm run build 
sudo pm2 start npm --name "artgarden" -- start