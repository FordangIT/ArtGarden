# Artgarden

🎶 **문화 정보 제공 서비스**

**배포 URL**: [Artgarden](https://artgarden.co.kr/)

<br>

## 프로젝트 개요

Artgarden은 사용자들이 다양한 문화 활동을 쉽게 접하고 적극적인 여가 생활을 즐길 수 있도록 지원하는 종합 문화 정보 플랫폼입니다. 초기에는 공연 정보 제공을 목표로 시작했으며, 현재는 전시회, 팝업스토어 등 다양한 문화 이벤트 정보를 제공하는 서비스로 확장되었습니다.

<br>

## 주요 기능

- **개인화된 서비스 제공**: 사용자는 로그인을 통해 개인화된 서비스를 이용할 수 있으며, 자신의 관심사에 맞는 이벤트 정보를 손쉽게 확인할 수 있습니다.
- **관심 이벤트 저장**: 사용자는 찜 페이지에서 관심 있는 공연, 전시회, 팝업스토어 등의 이벤트를 저장하고, 이후에 쉽게 다시 확인할 수 있습니다.
- **다양한 정보 탐색**: 메인 페이지, 전체 페이지, 상세 페이지 등 여러 페이지를 통해 다양한 깊이의 정보를 탐색할 수 있습니다. 사용자는 필요한 정보를 빠르고 쉽게 찾을 수 있도록 설계되었습니다.
- **문화 이벤트 종합 제공**: 공연뿐만 아니라 전시회, 팝업스토어 등 다양한 문화 이벤트 정보를 종합적으로 제공하여, 사용자에게 다양한 선택지를 제공합니다.

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
.
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

### 📝 1.메인 페이지 


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
  - **Nav Bar**: 화면 크기가 작아지면 기존의 네비게이션 바를 3줄 아이콘으로 변경하여 사용자 인터페이스를 단순화했습니다.
  - **Side Bar**: 작은 화면 크기에서는 사이드 바로 다른 페이지로 접근할 수 있도록 설계했습니다.
  - **유동적인 크기 조정**: 모든 요소가 다양한 화면 크기에 유동적으로 대응하도록 설계하여, 사용자 경험을 최적화했습니다.

### 2) 구현 방법

- **Tailwind CSS**: 반응형 디자인을 위해 Tailwind CSS의 유틸리티 클래스를 활용했습니다.
  - **Flex 및 Grid**: 레이아웃을 구성하는 데 `flex`와 `grid`를 사용하여 유연한 배치를 구현했습니다.
  - **미디어 쿼리**: 화면 크기에 따라 적응하도록 `sm`, `md`, `lg` 등의 미디어 쿼리 클래스를 사용하여 크기를 분류하고, 각각의 크기에 맞는 스타일을 적용했습니다.


<br>

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>캐러셀</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/2c8541e2-695a-4e32-af72-bf6800764db8" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

### 1) 구현 기능

- **메인 배너 슬라이드**: 데이터를 받아 메인 배너를 슬라이드 형태로 표시합니다.
  - **자동 슬라이딩**: 슬라이드가 2초마다 자동으로 전환되며, 사용자가 상호작용해도 자동 슬라이딩이 계속됩니다.
  - **반응형 디자인**: 화면 크기에 따라 슬라이드 개수와 그룹이 동적으로 조정됩니다.
  - **이미지 및 정보 표시**: 배너에는 이미지, 이름, 지역, 기간 등의 정보가 표시됩니다.

### 2) 구현 방법

- **Swiper 라이브러리 사용**: `Swiper`와 `SwiperSlide` 컴포넌트를 사용하여 슬라이드 기능을 구현했습니다.
  - **모듈 사용**: `Keyboard`, `Scrollbar`, `Autoplay` 모듈을 활용하여 키보드 제어, 스크롤바, 자동 재생 기능을 추가했습니다.
  - **Tailwind CSS**: 배너 내 요소들의 스타일링을 위해 Tailwind CSS를 사용했습니다.
  - **이미지 처리**: Next.js의 `Image` 컴포넌트를 활용해 이미지를 최적화하고 표시합니다.
  - **반응형 설정**: `breakpoints`를 이용해 화면 크기에 따라 슬라이드의 표시 방식을 조정했습니다.

<br>


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Top Picks</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/66c9f892-fb08-4e0e-b4e7-e90f822656b0" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

<br>

### 1) 구현 기능

- **베스트 상품 목록**: 선택된 카테고리(공연, 전시, 팝업스토어)에 따라 해당 카테고리의 베스트 상품 목록을 카드 형식으로 표시합니다.
  - **상품 상세 페이지 이동**: 각 상품 카드를 클릭하면 해당 상품의 상세 페이지로 이동합니다.
  - **더 많은 상품 보기**: 목록 하단에 "더 많은 [카테고리] 보러 가기" 링크를 제공하여, 더 많은 관련 상품을 볼 수 있습니다.

### 2) 구현 방법

- **유틸리티 함수 사용**: `truncateText` 함수를 사용하여 상품 이름이 길 경우 지정된 글자 수로 잘라서 표시합니다.
- **CSS 스타일링**: Tailwind CSS를 활용하여 카드 레이아웃과 반응형 디자인을 구현하고, hover 효과를 추가해 사용자 경험을 향상시켰습니다.
- **동적 URL 생성**: 선택된 카테고리에 따라 동적으로 URL을 생성해 각 상품 상세 페이지와 "더 많은 상품 보기" 링크를 제공합니다.


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>New Arrivals</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/df1c61fd-fb1a-4349-9210-e9a80040275e" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

<br>

### 1) 구현 기능

- **신상품 슬라이드**: 선택된 카테고리(공연, 전시, 팝업스토어)에 따라 해당 카테고리의 신상품을 슬라이드 형태로 표시합니다.
  - **자동 슬라이딩**: 슬라이드가 2초마다 자동으로 전환되며, 다양한 화면 크기에 맞게 슬라이드 개수와 간격이 조정됩니다.
  - **상품 상세 페이지 이동**: 각 상품 카드를 클릭하면 해당 상품의 상세 페이지로 이동합니다.
  - **더 많은 상품 보기**: 목록 하단에 "더 많은 [카테고리] 보러 가기" 링크를 제공하여, 더 많은 관련 상품을 볼 수 있습니다.

### 2) 구현 방법

- **Swiper 라이브러리 사용**: `Swiper`와 `SwiperSlide` 컴포넌트를 사용하여 슬라이드 기능을 구현했습니다.
  - **모듈 사용**: `Navigation`, `Pagination`, `Autoplay`, `Scrollbar` 모듈을 사용하여 슬라이드 네비게이션, 자동 재생, 스크롤바 기능을 추가했습니다.
  - **반응형 슬라이드**: `breakpoints`를 사용해 화면 크기에 따라 슬라이드의 개수와 간격을 조정하여 다양한 디바이스에 최적화된 표시를 제공합니다.

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Reviews</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/74b78085-d967-47b3-ba4c-9b959cfb9309" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

<br>

### 1) 구현 기능

- **리뷰 목록 표시**: 다양한 리뷰 데이터를 카드 형태로 표시합니다. 각 카드에는 리뷰 이미지, 제목, 평점, 장르, 리뷰 내용 요약, 등록일이 포함됩니다.
  - **카드 클릭 시 상세 페이지 이동**: 각 리뷰 카드를 클릭하면 관련된 전시, 공연 등의 상세 페이지로 이동합니다.
  - **반응형 디자인**: 화면 크기에 따라 2열, 3열, 4열 레이아웃을 자동으로 조정하여 리뷰를 표시합니다.

### 2) 구현 방법

- **스타일링 및 인터랙션**: Tailwind CSS를 사용해 카드 스타일링과 hover 시 색상 변화 및 투명도 조정 등의 효과를 추가했습니다.
- **날짜 형식화**: 리뷰 등록일을 한국어 형식으로 포맷하여 표시합니다.


### 📝 2. 로그인 페이지 

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>회원가입</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/7821ea12-e8c9-411f-ac00-eaf4259dc8b0" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **회원가입 폼**: 사용자가 아이디, 비밀번호, 이름, 별명, 이메일을 입력하여 회원가입을 할 수 있는 폼을 제공합니다.
  - **아이디 중복 확인**: 사용자가 입력한 아이디의 중복 여부를 서버와 통신하여 확인합니다.
  - **실시간 입력 검증**: 입력된 값들이 유효한지 실시간으로 검증하고, 잘못된 입력에 대해 에러 메시지를 표시합니다.
  - **회원가입 요청**: 모든 입력이 유효한 경우, 서버에 회원가입 요청을 보내고, 성공 시 로그인 페이지로 이동합니다.

### 2) 구현 방법

- **React Hook Form 및 Yup 사용**: `react-hook-form`을 사용해 폼 상태를 관리하고, `yup` 라이브러리를 통해 입력값 검증을 구현했습니다.
  - **yupResolver**: `yupResolver`를 이용해 `yup` 스키마를 `react-hook-form`과 통합하여 유효성 검사를 처리합니다.
- **API 통신**: `checkLoginId` 함수로 아이디 중복 여부를 확인하고, `joinMember` 함수로 회원가입 요청을 보냅니다.
- **상태 관리**: React의 `useState`를 사용하여 아이디 중복 확인 상태를 관리합니다.
- **에러 메시지 처리**: 각 입력 필드에 대해 발생한 에러 메시지를 화면에 표시하여 사용자에게 즉각적인 피드백을 제공합니다.
- **Next.js 라우팅**: 회원가입 성공 시 `useRouter`를 사용해 로그인 페이지로 리다이렉트합니다.
- **UI 구성**: Tailwind CSS를 활용하여 폼 레이아웃과 스타일을 정의하고, 사용자 경험을 향상시키기 위한 디자인을 구현했습니다.


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>일반 로그인</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/a0784f36-9bc1-4d8b-a847-b7760f60a8a3" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **사용자 인증**: 아이디와 비밀번호를 입력받아 사용자를 인증합니다.
- **유효성 검사**: 입력된 아이디와 비밀번호의 형식을 실시간으로 검증하고, 잘못된 입력에 대해 에러 메시지를 표시합니다.
- **로그인 상태 관리**: 로그인 성공 시 Redux를 통해 전역 상태로 로그인 상태를 관리합니다.

### 2) 구현 방법

- **React Hook Form 및 Yup 사용**: `react-hook-form`과 `yup`을 사용하여 로그인 폼의 입력값을 관리하고, 유효성 검사를 수행합니다.
- **API 통신**: `loginUser` API를 호출하여 서버로 로그인 요청을 보내고, 성공 시 Redux의 `logIn` 액션을 디스패치하여 로그인 상태를 업데이트합니다.
- **Redux 사용**: Redux의 `useSelector`와 `useDispatch`를 사용해 전역 상태에서 로그인 상태를 관리합니다.
- **라우팅**: 로그인 성공 후 `useRouter`를 사용해 홈 페이지로 리다이렉트합니다.

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>소셜 로그인</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/5131858a-5fbc-4754-95b2-8c8e61fdb674" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능
- **Google 및 Kakao 계정 로그인**: 사용자는 Google 또는 Kakao 계정을 사용하여 간편하게 로그인할 수 있습니다.
- **소셜 로그인 상태 관리**: 소셜 로그인 성공 시 NextAuth를 통해 인증 세션을 관리합니다.

### 2) 구현 방법

- **NextAuth 사용**: `signIn` 함수를 사용해 Google 및 Kakao 계정으로 소셜 로그인을 구현하고, 인증 후 콜백 URL로 리다이렉트합니다.
- **이미지 처리**: Next.js의 `Image` 컴포넌트를 사용해 로그인 버튼의 아이콘 이미지를 최적화하여 표시합니다.
- **버튼 구성**: Tailwind CSS를 사용해 Google 및 Kakao 로그인 버튼의 스타일을 정의하고, 클릭 시 각각의 소셜 로그인 프로세스를 실행합니다.
- 
### 📝 3. 전체 페이지 

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>무한 스크롤</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/46cd82e0-cd8b-4a81-8685-0cc5d0de5373"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **공연 목록 무한 스크롤**: 사용자가 스크롤을 내리면 공연 목록을 무한으로 불러옵니다.

### 2) 구현 방법

- **React Query 사용**: `useInfiniteQuery`를 사용해 무한 스크롤 기능을 구현하고, API로부터 공연 데이터를 페이지 단위로 불러옵니다.
- **Intersection Observer 사용**: `useObserver` 훅을 사용해 스크롤이 페이지 하단에 도달할 때마다 다음 페이지 데이터를 요청합니다.
- **로컬 스토리지 사용**: `useLocalStorage`를 사용해 스크롤 위치를 저장하고, 페이지 리로드 시에도 이전 스크롤 위치를 유지합니다.
- **조건부 렌더링**: API 호출 상태에 따라 로딩 상태, 오류 메시지, 공연 목록을 조건부로 렌더링합니다.

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>조건 검색 </strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/a7fff1ee-2626-4b93-887d-48da13460e4c"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **상세 검색 필터**: 사용자가 공연 목록을 정렬하거나 지역별로 필터링할 수 있는 상세 검색 기능을 제공합니다.
  - **정렬 옵션**: 최신순, 조회순, 찜하기순으로 공연 목록을 정렬할 수 있습니다.
  - **지역 필터링**: 사용자는 여러 지역을 선택하여 해당 지역의 공연만을 필터링할 수 있습니다.

### 2) 구현 방법

- **React 상태 관리**: `useState`를 사용하여 모달 열림/닫힘 상태와 지역 데이터, 선택된 지역 및 정렬 옵션을 관리합니다.
- **Redux 사용**: `useSelector`와 `useDispatch`를 활용하여 전역 상태에서 선택된 지역 및 정렬 옵션을 관리하고 업데이트합니다.
- **Axios를 통한 데이터 요청**: `axios`를 사용하여 백엔드 API에서 지역 목록 데이터를 가져옵니다.
- **모달 구현**: 검색 조건을 선택할 수 있는 모달을 제공하며, 모달 열기/닫기 및 저장 동작을 제어합니다.
- **필터 적용**: 사용자가 선택한 필터 옵션(지역, 정렬)을 Redux에 저장하고, "저장하기" 버튼을 클릭하면 필터가 적용됩니다.
- **조건부 렌더링**: 지역 데이터가 로드되었을 때만 지역 체크박스를 렌더링합니다.



<div align="center">
  <table>
    <tr>
      <td align="center"><strong>초성 검색 </strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/13615917-bbe1-42fe-94a0-1d42b9c7492a"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능
- **공연 검색**: 검색어를 입력하여 공연 이름으로 공연을 필터링할 수 있습니다.

### 2) 구현 방법
- **초성 검색 기능**: `Hangul` 라이브러리를 사용해 한글 검색을 지원하고, 입력된 검색어와 공연 이름을 비교하여 필터링합니다.

### 📝 4. 상세 페이지 

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>자세한 정보</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/ebba410d-566f-46e3-8657-3ee24750ecfe"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

<br>

### 1) 구현 기능

- **공연 상세 정보 표시**: 공연의 포스터, 이름, 기간, 장소, 장르, 상태, 소요시간, 연령 제한, 가격 등의 상세 정보를 표시합니다.
- **이미지 갤러리**: 공연과 관련된 이미지들을 갤러리 형식으로 보여줍니다.
- **공연 예매 링크**: 사용자가 외부 예매 사이트로 이동할 수 있도록 예매 링크를 제공합니다.

### 2) 구현 방법

- **서버사이드 렌더링 (SSR)**: `getServerSideProps`를 사용해 페이지 로드 시 서버에서 공연의 상세 정보와 리뷰 데이터를 미리 불러옵니다.
- **API 호출**: `fetchPerformanceDetails` API를 사용해 공연 상세 정보를 서버로부터 가져옵니다.

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>카카오톡 공유하기</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/0408fb18-496f-4bd0-96ea-464fde9a6bd0"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **카카오톡 공유 버튼**: 사용자가 클릭하면 현재 페이지의 공연, 전시 또는 팝업스토어 정보를 카카오톡으로 공유할 수 있는 기능을 제공합니다.
  - **카카오톡 초기화**: 페이지 로드 시 카카오 API를 초기화하여 공유 기능을 사용할 수 있도록 설정합니다.
  - **카카오톡 공유 전송**: 버튼 클릭 시, 해당 페이지의 URL과 함께 공연/전시/팝업스토어의 포스터, 이름, 장소 정보를 카카오톡으로 전송합니다.

### 2) 구현 방법

- **카카오 API 초기화**: `useEffect` 훅을 사용해 컴포넌트가 마운트될 때 카카오 API를 초기화합니다. API 키는 환경 변수에서 가져오며, 초기화가 완료되면 공유 버튼이 활성화됩니다.
- **동적 import**: `ShareKakaoButton` 컴포넌트를 동적으로 import하여 서버사이드 렌더링 중에 클라이언트 측에서만 로드되도록 설정했습니다.
- **공유 데이터 설정**: `sendKakao` 함수에서 카카오톡으로 공유할 데이터(포스터 이미지, 제목, 설명 등)를 설정하고, `Kakao.Share.sendScrap` 메서드를 호출하여 공유를 전송합니다.
- **조건부 렌더링 및 상태 관리**: `useState`를 사용해 카카오 API 초기화 상태를 관리하며, 초기화가 완료되지 않은 경우 공유 버튼이 비활성화됩니다.
- **환경 변수 사용**: 카카오 API 키와 공유 URL은 `NEXT_PUBLIC_KAKAO_API_KEY` 및 `NEXT_PUBLIC_KAKAO_SHARE_URL` 환경 변수를 통해 설정됩니다.


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>리뷰 CRUD</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/38bae08f-78a9-444c-871f-3980abd876ad"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **리뷰 목록 표시**: 공연에 대한 모든 리뷰를 페이지 단위로 표시하며, 페이지네이션을 통해 리뷰를 탐색할 수 있습니다.
- **리뷰 작성 및 관리**: 사용자가 공연에 대한 리뷰를 작성, 수정, 삭제할 수 있는 기능을 제공합니다.
- **리뷰 필터링**: 리뷰 작성자만 해당 리뷰를 수정하거나 삭제할 수 있도록 제한합니다.
- **로그인 상태 확인**: 리뷰 작성 시 사용자의 로그인 상태를 확인하고, 로그인이 필요할 경우 로그인 페이지로 이동하도록 안내합니다.

### 2) 구현 방법

- **React Query 사용**: `useQuery`와 `useMutation`을 사용해 리뷰 데이터를 비동기적으로 불러오고 관리합니다. 서버에서 데이터를 가져오거나, 리뷰를 생성, 수정, 삭제할 때 상태를 관리합니다.
- **Redux 사용**: `useDispatch`를 통해 리뷰 작성 시 로그인 상태를 확인하고, 로그인이 필요한 경우 모달을 통해 사용자에게 알림을 제공합니다.
- **페이지네이션 구현**: 리뷰 목록을 페이지 단위로 나누어 표시하고, 페이지 이동 버튼을 통해 다음 페이지와 이전 페이지로 이동할 수 있도록 구현했습니다.
- **Tailwind CSS 사용**: Tailwind CSS를 사용해 리뷰 폼, 리스트, 버튼 등의 UI를 스타일링하고, 반응형 디자인을 구현했습니다.
- **로그인 확인 API 호출**: `checkLogin` API를 호출하여 사용자의 로그인 상태를 확인하고, 로그인하지 않은 경우 로그인 페이지로 유도합니다.

### 📝 5. 찜 페이지 

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>로그인 사용자</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/5dcb7500-a838-477b-9856-7158597fb077"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>

<br>

### 1) 구현 기능

- **사용자 즐겨찾기 목록 표시**: 사용자가 즐겨찾기에 추가한 공연, 전시회, 팝업스토어를 카테고리별로 나누어 화면에 표시합니다.
  - **카테고리별 즐겨찾기**: 공연, 전시회, 팝업스토어를 각각 구분하여 목록으로 보여줍니다.
  - **즐겨찾기 데이터 로드**: 사용자가 저장한 즐겨찾기 데이터를 서버로부터 불러옵니다.
  - **즐겨찾기 항목 관리**: 각 즐겨찾기 항목에 대해 즐겨찾기 추가/제거 버튼을 제공합니다.
  - **즐겨찾기 항목 없음 표시**: 즐겨찾기에 저장된 항목이 없을 경우, 해당 상태를 사용자에게 알립니다.

### 2) 구현 방법

- **React Query 사용**: `useQuery`를 사용하여 서버로부터 사용자의 즐겨찾기 데이터를 비동기적으로 불러옵니다. 
- **상태 관리**: `useState` 훅을 사용하여 공연, 전시회, 팝업스토어 데이터를 각각의 상태로 관리합니다.
- **비동기 데이터 처리**: `axios`를 사용하여 각 카테고리에 해당하는 즐겨찾기 데이터를 서버에서 가져와 상태에 저장합니다.
- **조건부 렌더링**: 데이터 로딩 상태, 오류 상태, 즐겨찾기 항목의 유무에 따라 적절한 메시지나 컴포넌트를 조건부로 렌더링합니다.
- **UI 구성**: `Image`, `Link`, `FavoriteButton` 컴포넌트를 사용하여 각 항목을 카드 형태로 표시하며, Tailwind CSS를 활용해 레이아웃을 구성하고 스타일링합니다.


<div align="center">
  <table>
    <tr>
      <td align="center"><strong>비로그인 사용자</strong></td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/e5b95ab0-a3e9-474e-bf95-578cad17953d"  width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **비로그인 상태에서의 찜 목록 표시**: 사용자가 비로그인 상태에서도 로컬 스토리지에 저장된 찜 목록을 불러와 공연, 전시회, 팝업스토어를 카테고리별로 표시합니다.
  - **찜한 항목 로드**: 로컬 스토리지에서 사용자가 찜한 항목들을 불러와 해당 데이터를 서버로 요청합니다.
  - **카테고리별 찜 목록 표시**: 공연, 전시회, 팝업스토어의 찜한 항목들을 각각 별도의 섹션으로 나누어 표시합니다.
  - **찜 목록 비어있음 처리**: 찜한 항목이 없는 경우, 해당 상태를 사용자에게 표시합니다.
  - **찜 추가/제거 버튼 제공**: 각 항목에 대해 찜하기/찜 해제 기능을 제공합니다.

### 2) 구현 방법

- **로컬 스토리지 사용**: `sessionStorage`를 사용하여 비로그인 상태에서 사용자가 찜한 항목들을 저장하고 불러옵니다.
- **Axios를 통한 API 호출**: `axios`를 사용해 찜한 항목에 대한 상세 정보를 서버에서 가져오며, 비동기적으로 데이터를 처리합니다.


### 📝 6. 마이 페이지 

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>마이페이지</strong></td>
    </tr>
    <tr>
      <td align="center">
       <img src="https://github.com/user-attachments/assets/f9123b5e-8da7-4f85-b167-8e568f9a5a3d" width="600px" height="300px">
      </td>
    </tr>
  </table>
</div>
<br>

### 1) 구현 기능

- **회원 정보 조회**: 로그인한 사용자의 이름, 아이디, 이메일, 닉네임 등 기본 정보를 조회하여 화면에 표시합니다.
- **회원 탈퇴 기능**: 사용자가 회원 탈퇴 버튼을 클릭하면 계정을 삭제하는 기능을 제공합니다.
- **로그인 상태 확인**: 사용자의 로그인 상태를 확인하고, 로그아웃된 상태라면 로그인 페이지로 리다이렉션합니다.

### 2) 구현 방법

- **NextAuth 사용**: `useSession` 훅을 사용해 사용자의 로그인 상태를 확인하고, 세션 정보를 가져옵니다.
- **React Query 사용**: `useQuery`를 사용하여 서버로부터 회원 정보를 비동기적으로 가져오고, 로딩 상태 및 오류 처리를 관리합니다.
- **Axios를 통한 API 호출**: `getMemberDetails`와 `leaveMember` API를 호출하여 회원 정보를 조회하고, 회원 탈퇴를 처리합니다.
- **로그인 상태 확인**: `useEffect`와 `checkLogin` 함수를 사용해 사용자의 로그인 상태를 확인하고, 로그아웃된 경우 로그인 페이지로 리다이렉션합니다.
- **회원 탈퇴 처리**: `handleClick` 함수에서 `leaveMember` API를 호출해 회원 탈퇴 요청을 처리하고, 성공 시 로그인 페이지로 리다이렉션합니다.


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
