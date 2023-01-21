import React from 'react'
import logo from '../assets/images/logo.svg'
import icon_menu from '../assets/images/icon-menu.svg'
import icon_close from '../assets/images/icon-close-menu.svg'
import arrow from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import plan from '../assets/images/icon-planning.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'


function Navbar(props) {
    const [show, setShow] = React.useState(props.icon)
    const [toggle, setToggle] = React.useState(false)
    const [toggleLast, setToggleLast] = React.useState(false)

    function sidebar(){
        setShow(prevShow => {
            return prevShow === icon_menu ? icon_close : icon_menu
        })
    }

    function togglemenu(){
        setToggle(prevToggle => !prevToggle)
    }
    function togglelastmenu() {
        setToggleLast(prevToggleLast => !prevToggleLast)
    }

    const styles = {
        display: show === icon_menu ? "none" : "flex"
    }

  return (
    <div className='nav p-5 flex justify-between items-center md:p-10'>
        <div className='nav--leftside flex gap-12 text-MediumGray items-center'>
            <img src={logo} className='cursor-pointer' alt="logo"/>
            <div className='hidden md:flex'>
                <div className='flex items-center gap-5' >
                    <div aria-haspopup='true' className='flex group relative items-center gap-3 '>
                       <button type='button' className='focus-within:border-transparent transition duration-300 focus-within:brightness-0 hover:brightness-0 flex items-center gap-3 '><p>Features</p><span><img aria-checked={toggle} src={arrow} className=' group-focus-within:rotate-180'/></span></button>

                       <div class="invisible origin-top-right  scale-95 transform opacity-0 transition-all duration-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                            <div class="absolute right-0 mt-4 w-36 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none" role="menu">
                                <div className='py-2 px-5'>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={todo} /> <span>Todo List</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={calendar} /> <span>Calendar</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={reminders} /> <span>Reminders</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={plan} /> <span>Planning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-haspopup='true' className='flex group relative items-center gap-3 '>
                       <button type='button' className='focus-within:border-transparent transition duration-300 focus-within:brightness-0 hover:brightness-0 flex items-center gap-3 '><p>Company</p><span><img aria-checked={toggle} src={arrow} className=' group-focus-within:rotate-180'/></span></button>

                       <div class="invisible origin-top-right  scale-95 transform opacity-0 transition-all duration-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                            <div class="absolute right-0 mt-4 w-36 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none" role="menu">
                                <div className='py-2 px-5'>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                         <span>History</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                         <span>Our Team</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <span>Blog</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hover:text-AlmostBlack'>
                        <div>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className='hover:text-AlmostBlack'>
                        <div>
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hidden md:flex gap-4 text-MediumGray'>
            <button className='hover:text-AlmostBlack'>Login</button>
            <button className='border-2 py-2 px-4 hover:text-AlmostBlack rounded-xl border-MediumGray hover:border-AlmostBlack '>Register</button>
        </div>
        <div className='nav--rightside cursor-pointer transition-all ease-in-out duration-300 md:hidden' onClick={sidebar}>
            <div className='nav--menu'>
                <img src={`${show}`} alt="icon_menu" className='relative z-[999] transition duration-500' />
                <div style={styles}  className=' absolute bg-AlmostWhite shadow-lg backdrop-brightness-100 transition-all duration-300 ease-in-out  w-[65%] inset-y-0 right-0 flex-col '>
                    <div className='mt-20 flex p-5 flex-col justify-start items-start text-MediumGray gap-y-4 '>
                        <div className='' onMouseEnter={togglemenu}>
                            <div className='flex items-center gap-3 hover:brightness-0 hover:text-AlmostBlack' >
                                <p>Features</p><span><img aria-checked={toggle} src={arrow} className='hover:brightness-0 aria-checked:rotate-180'/></span>
                            </div>
                                {toggle && 
                                (<div className='py-2 px-5'>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={todo} /> <span>Todo List</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={calendar} /> <span>Calendar</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={reminders} /> <span>Reminders</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <img src={plan} /> <span>Planning</span>
                                    </div>
                                </div>)}
                        </div>
                        <div onMouseEnter={togglelastmenu} >
                            <div className=''>
                                <div className='flex items-center gap-3 hover:brightness-0 hover:text-AlmostBlack'>
                                    <p>Company</p><span><img aria-checked={toggleLast} src={arrow} className='aria-checked:rotate-180'/></span>
                                </div>
                                {toggleLast && 
                                (<div className='py-2 px-5'>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                         <span>History</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                         <span>Our Team</span>
                                    </div>
                                    <div className='flex items-center gap-2 mt-3 hover:text-AlmostBlack'>
                                        <span>Blog</span>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div className='hover:text-AlmostBlack'>
                            <div>
                                <p>Careers</p>
                            </div>
                        </div>
                        <div className='hover:text-AlmostBlack'>
                            <div>
                                <p>About</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col gap-3 self-center w-full'>
                            <button className='hover:text-AlmostBlack'>Login</button>
                            <button className='border-2 py-2 w-full border-MediumGray rounded-xl hover:text-AlmostBlack hover:border-AlmostBlack'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar