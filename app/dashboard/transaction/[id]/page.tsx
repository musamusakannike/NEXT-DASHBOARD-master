"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Transaction, transactions } from '../transactions'

const SingleTransaction = () => {
  const [param, setParam] = useState<Transaction | null | undefined>(null);
  const { id } = useParams()

  const getTransaction = () => {
    const transaction = transactions.find(tran => tran.id === parseInt(id.toString()))
    setParam(transaction);
  }

  useEffect(() => {
    getTransaction();
  }, [])
  console.log(param);
  return (
    <div>
      <h1 className='text-center text-6xl my-4'>Transaction Details</h1>
      <div className="shadow-lg p-4 my-5 mx-auto bg-transparent rounded-md">
        <div className="border-b pb-2">
          <h2 className="text-center text-lg font-extrabold">{param && param.name}</h2>
        </div>
        <div className="pt-2">
          <p>
            <span className="font-bold">Transaction ID:</span> {param && param.id}
          </p>
          <p>
            <span className="font-bold">Transaction Amount:</span> {param && param.amount}
          </p>
          <p>
            <span className="font-bold">Transaction Date:</span> {param && param.date}
          </p>
        </div>
      </div>

    </div>
  )
}

export default SingleTransaction;
