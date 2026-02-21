 import { deletePost } from '@/action/action'
import React, { useTransition } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
interface ProductProps {
  id: string
  
}
 
 const DeleteProduct = ({id}:ProductProps) => {
    const [isPending, startTransition] = useTransition()

  function handleDelete() {
    startTransition(async () => {
      await deletePost(id)
    })
  }
   return (
     <button
          onClick={handleDelete}
          disabled={isPending}
          className="
            flex items-center gap-2
            px-3 py-2
            text-sm
            bg-red-500 hover:bg-red-600
            text-white
            rounded-lg
            disabled:opacity-50
            transition
          "
        >
          <RiDeleteBin5Fill className=''/>
          {isPending ? '...' : ''}
        </button>
   )
 }
 
 export default DeleteProduct
 
 