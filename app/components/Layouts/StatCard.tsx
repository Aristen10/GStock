'use client'

import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: number
  
  icon: ReactNode
  description?: string
}

export default function StatCard({
  title,
  value,
  icon,
  description,
}: StatCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>
          <h3 className="text-2xl font-bold text-zinc-800 dark:text-white">
            {value}
          </h3>
          {description && (
            <p className="text-xs text-zinc-400 mt-1">{description}</p>
          )}
        </div>

        <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800">
          {icon}
        </div>
      </div>
    </div>
  )
}