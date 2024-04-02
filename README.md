## 계획

2024/01/26 : navbar
2024/01/28 : 역동적인 캐러셀 (공연/전시/팝업스토어) //react-material-ui-carousel 사용!. https://www.npmjs.com/package/react-material-ui-carousel
: material-ui 활용!, daisy-ui 활용 !
2024/02/02 : 최신 상품 캐러셀 //react-slick 사용 !
2024/02/05 : xml 데이터를 json 형식으로 파싱하기 위함 xml2js와 같은 XML 파싱 라이브러리를 설치
2024/02/06 : 페이지네이션 및 무한스크롤 구현 위해서 tanstack-qeury 설치

## 메인 페이지 기능

- 메인 캐러셀 (공연/ 전시/ 팝업스토어) => 완료
- BEST Ranking (공연/전시/팝업) => Best 공연 더 보기=> 완료
- 최신 (공연/전시/팝업) => 완료
- 리뷰 (공연/전시/팝업)
- 달력기능? 그날 클릭하면 추천하는 공연/전시/팝업스토어 뜨게 하는 것
- 거리 가까운거 검색할 수 있게?
- 아니면, 지역 검색으로 가능하게?
- ai 추천 어때?
- css (클릭했을 때 효과)
- 찜 기능

## 전체 정보 페이지

- 전체 정보 나열
- 조건 검색
- 내리는 효과(페이지네이션 혹은 무한스크롤)
  무한스크롤 참고: https://velog.io/@hdpark/React-Query%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-Next.js-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4
- 스켈레톤
- 검색 기능

## 상세 정보 페이지

- 해당 공연/전시/팝업스토어 정보 상세
  => 예를 들어, 사진 , 정보글, 사이트, 리뷰

## 로그인

- next.js에서 관리하는 소셜 로그인 추가

## 배포 및 자동화

- vercel로 할지
- aws로 진행할지 고민

## 최적화

- 렌더링 성능 최적화
- 찜 데이터 저장 (브라우저 새로고침 시 유지)

## GIT CONVENTION

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
