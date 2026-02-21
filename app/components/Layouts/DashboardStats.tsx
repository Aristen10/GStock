import { Package, AlertTriangle, DollarSign, Layers } from 'lucide-react'
import StatCard from './StatCard'
import prisma from '@/lib/prisma'

async function getTotalStockValue() {
  const result = await prisma.produit.aggregate({
    _sum: {
      price: true,
    },
    where: {
      stock: {
        gt: 0,
      },
    },
  })

  return result._sum.price ?? 0
}

async function countLowStockProducts() {
  try {
    const threshold = 5

    const lowStockCount = await prisma.produit.count({
      where: {
        stock: {
          lte: threshold,
        },
      },
    })

    return lowStockCount
  } catch (error) {
    console.error('Erreur lors du comptage :', error)
    return 0
  }
}

export default async function DashboardStats() {
  
  const nombreProduit = await prisma.produit.count()
  const lowStock = await countLowStockProducts()
  const totalValue = await getTotalStockValue()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total Produits"
        value={nombreProduit}
        description="Produits enregistrés"
        icon={<Package className="text-blue-500" size={22} />}
      />

      <StatCard
        title="Stock Faible"
        value={lowStock}
        description="À réapprovisionner"
        icon={<AlertTriangle className="text-red-500" size={22} />}
      />

      <StatCard
        title="Valeur du Stock"
        value={totalValue}
        description="Valeur totale"
        icon={<DollarSign className="text-green-500" size={22} />}
      />

      <StatCard
        title="Catégories"
        value={8}
        description="Catégories actives"
        icon={<Layers className="text-purple-500" size={22} />}
      />
    </div>
  )
}