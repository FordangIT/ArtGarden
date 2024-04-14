#!/bin/bash

REPOSITORY_PROD=/home/ubuntu

echo "DEPLOYMENT_GROUP_NAME: ${DEPLOYMENT_GROUP_NAME}"

if [ "${DEPLOYMENT_GROUP_NAME}" == "artgardenfordeploygroup" ]; then
  echo "운영 서버 배포"
  cd "${REPOSITORY_PROD}"
  
  sudo npm install
  pm2 describe artgarden > /dev/null
  if [ $? -eq 0 ]; then
	  # 실행 중인 경우
	  echo "artgarden 프로세스가 실행 중입니다."
	  sudo npm run pm2:reload:prod
  else
  	# 실행 중이 아닌 경우
  	echo "til-product 프로세스가 실행되지 않았습니다."
	  sudo npm run pm2:start:prod
  fi
fi