import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-5'>
            <img src={logo} alt="summarizer-logo" className='w-28 object-contain'/>
            <button type='button' onClick={() => {window.open('')}} className='black_btn'>
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Wanna simplify your lengthy articles? <br />
            Use Sumz-AI, an open-source article summarizer that transforms your lengthy articles into clear summaries.
        </h2>
    </header>
  )
}

export default Hero