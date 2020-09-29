import React, {useState} from 'react';

import CountClicker from './CountClicker';
import CountClickerTotal from './CountClickerTotal';

export default function AppContent() {
    let products = [
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
    ];
    
    let calcTotal = (allProducts) => {
        return allProducts.reduce((acc, item) => {
            acc.price += item.count * item.price;
            acc.count += item.count;
            
            console.log(acc);
            return acc;
        }, {
            price: 0,
            count: 0,
        });
    };
    
    const [productsState, setProductsState] = useState(products);
    const [totalState, setTotalState] = useState(calcTotal(productsState));
    
    let changeProductCount = (newCount, i) => {
        let newProductsState = [...productsState];
        let newProduct = {...newProductsState[i]};
        
        newProduct.count = newCount;
        newProductsState[i] = newProduct;
        
        setProductsState(newProductsState);
        setTotalState(calcTotal(productsState));
    };
    
    let productsList = productsState.map((product, i) => {
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
                totalPrice={totalState.price}
                totalCount={totalState.count}
            />
        </React.Fragment>
    );
}