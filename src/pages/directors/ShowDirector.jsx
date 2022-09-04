import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const ShowDirector = () => {
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
            <p className='mt-3'>Director details</p>
            {
                Object.keys(director).length > 0 ?
                    (
                        <div className='m-5 flex justify-between'>
                            <div>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* First Name: </span>
                                    {director.first_name}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* Last Name: </span>
                                    {director.last_name}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* Email: </span>
                                    {director.email}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* Phone Number: </span>
                                    {director.phone_number}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* State: </span>
                                    {director.state ? 'Active' : 'Inactive'}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* Birthdate: </span>
                                    {director.birthdate ? director.birthdate : 'N/A'}
                                </p>
                                <p className="text-2xl text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">* Home phone number: </span>
                                    {director.home_phone_number ? director.home_phone_number : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <img src={director.avatar} alt="avatar" className='h-80 w-80' />
                            </div>
                        </div>
                    )
                    :
                    (
                        <p className="bg-yellow-600 border-t border-b border-yellow-900 text-white px-4 py-3 m-5 text-center rounded-lg">No data for this director</p>
                    )
            }
        </div>
    )
}
