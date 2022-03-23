import React, { useState, useEffect, useContext } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { BiWalletAlt } from 'react-icons/bi'
import { TransactionContext } from '../context/TransactionContext'
import logo from "../../images/ethereum.png"

const navbarItems = ["Send Crypto", "Transaction History"]

const Navbar = () => {
	const { currentAccount, connectWallet } = useContext(TransactionContext) || {}
	const [toggleMenu, setToggleMenu] = useState(false)
	const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset)
	const [isAutoscrolling, setIsAutoscrolling] = useState(false)

	const menuSelection = (elementId) => {
		setIsAutoscrolling(true)
		document.getElementById(elementId).scrollIntoView({behavior: 'smooth'})
		setTimeout(() => {
			document.getElementById("navbar").style.top = "-90px"
			setIsAutoscrolling(false)
		}, 700)

		if(window.innerWidth <= 425) {
			setToggleMenu(false)
		}
    }

	window.onscroll = function() {
		if (isAutoscrolling) return

		let currentScrollPosition = window.pageYOffset

        // Scrolling up
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.top = "0"
			// Transparent background at top of page
			if(currentScrollPosition === 0) {
				document.getElementById("navbar").classList.remove("gradient-bg-nav")
			}
        } 
        // Scrolling down
        else { 
            document.getElementById("navbar").style.top = "-90px"
			document.getElementById("navbar").classList.add("gradient-bg-nav")
        }
        setPrevScrollPosition(currentScrollPosition)
    }
	
	return (
		<nav id="navbar" className="fixed left-0 top-0 z-10 transition-all duration-300 ease-out w-full flex justify-center items-center p-4 md:px-12">
			<div className="max-w-[1200px] w-full flex justify-between items-center">

			{/** Logo */}
			<div className="md:flex[0.5] flex flex-intial justify-center items-center">
				<img src={logo} alt="logo" />
			</div>

			{/** Menu */}
			<ul className="md:flex hidden list-none flex-row justify-between items-center flex-intial">
				{navbarItems.map((item, index) => (
					<li key={item + index} onClick={() => menuSelection(item.split(' ')[1].toLowerCase())} className={`mx-4 cursor-pointer hover:text-[#4eb3ff] transition-all`}>
						{item}
					</li>
				))}
				<li className={`cursor-pointer py-2 px-7 rounded-full bg-transparent [#2952e3] hover:text-[#4eb3ff] bg- [#2546bd] transition-all`}>
					<button onClick={() => !currentAccount && connectWallet() } className={`font-semibold flex items-center`}>
						<div className={`text-base border-4 rounded-full mr-3 ${currentAccount? "border-green-600" : "border-[#f93b7f]"}`} />
						
						{currentAccount? "Connected" : "Not Connected"} 
						
						<BiWalletAlt fontSize={18} color="#fff" className="ml-3" />
					</button>
				</li>
			</ul>

			{/** Mobile */}
			<button onClick={() => !currentAccount && connectWallet() } className="md:hidden font-semibold flex items-center">
				<div className={`text-base border-4 rounded-full mr-3 ${currentAccount? "border-green-600" : "border-[#f93b7f]"}`} />
				
				{currentAccount? "Connected" : "Not Connected"} 
				
				<BiWalletAlt fontSize={18} color="#fff" className="ml-3" />
			</button>

			
			<div className="flex relative md:hidden">
			
				{/** Open Menu */}
				<HiMenuAlt4 fontSize={28} className={`${toggleMenu? "opacity-0" : "opacity-100"}`} onClick={() => setToggleMenu(true)} />
				
				{/** Menu */}
				<ul className={`z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism transition duration-300 ease-out ${toggleMenu? 'translate-x-0':'translate-x-[120%]'}`}>
					<li className="text-xl w-fit mr-2 my-2">
						<AiOutlineClose onClick={() => setToggleMenu(false)} />
					</li>
					{navbarItems.map((item, index) => (
						<li key={item + index} onClick={() => menuSelection(item.split(' ')[1].toLowerCase())} className={`mx-4 cursor-pointer my-2 text-lg`}>
							{item}
						</li>
					))}
				</ul>
			</div>

			</div>
		</nav>
	)
}

export default Navbar