import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import api from '../root/api';

const CommunityDetail = () => {
    // useParams를 써서 params가 담긴 object를 반환 받을 수 있다.
    let slug = useParams();
    const history = useHistory();

    const [ object, setObject ] = useState('');

    const _getCommunityDetail = async() => {
        const comObject = await api.getDetailCommnunity(slug.id);
        // 여기서 promise이용해서 404받았을 때 page not Found 띄워주면 될 것 같은데
        setObject(comObject.data);
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