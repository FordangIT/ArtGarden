# 👋 Artgarden
<p align='center'>
  <img src='https://github.com/FordangIT/Artgarden/assets/93567754/403980c0-0a52-4f8d-a6cc-412256910b67'/>
</p>

## 🙉 프로젝트 소개 
### 개발 기간: 2024.02.01 ~ 진행중 
### 기획 의도
모든 것이 디지털화 되어있는 시대, 더 많은 사람들이 **풍요로운 여가시간**을 보냈으면 좋겠다는 생각에서 기획하게 되었습니다. 
</br>
사용자에게 **트렌디한 공연/전시/팝업스토어 정보**를 제공함으로써 **사용자가 손쉽게 정보에 접근**하는 웹사이트를 구현중입니다. 
###  
### 배포 주소 
| **프론트 주소** https://artgarden.co.kr (현재 서버 에러) 
</br>
| **벡엔드 주소** https://artgarden.site (외부인 접근 제한)
### 팀원 소개 
|                               [이유정 FE](https://github.com/FordangIT)                                |                                [이창훈 BE](https://github.com/ChangHoon97)                               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                       fordang0819@gmail.com                                        |                                      hyo040441@gmail.com                                   |                              
|  ![이유정](https://avatars.githubusercontent.com/u/93567754?v=4)  |  ![이창훈](https://avatars.githubusercontent.com/u/118735836?v=4)


### 현재 진행상황 (2024/04/08 UPDATE)
![image](https://github.com/FordangIT/Artgarden/assets/93567754/0b28ff0e-ff95-40c3-b461-27efd48bcad8)

## 🙉 목차 
  - 📍 시작 가이드
  - 📍 Stacks
  - 📍 화면 구성
  - 📍 주요 기능
  - 📍 아키텍처
  - 📍 GIT CONVENTION
## 🙉 시작 가이드
### Requirements
- Node.js 
- Npm 
### Installation
Use the package manager [npm](https://www.npmjs.com/) to install Artgarden.
```bash
npm install
```

## 🙉 stacks
- Next.js
- TypeScript
- TailwindCSS
- React-query
- ReduxToolkit
- AWS
- Github-Actions
- Jira



## 🙉 화면 구성 
|                               메인페이지                           |                               메인페이지               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                      navbar 및 메인캐러셀                                  |                                     Best 공연정보                          |                              
|  ![Screenshot from 2024-04-07 21-22-43](https://github.com/FordangIT/Artgarden/assets/93567754/3084abc2-194e-4ab4-8c38-792072d11581)  |  ![Screenshot from 2024-04-07 21-22-56](https://github.com/FordangIT/Artgarden/assets/93567754/89c3c76a-b835-4bb9-b3a3-004b2c567ecf)

|                               메인페이지                           |                               메인페이지               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                      Best 공연정보 반응형                                 |                                     Best 공연정보 스켈레톤 UI                         |                              
| ![Screenshot from 2024-04-07 23-21-44](https://github.com/FordangIT/Artgarden/assets/93567754/dace54d4-712e-42e4-b9dc-a6a9e7841e34) |  ![Screenshot from 2024-04-07 23-22-31](https://github.com/FordangIT/Artgarden/assets/93567754/f91d1444-4fe3-41bb-9669-d3bd1e420e88)

|                               메인페이지                           |                               전체페이지               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                     New 공연정보                                |                                     검색 기능 및 무한스크롤                          |                              
| ![Screenshot from 2024-04-07 23-22-58](https://github.com/FordangIT/Artgarden/assets/93567754/0524c87c-ecb0-4032-8711-f317a026a32c) |  ![Screenshot from 2024-04-07 23-26-09](https://github.com/FordangIT/Artgarden/assets/93567754/cdb43b5f-b9cc-4185-adc5-bb6f64ec93c5)



## 🙉 주요 기능 
| 기능                | 설명                                                            |
|---------------------|-----------------------------------------------------------------|
| 공연 정보 제공 1. | Next.js api 활용한 공연 정보를 메인페이지에서 제공하고 있습니다.   |
| 공연 정보 제공 2. | 전체 공연 정보를 무한스크롤 기능과 검색기능을 통해 사용자는 손쉽게 데이터에 접근할 수 있습니다.  |

## 🙉 아키텍처 
### 디렉터리 구조 
```
artgarden
├─ components
│  ├─ basic
│  │  ├─ Footer.tsx
│  │  ├─ Layout.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ ReadyBest.tsx
│  │  ├─ ReadyNew.tsx
│  │  ├─ SkeletonBest.tsx
│  │  └─ SkeletonNew.tsx
│  ├─ exhibitions
│  ├─ main
│  │  ├─ BestProducts.tsx
│  │  ├─ MainCarousel.tsx
│  │  ├─ NewProducts.tsx
│  │  └─ Reviews.tsx
│  ├─ performances
│  │  ├─ AllPerformances.tsx
│  │  ├─ CreateReview.tsx
│  │  └─ SearchCondition.tsx
│  └─ popupstores
├─ customHook
│  └─ useObserver.tsx
├─ data
│  └─ dummy-backend.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ api
│  │  ├─ exhibitions
│  │  │  ├─ best.tsx
│  │  │  └─ new.tsx
│  │  ├─ hello.ts
│  │  └─ performances
│  │     ├─ [productId].tsx
│  │     ├─ all
│  │     │  └─ [cpage].tsx
│  │     ├─ best.tsx
│  │     ├─ every.tsx
│  │     └─ new.tsx
│  ├─ exhibitions
│  │  └─ index.tsx
│  ├─ index.tsx
│  ├─ performances
│  │  ├─ [id].tsx
│  │  └─ index.tsx
│  └─ popupstores
│     └─ index.tsx
├─ postcss.config.js
├─ public
│  ├─ artgarden.png
│  ├─ hotstuff.gif
│  ├─ insta.gif
│  ├─ logo.png
│  └─ updates.gif
├─ redux
│  ├─ slices
│  │  └─ selectSlice.tsx
│  └─ store.tsx
├─ styles
│  └─ globals.css
├─ tailwind.config.ts
└─ tsconfig.json
```

## 🙉 git convention
```
Feat : 새로운 기능을 추가하는 경우
Fix : 버그를 고친경우
Docs : 문서를 수정한 경우
Style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
Refactor : 코드 리펙토링
Test : 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
Chore : 빌드 업무 수정, 패키지 매니저 수정
Design : CSS 등 사용자가 UI 디자인을 변경했을 때
Rename : 파일명(or 폴더명) 을 수정한 경우
Remove : 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함
Replace: 파일의 장소를 변경함
```
