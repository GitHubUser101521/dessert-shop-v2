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
        <div className="w-2/10 bg-white my-10 rounded-lg p-4">
            <input 
                type="text" 
                ref={searchInputRef} 
                className="border-orange rounded-full px-3 py-1 outline-none w-full mb-2" 
                placeholder="Search..."
                onChange={() => setSearchInput(searchInputRef.current?.value || '')}
                value={searchInput}
            />

            <div className="flex justify-between p-2">
                <p>Filter by</p>

                <select 
                    className="outline-none pr-8"
                    ref={selectFilterRef}
                    onChange={() => setFilterPrice(selectFilterRef.current?.value || '')}
                >
                    <option value="high">{'Price (High)'}</option>
                    <option value="low">{'Price (Low)'}</option>
                </select>
            </div>

            <div className="flex flex-col gap-4 p-2">

                <p className="font-bold text-2xl">Category</p>

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
        </div>
    )
}

export default Search
