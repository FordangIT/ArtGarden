# Artgarden 
: 🎶 문화 정보 제공 서비스 

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



## 3. 페이지별 기능

### [Main page]


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>반응형</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/4375d23c-c3b9-4222-8738-387e9072f245" width="250px" height="500px">
      </td>
    </tr>
  </table>
</div>
### 1) 구현 기능

- 다양한 디바이스에 대응하기 위해 **반응형** 디자인을 구현했습니다.
  - **Nav Bar**: 화면 크기가 작아지면 기존의 네비게이션 바를 3줄 아이콘(햄버거 메뉴)으로 변경하여 사용자 인터페이스를 단순화했습니다.
  - **Side Bar**: 작은 화면 크기에서는 사이드 바가 자동으로 나타나도록 설계했습니다.
  - **유동적인 크기 조정**: 모든 요소가 다양한 화면 크기에 유동적으로 대응하도록 설계하여, 사용자 경험을 최적화했습니다.

### 2) 구현 방법

- **Tailwind CSS**: 반응형 디자인을 위해 Tailwind CSS의 유틸리티 클래스를 활용했습니다.
  - **Flex 및 Grid**: 레이아웃을 구성하는 데 `flex`와 `grid`를 사용하여 유연한 배치를 구현했습니다.
  - **미디어 쿼리**: 화면 크기에 따라 적응하도록 `sm`, `md`, `lg` 등의 미디어 쿼리 클래스를 사용하여 크기를 분류하고, 각각의 크기에 맞는 스타일을 적용했습니다.


<br>

| 캐러셀 |
|----------|
|<img src="https://github.com/user-attachments/assets/2c8541e2-695a-4e32-af72-bf6800764db8" width="600px" height="300px">|

<br>

| Top Picks |
|----------|
|<img src="https://github.com/user-attachments/assets/66c9f892-fb08-4e0e-b4e7-e90f822656b0" width="600px" height="300px">|

<br>

| New Arrivals |
|----------|
|<img src="https://github.com/user-attachments/assets/df1c61fd-fb1a-4349-9210-e9a80040275e" width="600px" height="300px">|

<br>


| Reviews |
|----------|
|<img src="https://github.com/user-attachments/assets/74b78085-d967-47b3-ba4c-9b959cfb9309" width="600px" height="300px">|

<br>



### [로그인]

- 회원가입을 통한 일반 로그인이 가능합니다.
- 소셜 로그인 (카카오, 구글)이 가능합니다.

| 회원가입 |
|----------|
|<img src="https://github.com/user-attachments/assets/7821ea12-e8c9-411f-ac00-eaf4259dc8b0" width="600px" height="300px">|

<br>

| 일반 로그인 |
|----------|
|<img src="https://github.com/user-attachments/assets/a0784f36-9bc1-4d8b-a847-b7760f60a8a3" width="600px" height="300px">|

<br>

| 소셜 로그인 |
|----------|
|<img src="https://github.com/user-attachments/assets/5131858a-5fbc-4754-95b2-8c8e61fdb674" width="600px" height="300px">|

- 소셜 로그인은 NextAuth로 구현했습니다.
- 사용자가 소셜로그인을 할 경우 백엔드한테 사용자의 정보를 post 합니다. 
<br>



### [전체 페이지]

| 무한 스크롤 |
|----------|
|<img src="https://github.com/user-attachments/assets/46cd82e0-cd8b-4a81-8685-0cc5d0de5373"  width="600px" height="300px">|

<br>

| 조건 검색 |
|----------|
| <img src="https://github.com/user-attachments/assets/a7fff1ee-2626-4b93-887d-48da13460e4c"  width="600px" height="300px">|

<br>

| 초성 검색 |
|----------|
|<img src="https://github.com/user-attachments/assets/13615917-bbe1-42fe-94a0-1d42b9c7492a"  width="600px" height="300px">|


<br>


### [상세 페이지]

| 자세한 정보 |
|----------|
|<img src="https://github.com/user-attachments/assets/ebba410d-566f-46e3-8657-3ee24750ecfe"  width="600px" height="300px">|


<br>

| 카카오톡 공유하기 |
|----------|
|<img src="https://github.com/user-attachments/assets/0408fb18-496f-4bd0-96ea-464fde9a6bd0"  width="600px" height="300px">|

<br>

| 리뷰 CRUD |
|----------|
|<img src="https://github.com/user-attachments/assets/38bae08f-78a9-444c-871f-3980abd876ad"  width="600px" height="300px">|

