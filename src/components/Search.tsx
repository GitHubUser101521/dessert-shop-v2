import { useEffect, useRef } from "react"
import useCartStore from "../stores/AppStore"

function Search() {
    const { searchInput, setSearchInput, setCurrentCategory, currentCategory, setFilterPrice } = useCartStore()
    const searchInputRef = useRef<HTMLInputElement | null>(null)
    const selectFilterRef = useRef<HTMLSelectElement | null>(null)

    const categories = ['all', 'cake', 'frozen', 'cookie', 'pudding', 'pastry', 'fruit']

    useEffect(() => {
        setFilterPrice('high')
    }, [])

    return (
        <div className="w-full lg:w-2/10 bg-white mt-4 lg:mt-10 lg:mb-10 rounded-lg p-4">
            <div className="flex lg:flex-col gap-2">
                <input 
                    type="text" 
                    ref={searchInputRef} 
                    className="border-orange rounded-full px-3 py-1 outline-none w-full" 
                    placeholder="Search..."
                    onChange={() => setSearchInput(searchInputRef.current?.value || '')}
                    value={searchInput}
                />

                <div className="flex justify-between p-2">
                    <p className="hidden lg:block">Filter by</p>

                    <select 
                        className="outline-none lg:pr-8"
                        ref={selectFilterRef}
                        onChange={() => setFilterPrice(selectFilterRef.current?.value || '')}
                    >
                        <option value="high">{'Price (High)'}</option>
                        <option value="low">{'Price (Low)'}</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-2">

                <p className="font-bold text-2xl hidden lg:block">Category</p>

                {/* Big screen categories display */}
                <div className="lg:flex flex-col gap-2 hidden">
                {
                    categories.map(c => (
                        <button
                            onClick={() => setCurrentCategory(c || '')}
                            key={c}
                            className={`${currentCategory === c ? 'text-orange font-bold text-xl' : ''} text-left`}
                        >
                            { c.slice(0, 1).toUpperCase() + c.slice(1, c.length) }
                        </button>
                    ))
                }
                </div>

                {/* Small categories display */}
                <div className="mobile-categories">
                {
                    categories.map(c => (
                        <button
                            onClick={() => setCurrentCategory(c || '')}
                            key={c}
                            className={`${currentCategory === c ? 'text-orange font-bold' : ''} text-center rounded-full border border-orange px-2`}
                        >
                            { c.slice(0, 1).toUpperCase() + c.slice(1, c.length) }
                        </button>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Search
