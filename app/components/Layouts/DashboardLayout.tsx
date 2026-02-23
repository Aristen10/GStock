
import Link from "next/link"
import DashboardStats from "./DashboardStats"
import StockAlert from "./StockAlert"
import { FaArrowLeft } from "react-icons/fa"
import ScrollReveal from "../ScrollReveal"
import DelayedReveal from "../DelayReveal"


export default function DashboardLayout() {
  return (
    <div className="space-y-6 gap-4"  >
    
      <div className="space-y-3">
        <Link href="/" className="flex items-center gap-2 border w-fit px-3 py-1 rounded-md font-semibold text-[#e5e7e6] hover:bg-gray-500">
            <FaArrowLeft />
            <span>retour au Menu</span>
      </Link>
        <h1 className="text-3xl font-bold  dark:text-white text-[#e5e7e6]">
          Dashboard GStock
        </h1>
        <p className="text-md text-zinc-500">
          Vue d'ensemble de votre stock
        </p>
      </div>

     <ScrollReveal>
        <DashboardStats />
     </ScrollReveal>
     

     
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ScrollReveal>
            <StockAlert />
        </ScrollReveal>
        
      <DelayedReveal>
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          <p className="text-zinc-500 p-8">
            📊 Graphique 
          </p>
        </div>


      </DelayedReveal>
        
      </div>
    </div>
  )
}