import React, { useState } from 'react'
import './App.css'
import TransactionForm from './TransactionForm'
import TransactionTable from './TransactionTable'

function App() {
  // State to store the list of transactions and the search term
  const [transactions, setTransactions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Function to handle adding a new transaction
  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction])
  };


  return (
    <div className="App">
      {/* Header */}
      <h1 id='header'>The Royal Bank Of Flatiron</h1>

      {/* Transaction Form */}
      <TransactionForm onAddTransaction={handleAddTransaction} />

      {/* Search Input */}
      <input id='searchbar'
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  )
}

export default App