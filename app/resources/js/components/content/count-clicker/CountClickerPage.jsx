import React, {useState} from 'react';

import CountClicker from './CountClicker';
import CountClickerTotal from './CountClickerTotal';

export default function CountClickerPage() {
    let initState = {
        products: [
            {
                id: 1,
                name: 'iPhone',
                price: 200,
                count: 1,
                rest: 3,
            },
            {
                id: 2,
                name: 'Samsung',
                price: 180,
                count: 1,
                rest: 10,
            },
            {
                id: 3,
                name: 'Huawei',
                price: 135,
                count: 2,
                rest: 12,
            },
        ],
    };
    
    function calcTotal(whoCalls) {
        let initVal = {
            price: 0,
            count: 0,
        };
        
        console.log(this, whoCalls);
        
        return this.products.reduce((acc, item) => {
            
            acc.price += item.count * item.price;
            acc.count += item.count;
            
            console.log(acc);
            
            return acc;
        }, initVal);
    }
    
    initState.total = calcTotal.call(initState, 'initState');
    const [state, setState] = useState(initState);
    
    let changeProductCount = (newCount, i) => {
        let newState = {products: [...state.products]};
        newState.products[i] = {...newState.products[i], count: newCount};
    
        newState.total = calcTotal.call(newState, 'newState');
        
        setState(newState);
    };
    
    let productsList = state.products.map((product, i) => {
        return (
            <div className="col s12 m6 l4 xl3"
                 key={product.id}>
                <CountClicker
                    name={product.name}
                    price={product.price}
                    currentCount={product.count}
                    maxCount={product.rest}
                    changeCount={(newCount) => changeProductCount(newCount, i)}
                />
            </div>
        );
    });
    
    return (
        <React.Fragment>
            <div className="row">
                {productsList}
            </div>
            <CountClickerTotal
                totalPrice={state.total.price}
                totalCount={state.total.count}
            />
        </React.Fragment>
    );
}