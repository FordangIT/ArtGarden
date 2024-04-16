REPOSITORY=/home/ubuntu

cd $REPOSITORY

# pm2 명령어의 경로를 설정
if ! command -v pm2 &> /dev/null
then
    # pm2 명령어를 찾을 수 없는 경우, 적절한 경로로 심볼릭 링크 설정
    if command -v npm &> /dev/null
    then
        PM2_PATH=$(npm prefix -g)/bin/pm2
        if [ -f "$PM2_PATH" ]; then
            sudo ln -sf $PM2_PATH /usr/local/bin/pm2
        else
            echo "Error: pm2 not found in npm global bin directory."
        fi
    else
        echo "Error: npm not found. Please make sure npm is installed."
    fi
fi

# npm run deploy 명령어 실행
npm run deploy
