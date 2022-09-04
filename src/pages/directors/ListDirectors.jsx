import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ListDirectors = () => {

  const navigate = useNavigate();
  const [directors, setDirectors] = useState([]);
  const token = localStorage.getItem('token');


  const getDirectors = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/v1/director',
        { headers: { 'accept': 'application/json', 'authorization': token } }
      );
      console.log(response.data.data.users)
      setDirectors(response.data.data.users)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteDirector = async (id) => {
    try {
      console.warn(id);
      // eslint-disable-next-line no-restricted-globals
      const confirmation = confirm("Are you sure?")
      if (confirmation) {
        await axios.get(
          `http://127.0.0.1:8000/api/v1/director/${id}/destroy`,
          { headers: { 'accept': 'application/json', 'authorization': token } }
        );
        await getDirectors();
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getDirectors();
  }, [])

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Directors</h1>
      <hr className='mt-3' />
      <p className='mt-3'>List of created directors</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-sky-900 text-white'>
          <tr>
            <th className='p-2'>#</th>
            <th className='p-2'>Username</th>
            <th className='p-2'>Full Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>State</th>
            <td className='p-2'></td>
          </tr>
        </thead>
        <tbody>
          {
            directors.map((director, index) => (
              <tr key={director.id} className="border-b hover:bg-gray-100">
                <td className='p-3'>{++index}</td>
                <td className='p-3'>{director.username}</td>
                <td className='p-3'>{director.full_name}</td>
                <td className='p-3'>{director.email}</td>
                <td className='p-3'>{director.state ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-900 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-900 font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                }</td>
                <td className='p-3'>
                  <button type='button' className='bg-sky-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl'
                    onClick={() => navigate(`/directors/show/${director.id}`)}>Show</button>
                  <button type='button' className='bg-cyan-900 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2 rounded-xl'
                    onClick={() => navigate(`/directors/edit/${director.id}`)}>Edit</button>
                  
                  <button type='button' className={`${director.state ? 'bg-red-800' : 'bg-green-800 '} block w-full text-white p-2 uppercase font-bold text-xs rounded-xl`}
                    onClick={() => { deleteDirector(director.id) }}>{director.state ? 'Inactive' : 'Active'}</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
