# API LIST

|URL|METHOD|Description|Params|Return|httpie|
|---|---|---|---|---|---|
|/community|`GET`|커뮤니티 글 조회||[...{Post}]|http http://127.0.0.1:8000/community/|
|/community|`POST`|커뮤니티 글 작성|{title:'',desc:''}|{Post}|http --json post http://127.0.0.1:8000/community/ title="1st post" desc="1!!"|
|/community/[id]|`GET`|특정 id의 글 조회||{Post}||
|/community/[id]|`DELETE`|특정 id의 글을 삭제||||
|/community/[id]|`PUT`|특정 id의 글을 부분수정||||
|/community/[id]|`PATCH`|특정 id의 글을 수정||||