<br>


### [찜 페이지]


| 로그인 사용자 |
|----------|
|<img src="https://github.com/user-attachments/assets/5dcb7500-a838-477b-9856-7158597fb077"  width="600px" height="300px">|

<br>

| 비로그인 사용자 |
|----------|
|<img src="https://github.com/user-attachments/assets/e5b95ab0-a3e9-474e-bf95-578cad17953d"  width="600px" height="300px">|

<br>



### [마이 페이지]


| 마이페이지 |
|----------|
|<img src="https://github.com/user-attachments/assets/f9123b5e-8da7-4f85-b167-8e568f9a5a3d" width="600px" height="300px">|

<br>


## 4. 프로젝트 구조 (2024년 8월 12일 update)
```
📦components
 ┣ 📂basic
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜Navbar.tsx
 ┃ ┣ 📜Sidebar.tsx
 ┃ ┗ 📜Smallbar.tsx
 ┣ 📂exhibitions
 ┃ ┣ 📜AllExhibitions.tsx
 ┃ ┗ 📜ConditionEx.tsx
 ┣ 📂favorites
 ┃ ┣ 📜LoggedInFavorites.tsx
 ┃ ┗ 📜LoggedOutFavorites.tsx
 ┣ 📂main
 ┃ ┣ 📜BestProducts.tsx
 ┃ ┣ 📜MainBanner.tsx
 ┃ ┣ 📜MainCarousel.tsx
 ┃ ┣ 📜NewProducts.tsx
 ┃ ┣ 📜Reviews.tsx
 ┃ ┗ 📜TempReviews.tsx
 ┣ 📂mypage
 ┣ 📂performances
 ┃ ┣ 📜AllPerformances.tsx
 ┃ ┗ 📜Condition.tsx
 ┣ 📂popupstores
 ┃ ┗ 📜AllPopupStores.tsx
 ┗ 📂reviews
 ┃ ┣ 📜CreateReviewForm.tsx
 ┃ ┣ 📜DeleteReviewButton.tsx
 ┃ ┣ 📜DetailReview.tsx
 ┃ ┣ 📜DetailSection.tsx
 ┃ ┗ 📜ReviewList.tsx

📦lib
 ┣ 📂api
 ┃ ┣ 📜datailpage.tsx
 ┃ ┣ 📜loadData.tsx
 ┃ ┣ 📜mypage.tsx
 ┃ ┣ 📜reviews.tsx
 ┃ ┣ 📜scrap.tsx
 ┃ ┗ 📜userSign.tsx
 ┣ 📂components
 ┃ ┣ 📜FavoriteButton.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┣ 📜NosaveItems.tsx
 ┃ ┣ 📜ShareKakaoButton.tsx
 ┃ ┗ 📜TruncateText.tsx
 ┣ 📂constants
 ┃ ┗ 📜constant.ts
 ┣ 📂hooks
 ┃ ┗ 📜useObserver.tsx
 ┗ 📂utils
 ┃ ┣ 📜anchore.tsx
 ┃ ┣ 📜auth.tsx
 ┃ ┣ 📜db.tsx
 ┃ ┗ 📜mongodb.ts

 📦pages
 ┣ 📂api
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜[...nextauth].tsx
 ┃ ┃ ┗ 📜signup.tsx
 ┃ ┣ 📂exhibitions
 ┃ ┃ ┣ 📜best.tsx
 ┃ ┃ ┗ 📜new.tsx
 ┃ ┣ 📂performances
 ┃ ┃ ┣ 📜[productId].tsx
 ┃ ┃ ┣ 📜best.tsx
 ┃ ┃ ┗ 📜new.tsx
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📜saveitems.tsx
 ┃ ┃ ┗ 📜saveitemsPop.tsx
 ┣ 📂auth
 ┃ ┣ 📜signin.tsx
 ┃ ┗ 📜signup.tsx
 ┣ 📂exhibitions
 ┃ ┣ 📜[exhibitId].tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂performances
 ┃ ┣ 📜[id].tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂popupstores
 ┃ ┣ 📜[id].tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂user
 ┃ ┣ 📜mypage.tsx
 ┃ ┗ 📜saveitems.tsx
 ┣ 📜404.tsx
 ┣ 📜_app.tsx
 ┣ 📜_document.tsx
 ┗ 📜index.tsx
```
