import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="bg-yellow-50 border-l border-orange-400 h-full px-4 flex flex-col justify-between">
            <div>
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
            </div>
            <div className="flex items-center justify-between py-4">
                <a href="https://github.com/ashokasec/reva" target="_blank" rel="noopener noreferrer" className="inline-block" title="Reva's Github Repo">
                    <button className="bg-black text-[15px] text-white font-semibold py-2 px-3 rounded-full shadow-lg hover:shadow-xl flex items-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.004 2.045.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.654 1.649.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.922.43.37.814 1.096.814 2.207v3.281c0 .321.217.694.825.576 4.765-1.586 8.199-6.083 8.199-11.385 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Contribute
                    </button>
                </a>

                <p className="text-[15px] font-medium">Made by <a href="https://twitter.com/ashokasec" target="_blank" rel="noopener noreferrer">@ashokasec</a></p>
            </div>
        </aside>
    )
}

export default Sidebar