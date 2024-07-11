import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="bg-yellow-50 border-l border-orange-400 h-full px-4">
            <div className="font-bricolage leading-none py-4 border-b border-orange- mb-4">
                <h1 className="text-2xl font-bold">Reva</h1>
                <p>am like a cover letter for your designs</p>
            </div>
            <div className="space-y-3">
                <div className="bg-white border py-2 px-3 rounded-xl">
                    <h2 className="font-bricolage font-semibold text-base">Background</h2>
                    <div className="my-2">
                        <div className="font-medium text-sm pb-1">Image</div>
                        <form className="max-w-sm">
                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                            <input type="file" name="file-input" id="file-input" className="cursor-pointer file:cursor-pointer bg-white block w-full border border-gray-200 shadow-sm rounded-lg text-sm font-semibold focus:z-10 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50 disabled:pointer-events-none file:bg-yellow-200 file:text-orange-500 file:border-0 file:me-4 file:py-3 file:px-4" />
                        </form>
                        <div className="mt-3 grid grid-cols-2 gap-x-2">
                            <div>
                                <div className="font-medium text-sm pb-1">Blur</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected>Open this select menu</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div>
                                <div className="font-medium text-sm pb-1">Size</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected>Open this select menu</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border py-2 px-3 rounded-xl">
                    <h2 className="font-bricolage font-semibold text-base">Your Design</h2>
                    <div className="my-2">
                        <div className="font-medium text-sm pb-1">Image</div>
                        <form className="max-w-sm">
                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                            <input type="file" name="file-input" id="file-input" className="cursor-pointer file:cursor-pointer bg-white block w-full border border-gray-200 shadow-sm rounded-lg text-sm font-semibold focus:z-10 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50 disabled:pointer-events-none file:bg-yellow-200 file:text-orange-500 file:border-0 file:me-4 file:py-3 file:px-4" />
                        </form>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                            <div className="col-span-2">
                                <div className="font-medium text-sm pb-1">Frame</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected>Browser Window</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <div className="font-medium text-sm pb-1">Width</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>2x Large</option>
                                </select>
                            </div>
                            <div className="col-span-4">
                                <div className="font-medium text-sm pb-1">Position</div>
                                <div className="grid grid-cols-2 gap-x-2 place-content-between">
                                    <div className="flex w-full border divide-x rounded-lg">
                                        <span className="w-full h-10 grid place-items-center hover:bg-gray-100 cursor-pointer"><ArrowUp size={18} /></span>
                                        <span className="w-full h-10 grid place-items-center hover:bg-gray-100 cursor-pointer"><ArrowDown size={18} /></span>
                                    </div>
                                    <div className="flex w-full border divide-x rounded-lg">
                                        <span className="w-full h-10 grid place-items-center hover:bg-gray-100 cursor-pointer"><ArrowLeft size={18} /></span>
                                        <span className="w-full h-10 grid place-items-center hover:bg-gray-100 cursor-pointer"><ArrowRight size={18} /></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar