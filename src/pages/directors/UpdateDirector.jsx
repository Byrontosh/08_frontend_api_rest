import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DirectorForm } from '../../components/organisms/DirectorForm';

export const UpdateDirector = () => {
    const { id } = useParams();
    const [director, setDirector] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getDirector = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/v1/director/${id}`,
                    { headers: { 'accept': 'application/json', 'authorization': token } }
                )
                const user = { ...response.data.data.user, id }
                setDirector(user);
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        }
        getDirector()
    }, [])

    return (
        <div>
            <h1 className='font-black text-4xl text-sky-900'>Director</h1>
            <hr className='mt-3' />
            {
                Object.keys(director).length > 0 ?
                    (
                        <DirectorForm director={director} />
                    )
                    :
                    (
                        <p className="bg-yellow-600 border-t border-b border-yellow-900 text-white px-4 py-3 m-5 text-center rounded-lg">No data for this director</p>
                    )
            }
        </div>
    )
}
