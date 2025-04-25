
function NoCartItem() {
    return (
        <div className='w-full flex flex-col justify-center items-center py-10'>
        <img src="/illustration-empty-cart.svg" />
        <p className='no-item-message'>Your added items will appear here</p>
        </div>
    )
}

export default NoCartItem
