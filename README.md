# 🎶 문화 정보 제공 서비스 


- 배포 URL : [artgarden](https://artgarden.co.kr/ ) 

<br>

## 프로젝트 개요:
Artgarden은 사람들이 **더 적극적인 여가 생활**을 즐길 수 있도록 지원하는 서비스입니다. 초기에는 **공연** 정보
제공을 목표로 시작했으며, 현재는 **전시회**와 **팝업스토어** 등 다양한 문화 이벤트 정보를 종합적으로 제공하는
플랫폼으로 확장했습니다.

## 주요 기능:
- **로그인**을 통해 개인화된 서비스를 제공하며, 사용자는 **공연 정보를 확인**하고, **찜 페이지**에서 관심 있는
이벤트를 저장할 수 있습니다.
- 메인 페이지, 전체 페이지, 상세 페이지 등 **다양한 깊이의 정보 탐색을 지원**하여 사용자가 필요한 정보를
원하는 만큼 얻을 수 있도록 설계되었습니다
<br>

## 🙉팀원 소개

<div align="center">

|            [이유정 FE](https://github.com/FordangIT)            |           [이창훈 BE](https://github.com/ChangHoon97)            |
| :-------------------------------------------------------------: | :--------------------------------------------------------------: |
|                      역할: FE                   |                      역할: BE                    |
|                      fordang0819@gmail.com                      |                       hyo040441@gmail.com                        |
| ![이유정](https://avatars.githubusercontent.com/u/93567754?v=4) | ![이창훈](https://avatars.githubusercontent.com/u/118735836?v=4) |

</div>

<br>

## 1. 진행과정 

### 개발 기간

- 2023-11-01 ~ 진행중
 
<br>

### 작업 관리

- **Jira 툴**을 활용하여 프로젝트의 전체적인 계획과 일정을 체계적으로 관리했습니다. 이를 통해 팀원들은
각자의 **진행 상황을 쉽게 파악**할 수 있었고, **Git과의 연동**을 통해 특정 작업이 어떤 코드와 연결되어 있는지도
명확히 확인할 수 있었습니다.

<br>

### 협업 
- 프론트엔드와 백엔드라는 서로 다른 분야였지만, 문제 발생 시 적극적으로 의견을 주고받았습니다. 각자
자신의 분야를 넘어 필요한 정보를 공유하며, 서로의 작업에 피드백을 주고받는 과정을 통해 협업의 질을
높였습니다. 이를 통해 서비스의 전체적인 흐름을 모두가 이해하고, 각자의 작업이 서비스에 미치는 영향을
놓치지 않을 수 있었습니다.

<br>

## 2. 기술 스택 
![image](https://github.com/FordangIT/Artgarden/assets/93567754/e7d3e996-3b64-4c3d-aae8-4168993a9ae6)

<br>


## 3. 프로젝트 구조 (2024년 8월 12일 update)


<br>


## 4. 페이지별 기능

### [Main page]

| 반응형 |
|----------|
|<img src="https://github.com/user-attachments/assets/4375d23c-c3b9-4222-8738-387e9072f245" width="250px" height="500px">|

<br>

| 캐러셀 |
|----------|
|<img src="https://github.com/user-attachments/assets/2c8541e2-695a-4e32-af72-bf6800764db8" width="600px" height="300px">|

<br>

| Top Picks |
|----------|
|<img src="https://github.com/user-attachments/assets/fd56a7ab-4ae6-4a52-9216-71a1e963bc65" width="500px" height="200px">|

<br>

| New Arrivals |
|----------|
|<img src="https://github.com/user-attachments/assets/d6d9db8e-8745-49e5-a95f-885a67982b32" width="500px" height="200px">|

<br>


| Reviews |
|----------|
|<img src="https://github.com/user-attachments/assets/fc529382-a4ea-49af-b989-bd1e8ef4e928" width="500px" height="250px">|

<br>



### [로그인]

- 회원가입을 통한 일반 로그인이 가능합니다.
- 소셜 로그인 (카카오, 구글)이 가능합니다.
  

| 회원가입 |
|----------|
|<img src="https://github.com/user-attachments/assets/e5e379dd-b12e-4e24-8e4d-b6b81d04daf7" width="500px" height="250px">|

<br>

| 일반 로그인 |
|----------|
|<img src="https://github.com/user-attachments/assets/474089f5-1d23-4cc1-971c-cbd17d80b58b" width="500px" height="250px">|

<br>

| 소셜 로그인 |
|----------|
|<img src="https://github.com/user-attachments/assets/0165a9da-61fb-47c2-b3cd-7c8a3e8b5834" width="500px" height="250px">|

- 소셜 로그인은 NextAuth로 구현했습니다.
- 사용자가 소셜로그인을 할 경우 백엔드한테 사용자의 정보를 post 합니다. 
<br>



### [전체 페이지]



| 무한 스크롤 |
|----------|
|<img src="https://github.com/user-attachments/assets/692af0dc-8e74-4b59-95b0-8580f618978a"  width="500px" height="250px">|


<br>
| 조건 검색 |
|----------|
| <img src=" https://github.com/user-attachments/assets/6b58bba9-a699-49e2-a820-105189da795f"  width="500px" height="250px">|

<br>

| 초성 검색 |
|----------|
|<img src="https://github.com/user-attachments/assets/fa061275-d722-4db7-83a1-47fadf40a6e4"  width="500px" height="250px">|


<br>


### [상세 페이지]

  
| 자세한 정보 |
|----------|
|<img src="https://github.com/user-attachments/assets/89c40875-accb-44c3-a4b4-18be89d76eb4"  width="500px" height="250px">|
|

<br>

| 카카오톡 공유하기 |
|----------|
|<img src="https://github.com/user-attachments/assets/028be251-f8a6-4664-8895-c6f8af56bb65"  width="500px" height="250px">|

<br>

| 리뷰 CRUD |
|----------|
|<img src="https://github.com/user-attachments/assets/678276dd-6880-4d9e-8779-d017404964ba"  width="500px" height="250px">|

<br>


### [찜 페이지]



| 로그인 사용자 |
|----------|
|<img src="https://github.com/user-attachments/assets/c7d95b86-fff7-4056-a98f-5baca1f0091e"  width="500px" height="250px">|

<br>

| 비로그인 사용자 |
|----------|
|<img src="https://github.com/user-attachments/assets/0aecd601-548d-4761-96be-7d7ec9a9a441"  width="500px" height="250px">|

<br>



### [마이 페이지]



| 마이페이지 |
|----------|
|<img src="https://github.com/user-attachments/assets/caf82350-3937-411c-a88a-b205f020bd89" width="500px" height="250px">|

<br>


