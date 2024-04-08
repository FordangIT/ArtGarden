# Artgarden

// 이미지 삽입하기 

## 프로젝트 소개 
기획 의도: 모든 것이 디지털화 되어있는 시대, 더 많은 사람들이 풍요로운 여가시간을 보냈으면 좋겠다는 생각에서 기획하게 되었습니다. 
사용자에게 트렌디한 공연/전시/팝업스토어 정보를 제공함으로써 사용자가 손쉽게 정보에 접근하도록 했습니다. 
### 배포 주소 
### 팀원 소개 
|                               [이유정 FE](https://github.com/FordangIT)                                |                                [이창훈 BE](https://github.com/ChangHoon97)                               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                       fordang0819@gmail.com                                        |                                      hyo040441@gmail.com                                   |                              
|  ![이유정](https://avatars.githubusercontent.com/u/93567754?v=4)  |  ![이창훈](https://avatars.githubusercontent.com/u/118735836?v=4)


### 현재 진행상황 (2024/04/08 UPDATE)
![image](https://github.com/FordangIT/Artgarden/assets/93567754/0b28ff0e-ff95-40c3-b461-27efd48bcad8)

## 목차 
  - [시작 가이드](#시작-가이드)
  - [Stacks](#Stacks)
  - [화면 구성](#화면-구성)
  - [주요 기능](#주요-기능)
  - [아키텍처](#아키텍처)
  - [GIT CONVENTION](#git-convention)
## 시작 가이드
### Requirements
- Node.js 
- Npm 
### Installation
Use the package manager [npm](https://www.npmjs.com/) to install Artgarden.
```bash
npm install
```

## Stacks
- Next.js
- TypeScript
- TailwindCSS
- React-query
- ReduxToolkit
- AWS
- Github-Actions
- Jira



## 화면 구성 
![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/2263cd60-fa7c-4347-b496-f290ebdddc9d/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/6ab1f7c1-820d-4ab5-9e90-348319b87f87/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/c6c25468-a8fb-4cc2-b223-f5b7cbd8e6f2/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/4d02f0ba-d484-4cb7-bd9e-c484d8de18ce/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/1ddc00a7-8a9c-450e-8456-b79c1460ffca/Untitled.png)
![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2af80d24-5e09-44bf-a579-a5d5106e9d9c/753ed825-6ff5-48cb-a688-e380987e6d65/Untitled.png)


## 주요 기능 
| 기능                | 설명                                                            |
|---------------------|-----------------------------------------------------------------|
| 공연 정보 제공 1. | Next.js api 활용한 공연 정보를 메인페이지에서 제공하고 있습니다.   |
| 공연 정보 제공 2. | 전체 공연 정보를 무한스크롤 기능과 검색기능을 통해 사용자는 손쉽게 데이터에 접근할 수 있습니다.  |

## 아키텍처 
### 디렉터리 구조 

## git convention
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

