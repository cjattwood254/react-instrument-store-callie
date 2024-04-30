import React from "react";
import InstrumentItem from "./InstrumentItem";

const InstrumentList = ({instrumentItems, addToCart, removeFromCart, toggleFavorite}) => {
    return (
        <>
            {instrumentItems.map(item => (
                <InstrumentItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} handleClick1={handleClick1} handleClick2={handleClick2} />
            ))}
        </>
    )
};

export default InstrumentList;