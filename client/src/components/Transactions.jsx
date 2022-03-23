import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'
import { Link } from "../components"
import useFetch from '../hooks/useFetch'

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
	const gifUrl = useFetch({ keyword })
	
	return (
		<div className="bg-[#181918] m-2 flex flex-col flex-1 justify-between
			2xl:min-w-[450px]
			2xl:max-w-[500px]
			min-w-[270px]
			max-w-[300px]
			p-3 rounded-md hover:shadow-2xl
		">
			{/** Transaction Details */}
			<div className="w-full mb-6 p-2 font-light">
				
				<p>
					<span className="font-normal">From: </span> 
					<Link url={`https://ropsten.etherscan.io/address/${addressFrom}`}>{shortenAddress(addressFrom)}</Link>
				</p>
				<p>
					<span className="font-normal">To: </span> 
					<Link url={`https://ropsten.etherscan.io/address/${addressTo}`}>{shortenAddress(addressTo)}</Link>
				</p>
				<p>
					<span className="font-normal">Amount: </span>
					{amount} ETH
				</p>
				<p>
					<span className="font-normal">Time: </span>
					{timestamp}
				</p>

				{message && (
					<>
						<br />
						<p><span className="font-normal">Message:</span> {message}</p>
					</>
				)}
			</div>

			{/** Gif */}
			<img 
				src={gifUrl || url}
				alt="gif"
				className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
			/>
		</div>
	)
}

const Transactions = () => {
	const  { transactions } = useContext(TransactionContext) || {}
	
	return (
		<div id="history" className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-services Xgradient-bg-transactions">
			<div className="flex flex-col md:p-12 py-12">

				<h1 className="text-white text-center font-medium text-3xl md:text-5xl md:leading-tight text-gradient py-1">
					Latest transactions
				</h1>

				{/** Transaction History */}
				<div className="flex flex-wrap justify-center items-stretch mt-10">
					{transactions ? [...transactions].reverse().map((transaction, i) => (
						<TransactionCard key={i} {...transaction} />
					)) : null}
				</div>
			</div>
		</div>
	)
}

export default Transactions