import React from 'react';
import { DirectorForm } from '../../components/organisms';

export const CreateDirector = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-sky-900'>Director</h1>
            <hr className='mt-3' />
            <DirectorForm />
        </div>
    );
}