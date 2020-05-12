# 비동기 플랫폼 메이킹

## :zap: stack 
> frontend
- react
- create-react-app
- hooks
- axios

> backend
- django
- django-rest-framework
- knox

:memo: [api 명세서](https://github.com/Tedhoon/AsyncPlatform/tree/master/backend)


## :label: WID 

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

- 2020.5.02
    - [drf]
        - knox-Token을 통한 User Permission 확인용 API생성

- 2020.5.03
    - [drf]
        - api 명세서 작성
        - 로그인 실패시 http response 커스텀
        - deploy를 위한 docker 학습
    - [react]
        - login시 유저 인증
        - localstorage에 token 세팅
    - [회고]
        - promise응답에 setting을 해주니까 코드가 너무 길어져서 보기힘든 것 같다. 추후에 응답에 관한 case를 분류해서 리팩토링 필요 

- 2020.5.5
    - [react]
        - auth상태관리를 위한 redux학습 및 적용중
        - cross-env를 통한 절대경로 지정

- 2020.5.9
    - [react]
        - login 실패시 ref사용 이벤트 핸들링
        - redux 관련 폴더구조 다시잡기
        - redux store 재구현 및 dev-tool 적용
        - privateRoute 구현
        - auth관련 action type 생성
        - auth관련 reducer 구현
        - 서비스 내 global user config dispatch
        - redux 적용하여 privateRouter에 대한 user 권한 테스팅 
    - [drf]
        - community post에 author연결 및 author_name serialize
    - [회고]
        - redux구조를 잡는게 방식이 너무 다양해서... 하나만 잡고 일단 익숙해져야 할 것 같다.
        - 오히려 너무 component화를 많이 시키거나 요청별 구조를 나눠놓으니까 내가 헷갈리는데, 이건 권장방식을 알아보고 폴더구조도 다시 잡아야할 것 같다.

- 2020.5.12
    - [react]
        - login frontend authentication
        - logout frontend authentication
        - register frontend authentication
        - global nav에 user관련 converting 적용
        - redux, connect등 적용하여 전체적인 리덕스기반 코드 리팩토링
    - [회고]
        - react, redux, axios를 이용한 회원관련 작업을 모두 끝냈다 👏👏👏
        - connect관련 PropTypes와 mapStateToProps에 대한 이해가 더 필요할 것 같다..!
        - 모두 `hook`을 사용하여 구현하였는데 어찌어찌 주먹구구식으로 구현은 되었지만 추후 리팩토링도 필요할 것 같다!
        - 함수형 컴포넌트에서 redux state를 가져오는 부분도 확실하게 학습해야겠다아-!