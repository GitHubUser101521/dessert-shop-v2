import { ItemCard } from './Components'
import useAppStore from "../stores/AppStore"
import { allItems as items } from '../../data'

function ItemDisplay() {
    const { searchInput, currentCategory, filterPrice } = useAppStore()

    const filteredItems = items.filter(item => {
        if (currentCategory === 'all') {
            return searchInput ? item.name.toLowerCase().includes(searchInput) : true;
        }

        return (currentCategory ? item.category === currentCategory : true) &&
               (searchInput ? item.name.toLowerCase().includes(searchInput) : true);
    })
    
    return (
        <div className="lg:w-5/10 h-full rounded-lg p-4 lg:py-10 overflow-y-auto">
            {
                filteredItems.length <= 0 && 
                <div className="w-full flex flex-col justify-center items-center h-full">
                    <img src="/illustration-empty-cart.svg" alt="No item matches description" />
                    <p>No item matches description</p>
                </div>
            }
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                filteredItems
                .sort((a, b) => {
                    if (filterPrice === 'high') {
                        return b.price - a.price //Sort high to low
                    }
                    
                    return a.price - b.price //Sort low to high
                })
                .map(i => (
                    <ItemCard {...i} key={i.name}/>
                ))
            }
            </div>
        </div>
    )
}

export default ItemDisplay
