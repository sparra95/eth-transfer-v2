import React, { useContext } from 'react'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { BiWalletAlt } from 'react-icons/bi'
import { TransactionContext } from '../context/TransactionContext'
import { Loader } from './'
import { shortenAddress } from '../utils/shortenAddress'
import { Link } from '../components'

const gridCommonStyles ="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

const Input = ({placeholder, name, type, value, handleChange}) => (
	<input
		placeholder={placeholder}
		type={type}
		step="0.0001"
		value={value}
		onChange={(e) => handleChange(e, name)}
		className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
)

const Welcome = () => {
	const { currentAccount, connectWallet, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext) || {}
	
	// Send transaction if all fields filled
	const handleSubmit = (e) => {
		e.preventDefault()

		const { addressTo, amount, keyword, message } = formData

		if (!addressTo || !amount || !keyword || !message) return

		sendTransaction()
	}
	
	return (
		<div className="flex w-full justify-center items-center pt-8">
			<div className="flex mf:flex-row flex-col items-start justify-between md:p-12 py-12 px-4">
				
				{/** Welcome Info */}
				<div className="flex flex-1 justify-start flex-col mf:mr-10 pt-10">
					<h1 className="relative text-white font-medium text-3xl md:text-5xl md:leading-tight text-gradient py-1">
						Send Crypto across the world
					</h1>
					<p className="text-left mt-5 text-white font-light w-11/12 text-base">
						Explore crypto. Send Ethereum with a message across the world using our smart contract
					</p>
					<p className="text-left mt-5 text-white font-semibold w-11/12 text-lg">
						How it works:
					</p>
					<ol className="text-left text-white font-light w-11/12 text-base list-decimal ml-4">
						<li>Download <Link url={"https://metamask.io/"}>Metamask</Link></li>
						<li>Connect your wallet to the Ropsten test network</li>
						<li>Use a Ropsten <Link url={"https://faucet.egorfine.com/"}>faucet</Link> to send ETH to your wallet</li>
						<li>Connect your Metamask wallet to this app</li>
						<li>Fill out the form and send ETH with a message to any other wallet address on the blockchain!</li>
					</ol>
					{!currentAccount && 
						(<button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer transition-all hover:bg-[#2546bd]">
							<p className="text-white text-base font-semibold flex items-center">Connect Wallet <BiWalletAlt fontSize={18} color="#fff" className="ml-4" /></p>
						</button>)
					}
					
					
					<div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 border-[#37c7da]">
						<div className={`${gridCommonStyles} rounded-tl-2xl`}>Web 3.0</div>
						<div className={`${gridCommonStyles} `}>Decentralized</div>
						<div className={`${gridCommonStyles} `}>Anonymous</div>
						<div className={`${gridCommonStyles} `}>Cryptocurrency</div>
						<div className={`${gridCommonStyles} `}>Ethereum</div>
						<div className={`${gridCommonStyles} rounded-br-2xl`}>Blockchain</div>
					</div>
				</div>
					
				{/** Ethereum Card */}
				<div id="crypto" className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 pt-10">
					<div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full max-w-[300px] my-5 eth-card white-glassmorphism">
						<div className="flex justify-between flex-col w-full h-full">
							<div className="flex justify-between items-start">
								<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
									<SiEthereum fontSize={21} color="#fff" />
								</div>
								<BsInfoCircle fontSize={17} color="#fff" />
							</div>
							<div>
								<p className="text-white font-semibold textlg mt-1">
									Ethereum
								</p>
								<p className="text-white font-light text-sm italic">
									{ currentAccount ? shortenAddress(currentAccount) : "Address" }
								</p>
							</div>
						</div>
					</div>

					{/** Transaction Form */}
					<form id="transaction-form" className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
						<Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
						<Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
						<Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
						<Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
						
						<div className="h-[1px] w-full bg-gray-400 my-2" />
						
						{isLoading
							? <Loader />
							: (
								<button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">
									Send Now
								</button>
							)
						}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Welcome