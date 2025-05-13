

import { Link } from 'react-router-dom'
import Button from '../button'

const Header= () => {
  return (
   <header className='w-full z-10'>
    <div className='max-width flex-between padding-x padding-y '>
        <Link to="/">
        <img src="/public/bmw.png" alt="" width={50} height={50}/>
        </Link>

       
    <Button text='Kaydol'/>
    </div>
   </header>
  )
}

export default Header
