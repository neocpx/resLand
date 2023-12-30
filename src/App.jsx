import './App.css'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import leetcode from './assets/leetcode.svg'
import contact from './assets/contact.svg'
import Cv from './components/Cv'


function App() {
  return (
    <>
    <h1 className='text-3xl font-bold'>Adarsh Gopal Chaudhary</h1>
    <div className='flex justify-between py-3 px-4'>
      <div>
      <ul>
        <li id="affiliation">Student, NIT Jalandhar, 2024 Batch</li>
        <li id="location">Ward no. 5 Abada Barana, Una Himachal Pradesh</li>
        <li id="email" className='hover:text-sky-900 hover:font-medium'>
          <a href="mailto:adarshgc.cs.20@nitj.ac.in">adarshgc.cs.20@nitj.ac.in</a> (work)
        </li>
      </ul>
      </div>
      <div className='flex place-items-center'>
      <ul className='flex gap-3'>
        <li className="w-5 h-5">
          <a href="https://leetcode.com/neoupie/">
            <img src={leetcode} alt="leetcode" />
          </a>
        </li>
        <li className="w-5 h-5">
          <a href="https://www.linkedin.com/in/adarshgopalchaudhary/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="w-5 h-5">
          <a href="https://github.com/neocpx">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="w-5 h-5">
          <a href="tel:+919805232954">
            <img src={contact} alt="phone number" />
          </a>
        </li>
      </ul>
      </div>
    </div>
    <p>
    Hey! My name is Adarsh, and I am currently pursuing my Computer Science Engineering degree at National Institute of Technology, Jalandhar.
    I am deeply passionate about learning and creating new things, with a particular interest in the fields of Machine Learning and Web Development.
    I am currently honing my skills in these areas and am excited about the potential they hold. Looking forward to contributing innovative solutions to real-world problems. Cheers! 🚀
    </p>
    <Cv/>
    </>
  )
}

export default App
