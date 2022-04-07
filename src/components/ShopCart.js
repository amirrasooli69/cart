import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../context/CartContextProvider';

//Component
import Cart from './shared/Cart';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items</span>{state.itemsCounter}</p>
                    <p><span>Total Payment</span>{state.total}</p>
                    <div>
                        <button onClick={()=> dispatch({type:'CHECKOUT'})}>Check Out</button>
                        <button onClick={()=> dispatch({type:'CLEAR'})}>Clear</button>

                    </div>
                </div>
            }

            {
                state.checkout && <div>
                    <h3>Check Out Successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to='/products'>Go To Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;