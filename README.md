# 비동기 플랫폼 메이킹

<br>

## stack :zap:
- python
    - django
    - django-rest-framework

- js
    - react
    - create-react-app
    - hooks

## WID :label:

- 2020.4.27
    - [react]
        - 기본 환경 세팅
        - nav, routes, home, community, communitypost, auth 컴포넌트 생성 
        - 각 페이지 라우팅
        - 컴포넌트 구조 잡기
        - 간단한 퍼블리싱

    - [drf]
        - 기본 환경 세팅
        - apiview를 이용하여 간단한 community listing api server생성
 
- 2020.4.28
    - [react]
        - axios활용 backend통신(GET, POST)
        - Listing화면 컴포넌트 분리 및 구조화 
        - loading 화면 구성
        - useHistory, Switch 활용 라우팅
        - useEffect활용 성능 최적화
        - 간단한 퍼블리싱

    - [drf]
        - 크로스 도메인 요청 허용
        - apiview활용 post api 생성
        - httpie test
        - api 명세서 작성
 
 - 2020.4.29
    - [react]
        - detail page component, delete 구현
        - useParams사용하여 라우팅(이렇게..하는게 맞을까..?)  
    - [drf]
        - apiview활용 community detail, delete api 생성

    - [회고]
        - component 구조 부터 폴더를 어떤식으로 관리하는지 좋은 예를 보고 지침을 얻어야할 필요성을 느꼈다.
        - 그래도 일단 백지+구글링 코딩에 의의를 두고 내맘대로 완성 시켜봐도 나쁘지 않을 것 같다.
        - apiview에서 put관련 메서드를 만들 때의 issue, drf관리자 페이지가 debug상태에 관련하여 static을 가져오지 못하는 trouble(기능에는 문제 X)
        - react-router-dom...<<겁나 좋음>> :star:
        
- 2020.4.30
    - [drf]
        - User및 Register용 serializer 생성
        - knox를 사용한 회원가입시 AuthToken 생성
        - 디버깅디버깅디버깅...:bug:

    - [회고]
        - 오랜만에 제대로 에러를 만나서 많이 힘들었다... 관련 데이터도 없고 print만 30번은 찍어본 것 같다 욕:mute:
        - httpie에 한계를 많이 느껴서 postman을 사용해봤는데 또 한번의 신세계를 느꼈다. 포스트맨이 있었기에 100번이 넘는 post요청을 보낼 수 있었다.. 이거 없었으면 못잤을 듯!
        - 아! DEBUG = True는 react에서 cors요청에서만 풀어주면 되는 것 같다!

- 2020.5.01
    - [react]
        - airbnb style 표준 학습 및 일부적용
        - styled-components 적용하여 기존 style 컨버팅
    - [drf]
        - Login Token Authentication API