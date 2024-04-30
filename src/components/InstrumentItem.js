import React from "react";

const InstrumentItem = ({item, addToCart, removeFromCart, toggleFavorite}) => {
    return(
        <>
            <h3>{item.title}</h3>
            <p>Instrument Type: {item.type}</p>
            <button onClick ={() => addToCart(item)}> Add to Cart</button>
            <button onClick ={() => removeFromCart(item)}>Remove from Cart</button>
            <button onClick ={() => toggleFavorite(item)}>{item.isFavorite ? "Unfavorite" : "Favorite"}</button>
            <button onClick={handleClick1}>+1</button>
            <button onClick={handleClick2}>-1</button>
        </>
    )
};

export default InstrumentItem;