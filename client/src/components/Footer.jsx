import React from "react"
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import logo from '../../images/ethereum.png'

const socialIcons = [
    {
        component: <FiLinkedin  />,
        link: "https://www.linkedin.com/in/steven-parra/" 
    },
    {
        component: <FiGithub />,
        link: "https://github.com/sparra95"
    },
    {
        component: <FiInstagram />,
        link: "https://instagram.com/achievingsteve"
    }
]

const Footer = () => {
	return (
		<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-transactions">
			<div className="hidden w-full flex sm:flex-row flex-col justify-between items-center my-4">
				
				{/** Logo */}
				<div className="flex flex-[0.5] justify-center items-center">
					<img src={logo} alt="logo" className="w-8 h-8" />
				</div>

				{/** Menu */}
				<div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
					<p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
					<p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
					<p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
					<p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
				</div>
				
			</div>

			{/** Contact */}
			<div className="hidden flex justify-center items-center flex-col mt-5">
				<p className="text-white text-sm text-center">Contact me</p>
				<p className="text-white text-sm text-center">sparra95@gmail.com</p>
			</div>

			{/** Copyrights */}
			<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-600 mt-5" />

			<div className="sm:w-[90%] w-full flex justify-between items-center text-gray-500 mt-3">
				<p className="text-sm text-center">
					Built by 
					<a href="https://www.linkedin.com/in/steven-parra/" target="_blank" className="transition-all duration-300 ease-out hover:text-[#4eb3ff]"> Steven Parra</a>
				</p>

				<div className="flex">
					{socialIcons.map((icon, index) => (
						<a href={icon.link} key={icon + index} className="text-lg md:text-xl p-3 transition-all ease-out hover:text-[#4eb3ff] hover:-translate-y-1">
							{icon.component}
						</a>
					))}
				</div>

				<p className="text-sm text-center transition-all duration-300 ease-out hover:text-[#4eb3ff] hover:-translate-x-1"> <a href="emailto:sparra95@gmail.com">sparra95@gmail.com</a></p>
			</div>
		</div>
	)
}

export default Footer