import React, { useContext } from 'react'
import './CSS/StoreCategory.css'
import { StoreContext } from '../Context/StoreContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const StoreCategory = (props) => {
    const {all_product} = useContext(StoreContext)

    return (
        <div className='store-category'>
            <img className='storecategory-banner' src={props.banner} alt="" />
            <div className="storecategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="storecategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="storecategory-products">
                {all_product.map((item,i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>

                <div className="storecategory-loadmore">
                    Explore More
                </div>

        </div>
    )
}

export default StoreCategory