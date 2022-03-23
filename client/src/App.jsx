import React from 'react'
import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => {

  return (
    <div className="min-h-screen text-white">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* <Services /> */}
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
