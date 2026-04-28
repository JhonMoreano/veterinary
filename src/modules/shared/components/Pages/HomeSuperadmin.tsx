import { DASHBOARD_DATA } from '@/modules/const/super-admin'
import { MapPin, PieChart } from 'lucide-react'

const HomeSuperadmin = () => {
  return (
    <main className="flex-1 flex flex-col p-8 bg-gray-50 dark:bg-gray-950 gap-y-10">

      {/* SECCIÓN 1: Métricas de Resumen */}
      <section>
        <header className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Estado del Sistema</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DASHBOARD_DATA.summaryMetrics.map((metric) => (
            <div key={metric.id} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{metric.label}</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                {metric.value.toLocaleString()}
                {metric.suffix && <span className="text-lg font-normal text-gray-400"> {metric.suffix}</span>}
              </h2>
              {metric.percentage && (
                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-green-500 h-1.5 rounded-full"
                    style={{ width: `${metric.percentage}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: Análisis Detallado */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card Izquierda: Planes */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-8 text-gray-800 dark:text-white">
              <PieChart size={20} className="text-blue-500" />
              <h3 className="font-bold">Distribución de Planes</h3>
            </div>

            <div className="space-y-6">
              {DASHBOARD_DATA.subscriptionPlans.map((plan) => (
                <div key={plan.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-600 dark:text-gray-400">{plan.name}</span>
                    <span className="font-bold text-gray-900 dark:text-white">{plan.count} vete.</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`${plan.color} h-2.5 rounded-full transition-all duration-500`}
                      style={{ width: `${plan.percentageOfTotal}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Derecha: Usuarios Clicks por Ciudad */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-8 text-gray-800 dark:text-white">
              <MapPin size={20} className="text-red-500" />
              <h3 className="font-bold">Interacción por Ciudad</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs uppercase text-gray-400 border-b border-gray-100 dark:border-gray-800">
                    <th className="pb-4 font-semibold">Ciudad</th>
                    <th className="pb-4 font-semibold">Clicks Totales</th>
                    <th className="pb-4 font-semibold text-right">Porcentaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {DASHBOARD_DATA.clicksByCity.map((item) => (
                    <tr key={item.city} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.city}
                      </td>
                      <td className="py-4 text-sm text-gray-500">
                        {item.rawCount.toLocaleString()}
                      </td>
                      <td className="py-4 text-sm font-bold text-right text-blue-600 dark:text-blue-400">
                        {item.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeSuperadmin