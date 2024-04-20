#!/bin/bash

REPOSITORY=/home/ubuntu/artgarden

cd $REPOSITORY

# npm 설치
sudo npm install

# pm2 프로세스 체크
pm2 describe artgarden > /dev/null
if [ $? -eq 0 ]; then
    # 실행 중인 경우
    echo "artgarden 프로세스가 이미 실행 중입니다."
    pm2 reload artgarden
else
    # 실행 중이 아닌 경우
    echo "artgarden 프로세스가 실행되지 않았습니다."
    pm2 start --interpreter none npm --name "artgarden" -- start
fi
