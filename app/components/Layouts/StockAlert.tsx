import prisma from "@/lib/prisma"

interface Product {
  id: string
  name: string
  stock: number
}

async function getLowStock(): Promise<Product[]> {
  const result = await prisma.produit.findMany({
    where: {
      stock: {
        lt: 5,
      },
    },
    orderBy: {
      stock: "asc",
    },
    select: {
      id: true,
      name: true,
      stock: true,
    },
  })

  return result
}

export default async function StockAlert() {
  const lowStockProducts = await getLowStock()

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-white">
        ⚠️ Produits en stock faible
      </h2>

      <div className="space-y-3">
        {lowStockProducts.length === 0 ? (
          <p className="text-sm text-zinc-500">
            ✅ Aucun produit en stock faible
          </p>
        ) : (
          lowStockProducts.map((produit) => (
            <div
              key={produit.id}
              className="flex justify-between items-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800"
            >
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                {produit.name}
              </span>
              <span className="text-sm font-bold text-red-500">
                {produit.stock} restant
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}