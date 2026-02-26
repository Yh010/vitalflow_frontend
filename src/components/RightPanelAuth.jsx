import React, { useState } from 'react'

const RightPanelAuth = () => {

    const [role, setRole] = useState('patient');
    const [mode, setMode] = useState('login');

  return (
    <div className='flex-1 flex flex-col items-center justify-center p-5 sm:p-8 lg:p-10 min-h-screen'>

      <div className='flex items-cneter gap-2.5 mb-8 lg:hidden'>
        <div className='w-9 h-9 bg-gradient-to-br from-teal-600 to-cyan-400 rounded-xl flex items-cneter justify-center'>
            Icon
        </div>
        <span className='text-2xl font-bold text-white'>
            VitalFlow <span className='text-cyan-400'>AI</span>
        </span>
      </div>

      <div className='w-full max-w-sm'>
        <div className='p-6 sm:p-10 bg-[#0D1B3E]/70 backdrop-blur-mid border border-[#0B6E6E]/20 rounded-2xl'>

            <div className='flex bg-white/[0.06] rounded-xl p-1 mb-6'>
                {['patient', 'doctor'].map(r => ((
                    <button onClick={() => setRole(r)} key={r} className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${role === r ? 'bg-gradient-to-br from-teal-600 to-cyan-400 text-white' : 'bg-transparent text-gray-400'}`}>
                        {r == 'doctor' ? '🩺 ' : '👤 '}{r}
                    </button>
                )))}
            </div>

            <h3 className='text-sl sm:text-2xl text-white font-semibold mb-1'>
                {mode === 'login' ? 'Welcome back' : 'Create account'}
            </h3>
            <p className='text-gray-400 text-[13px] mb-5'>
                {mode === 'login' ? 'Sign in' : 'Get started'}
            </p>

            <form action="" className='flex flex-col gap-4'>
                {mode === 'register' && (
                    <div>
                        <label className='block text-sm font-medium text-gray-400 mb-2"'>Full Name</label>
                        <input 
                            type="text" 
                            placeholder='Amiya Kalo'
                            className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-teal-500 transition' 
                        />
                    </div>
                )}
                <div>
                    <label className='block text-sm font-medium text-gray-400 mb-2"'>Email Address</label>
                    <input 
                            type="email" 
                            placeholder='amiya@gmail.com'
                            className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-teal-500 transition' 
                        />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-400 mb-2"'>Password</label>
                    <input 
                            type="password" 
                            placeholder='**********'
                            className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-teal-500 transition' 
                        />
                </div>

                {mode === 'login' && (
                    <p className='text-right text-[12px] text-cyan-400 cursor-pointer hover:underline'>
                        Forget password?
                    </p>
                )}

                <button className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-400 text-white font-medium
                text-sm tracking-wide transition-all duration-200 w-full justify-center py-3.5 mt-1 hover:-translate-y-px hover:shadow-teal cursor-pointer'>
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
            </form>

            <p className='text-center text-[13px] text-gray-400 mt-5'>
                {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <span
                    className='text-cyan-400 font-medium cursor-pointer hover:underline pl-2'
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                >
                    {mode === 'login' ? 'sign up' : 'Sign in'}
                </span>
            </p>

        </div>
      </div>
    </div>
  )
}

export default RightPanelAuth
