# API LIST

|URL|METHOD|Description|Params|Return|
|---|---|---|---|---|
|/community|`GET`|커뮤니티 글 조회||[...{Post}]|
|/community/post|`POST`|커뮤니티 글 작성|{title:'',desc:''}|{Post}|
|/community/[id]|`GET`|특정 id의 글 조회||{Post}|
|/community/[id]|`DELETE`|특정 id의 글을 삭제|||
|/community/[id]|`PUT`|특정 id의 글을 부분수정|||
|/community/[id]|`PATCH`|특정 id의 글을 수정|||