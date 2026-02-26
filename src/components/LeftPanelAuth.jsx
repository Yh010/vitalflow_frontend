import React from 'react'

const LeftPanelAuth = () => {
  return (
    <div className='hidden lg:flex flex-1 flex-col justify-center px-12 xl:px-20 bg-gradient-to-br from navy/95 to obsidian border-r border-cream/[0.06]'>
      <div className='max-w-xl'>
        <div className='flex items-center gap-3 mb-12'>
            <div className='w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-400 rounded-xl flex items-center justify-center'>
                Icon
            </div>
            <span className='text-2xl font-bold text-white'>
                VitalFlow <span className='text-cyan-400'>AI</span>
            </span>
        </div>
        <h2 className='text-4xl xl:text-5xl font-bold text-white mb-5'>
            Intelligent <br /> Healthcare,<br />
            <span className='text-cyan-400'>Reimagined</span>
        </h2>
        <p className='text-gray-400 text-[15px] mb-10'>
            Voice-enabled appointment booking, AI-powered document review, and unified medical records - all in one secure platform
        </p>
      </div>
    </div>
  )
}

export default LeftPanelAuth
