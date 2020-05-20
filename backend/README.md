# API 명세
## Community

|URL|METHOD|Description|Params|Return|httpie|
|---|---|---|---|---|---|
|/community|`GET`|커뮤니티 글 조회||[...{Post}]|http http://127.0.0.1:8000/community/|
|/community/create|`POST`|커뮤니티 글 작성|{title:'',desc:''}, token|{Post}|http --json post http://127.0.0.1:8000/community/create title="1st post" desc="1!!"|
|/community/[id]|`GET`|특정 id의 글 조회|token|{Post}|http http://127.0.0.1:8000/community/[id]|
|/community/[id]|`DELETE`|특정 id의 글을 삭제|token||http DELETE http://127.0.0.1:8000/community/[id]|
|/community/[id]|`PUT`|특정 id의 글을 부분수정|token|||
|/community/[id]|`PATCH`|특정 id의 글을 수정|token|||


## Auth
|URL|METHOD|Description|Params|Header|Return|httpie|
|---|---|---|---|---|---|---|
|/auth/register|`POST`|회원가입|{username:'', email:'', password:''}||[user,token]|http --json post http://127.0.0.1:8000/auth/register username="" email="" password=""|
|/auth/login|`POST`|로그인|{username:'',password:''}||[user,token]|http --json post http://127.0.0.1:8000/auth/login username="" password=""|
|/auth/user|`GET`|유저 조회(인증)||KEY:Authorization, VALUE:Token|[user]|http http://127.0.0.1:8000/auth/user "Authorization: Token 13weqwejkwqe125312~~~"|
|/auth/logout|`POST`|로그아웃(토큰삭제)||KEY:Authorization, VALUE:Token||http --json post http://127.0.0.1:8000/auth/logout "Authorization: Token 13weqwejkwqe125312~~~"|

