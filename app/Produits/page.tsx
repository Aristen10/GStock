import React from 'react'
import { prisma } from '../../lib/prisma'
import { CreateProduit } from '@/action/action'
import Card from '../components/Card'
import AddProduitModal from '../components/AddProduitModal'
import ScrollReveal from '../components/ScrollReveal'
import Footer from '../components/Footer'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <div className='flex items-center justify-center flex-col'>
   x
        <ScrollReveal>
          <div className='grid  gap-4   py-8
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {produits.map(p => (
                <Card
                  key={p.id}      
                  id={p.id}       
                  name={p.name}
                  price={p.price}
                  stock={p.stock}
                />

            ))}
        </div>
        
      </ScrollReveal>

    
       <AddProduitModal />
       <Footer/>
       
    
</div>
  )
}

