import Sidebar from '@/modules/public/modules/admin/components/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* 1. El Sidebar se mantiene fijo a la izquierda */}
        <Sidebar />
  
        {/* 2. El contenido principal ocupa el espacio restante */}
        <main className="flex-1 h-screen overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    );
  }
  
  export default layout;