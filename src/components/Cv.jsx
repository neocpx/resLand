import React from 'react'
import Edu from './Edu'

const Cv = () => {
  return (
    <div className='divide-y divide-dashed divide-gray-800 mt-10 '> 
    <h2 className='text-2xl font-bold'>Brief CV</h2>
    <div className='my-2'>
        <h3 className='text-lg font-semibold mt-2'>Engineering Skills</h3>
        <dl className='mx-2'>
        <dt className='font-medium'>Programming Languages</dt>
                <dd className='ps-2'>Python, JavaScript C++, SQL </dd>
            <dt className='font-medium'>Operating Systems</dt>
                <dd className='ps-2'>Linux, Windows</dd>
            <dt className='font-medium'>Databases</dt>
                 <dd className='ps-2'>MySQL, PostgreSQL</dd>
        </dl>
    </div>
    <div className='my-2'>
        <h3 className='text-lg font-semibold'>Projects</h3>
        <ul className='list-disc mx-8'>
        <li><h3 className='font-medium'>Sumarize</h3><p>A tool that can help you summarize any article published on the web, just enter the link to that article and it would summarize the piece of writing with in a few seconds.<br/>
        Articles summarized are upto 70-80 percent smaller and contain only vital information, thus saving time of reader.</p></li>
        <li><h3 className='font-medium'>2048 AI</h3><p>Developed an AI that can play the classic game of 2048, utilizing reinforcement learning techniques build in pytorch.<br/> The AI autonomously learns optimal strategies 
          for playing the game, aiming to achieve high scores through continuous learning and decision-making.<br/>Implemented the game logic and user interface with Pygame</p></li>
        <li><h3 className='font-medium'>Document Denoiser</h3><p>Project utilizes convolutional neural networks to analyze images and denoise them, implemeted using tensorflow and is trained over a hundereds of images.
          <br/>The model demonstrates remarkable resilience when confronted with unfamiliar data, achieving a notable enhancement of 50 to 60 percent in visual clarity.</p></li>
      </ul>
    </div>
    <div className='my-2'>
        <h3 className='text-lg font-semibold'>Education</h3>
        <ul className='list-disc mx-8'>
        <li><Edu disc={'Bachelors of Technology, from National of Technology Jalandhar, in Computer Science and Engineering (CGPA: 7.63)'} date={'Expected 2024 June '}/></li>
        <li><Edu disc={'12th Grade, from Gian Jyoti public School, Mohali Punjab (Percentage: 77.80) '} date={'2018 - 2019 April'}/></li>
        <li><Edu disc={'10th Grade, from Mount Carmel Sr. Sec. School, Una Himachal Pradesh (Percentage: 88.60)'} date={'2016 - 2017 April'}/></li>
      </ul>
    </div>
    </div>
  )
}

export default Cv