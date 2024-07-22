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
    
    useEffect(()=>{
        getTransaction();
    },[])
    console.log(param);
  return (
    <div>
        
    </div>
  )
}

export default SingleTransaction;
