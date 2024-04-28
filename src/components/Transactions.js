import React from 'react'
import Table from './Table'
import { bankTransactions } from '../Data'

function Transactions() {
  return (
    <div>
         
         <Table props={bankTransactions}/>


    </div>
  )
}

export default Transactions