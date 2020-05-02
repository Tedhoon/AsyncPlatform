import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import api from '../root/api';

const CommunityDetail = () => {
    // useParams를 써서 params가 담긴 object를 반환 받을 수 있다.
    let slug = useParams();
    const history = useHistory();

    const [ object, setObject ] = useState('');

    const _getCommunityDetail = async() => {
        const comObject = await api.getDetailCommnunity(slug.id)
            .then(function(response){
                console.log(response)
                setObject(comObject.data);
            })
            .catch(function(error) {
                if (error.response.status===401){
                    alert("인증되지 않은 유저입니다");
                    history.push('/community');
                }
                else {alert("존재하지 않는 쿼리셋 404입니다")}
                console.log(error.response);  
            })
    }

    const _deleteCommnunity = async() => {
        await api.deleteCommunity(slug.id)
        history.push('/community');
    }

    useEffect(function(){
        _getCommunityDetail()
    },[])

    return (
        <div>
            {
                object ? 
                    <div>
                        <p>{object.id}번 째 글입니다.</p>
                        <p>제목 : {object.title}</p>
                        <p>내용 : {object.title}</p>
                    </div>

                : <p>"loading..."</p>
            }
            <button onClick={_deleteCommnunity}>삭제</button>
            
        </div>

    )
}

export default CommunityDetail;