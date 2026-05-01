"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/modules/shared/components/ui/select';
import {
    Plus, PowerOff, LayoutGrid, List, MapPin,
    Star, Pencil, Trash2, ChevronLeft, ChevronRight, Image as ImageIcon, Eye
} from 'lucide-react';
import { useState } from 'react';
import { path } from '../../admin/const/super-admin';
import { VETERINARIAS_DATA } from '../const/vet-list';
const TablesVet = () => {

    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');


    return (
        <section className="space-y-6">
            <div className="flex gap-4">
                <a href={path + "/veterinarias/crear-veterinaria"} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm">
                    <Plus size={18} />
                    Crear Veterinaria
                </a>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                    <PowerOff size={18} />
                    Desactivar Veterinaria
                </button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">

                <div className="flex items-center justify-between p-6 border-b border-gray-50 dark:border-gray-800">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Listado de Veterinarias</h3>

                    {/* <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 cursor-pointer rounded-md transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600' : 'text-gray-500'}`}
                        >
                            <List size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-1.5 cursor-pointer rounded-md transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600' : 'text-gray-500'}`}
                        >
                            <LayoutGrid size={20} />
                        </button>
                    </div> */}

                </div>

                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50/50 dark:bg-gray-800/30 text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    <div className="col-span-3">Nombre de Veterinaria</div>
                    <div className="col-span-2">Ubicación</div>
                    <div className="col-span-2 text-center">Estado</div>
                    <div className="col-span-2">Planes</div>
                    <div className="col-span-1 text-center">Rating</div>
                    <div className="col-span-2 text-right">Opciones</div>
                </div>

                <div className="divide-y divide-gray-50 dark:divide-gray-800">
                    {VETERINARIAS_DATA.map((vet) => (
                        <div key={vet.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">

                            <div className="col-span-3 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
                                    <ImageIcon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-white leading-none">{vet.name}</h4>
                                    <span className="text-[10px] text-gray-400 uppercase">ID: {vet.id}</span>
                                </div>
                            </div>

                            <div className="col-span-2 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin size={16} className="text-emerald-400" />
                                {vet.address}
                            </div>

                            <div className="col-span-2 flex justify-center">
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {vet.status}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="flex items-center justify-between px-3 py-1.5  rounded-lg text-xs font-medium ">
                                    <Select>
                                        <SelectTrigger className="w-[180px] cursor-pointer">
                                            <SelectValue placeholder="planes" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {vet.plan.map(e => (
                                                    <SelectItem key={e} value={e}>{e}</SelectItem>

                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                </div>
                            </div>

                            <div className="col-span-1 flex justify-center">
                                <Star size={18} className="text-amber-400 fill-amber-400" />
                            </div>

                            <div className="col-span-2 flex justify-end gap-4">


                                <a href={`${path}/veterinarias/${vet.id}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                                    <Eye size={18} />
                                </a>
                                <button className="cursor-pointer text-gray-400 hover:text-blue-500 transition-colors">
                                    <Pencil size={18} />
                                </button>
                                <button className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="px-6 py-4 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Mostrando 1 a 10 de 150 veterinarias</span>
                    <div className="flex gap-2">
                        <button className="p-2 border dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>
                        {[1, 2, 3].map(page => (
                            <button key={page} className={`px-3 py-1 rounded-md border dark:border-gray-800 transition-colors ${page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                                {page}
                            </button>
                        ))}
                        <button className="p-2 border dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TablesVet