const Sidebar = () => {
    return (
        <aside className="bg-yellow-50 border-l border-orange-400 h-full px-4">
            <div className="font-bricolage leading-none py-4 border-b border-orange- mb-4">
                <h1 className="text-2xl font-bold">Reva</h1>
                <p>am like a cover letter for your designs</p>
            </div>
            <div className="space-y-3">
                <div className="bg-white border py-2 px-3 rounded-xl">
                    <h2 className="font-bricolage font-medium text-lg">Background</h2>
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
                    <h2 className="font-bricolage font-medium text-lg">Your Design</h2>
                    <div className="my-2">
                        <div className="font-medium text-sm pb-1">Image</div>
                        <form className="max-w-sm">
                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                            <input type="file" name="file-input" id="file-input" className="cursor-pointer file:cursor-pointer bg-white block w-full border border-gray-200 shadow-sm rounded-lg text-sm font-semibold focus:z-10 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50 disabled:pointer-events-none file:bg-yellow-200 file:text-orange-500 file:border-0 file:me-4 file:py-3 file:px-4" />
                        </form>
                        <div className="mt-3 grid grid-cols-2 gap-x-2">
                            <div>
                                <div className="font-medium text-sm pb-1">Frame</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option selected>Browser Window</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div>
                                <div className="font-medium text-sm pb-1">Size</div>
                                <select className="py-3 outline-none border px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <option>Browser Window</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar