import React from 'react'
import Navbar from '../Navbar/Navbar';
import ItemNavbar from '../../../componentes/UI/ItemNavbar/ItemNavbar';


export const Header = () => {
  return (
<header className='w-full h-28 bg-cyan-900 flex justify-center items-center flex-wrap  '> 
<a className='text-sky-500    p-2  text-5xl ' href="https://portafolio-react-theta.vercel.app/">Santiago Rojas Rodríguez </a>

<Navbar/>
<ItemNavbar route='/' content='Inicio' />        
        <ItemNavbar route='/aboutme' content='Acerca de Mi' />
        <ItemNavbar route='/portfolio' content='Mi Portafolio' />
        <ItemNavbar route='contactme' content='Contáctame' />
        <ItemNavbar route='*' content='fakes Routes' />

<Navbar/>

</header>
    )
}
export default Header
