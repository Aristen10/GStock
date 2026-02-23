'use client'
import { useTransition } from 'react'
import { deletePost } from '@/action/action'
import Link from 'next/link'
import UpdateProduitModal from './UpdateProduitModal'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { BsFillEyeFill } from 'react-icons/bs'
import DeleteProduct from './DeleteProduct'

interface ProductProps {
  id: string
  name: string
  price: number
  stock: number
}

const Card = ({ id, name, price, stock }: ProductProps) => {
  

  return (
    <div className="
      w-72
      bg-white dark:bg-zinc-900
      rounded-2xl
      p-5
      shadow-md
      border border-zinc-200 dark:border-zinc-800
      hover:shadow-xl hover:-translate-y-1
      transition-all duration-300
      flex flex-col gap-4
    ">
      
     
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white line-clamp-1 py-2 border-b-2">
          {name}
        </h3>
        <p className="text-2xl font-bold text-blue-400">
          {price} Ar
        </p>
      </div>

     
      <div>
        <span className={`
          text-sm px-3 py-1 rounded-full font-sans
          ${stock > 5
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-red-100 text-red-600'}
        `}>
          {stock > 0 ? `Stock: ${stock}` : 'Rupture'}
        </span>
      </div>

    
      <div className="flex items-center justify-between mt-auto">
        <Link
          href={`/Post/${id}`}
          className="
            text-sm 
            px-4 py-2
            rounded-lg
            bg-gray-400 text-white
            hover:  bg-gray-300  
            transition
            flex
            items-center
            gap-2
            font-semibold
          "
        >
          <BsFillEyeFill />
          <span>Voir plus</span>
          
        </Link>

        
      </div>
      <div className='flex flex-row gap-5'>
       

     
      <UpdateProduitModal
        id={id}
        currentName={name}
        currentPrice={price}
        cuurrentStock={stock}
      />
      <DeleteProduct id={id}/>
    </div>
     



      </div>
      
  )
}

export default Card
