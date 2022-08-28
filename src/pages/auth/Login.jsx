import React from 'react';
import { Input, Label, Button } from '../../components'

export const Login = () => {
    return (
        <>
            <h2 className='text-2xl md:text-3xl font-bold'>Welcome Back</h2>
            <p className='text-sm text-gray-500 pb-6'>Please sign in to your account</p>
            <form action="" className='space-y-7 text-left'>
                <div>
                    <Label description="Email address" htmlFor='email' />
                    <Input
                        id='email'
                        sytles="block mt-2 w-full"
                        placeholder='Enter your email'
                        autoFocus={true}
                    />
                </div>
                <div>
                    <Label description="Password" htmlFor='password' />
                    <Input
                        id='password'
                        type="password"
                        sytles="block mt-2 w-full"
                        placeholder='Enter your password'
                    />
                </div>
                <div className='pt-4 flex justify-center'>
                    <Button name='Sing in' styles='w-3/5' />
                </div>
            </form>
        </>
    );
}
