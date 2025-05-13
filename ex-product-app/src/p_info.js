import React, { useState, useEffect } from 'react';
import './css/styles.css';
import { call } from './service/ApiService';
import AddProduct from './AddProduct';

function P_info() {
    // 상품 정보를 담는 useState
    const [items, setItems] = useState([]);
    // 상품 추가 창
    const [open, setOpen] = useState(true);

    useEffect(() => {
        call("/product", "GET")
            .then(result => setItems(result));
    }, []);

    const onButtonClick = () => {
        setOpen(false);
    };

    // 버튼
    let addProduct = <button type="button" onClick={onButtonClick}>상품추가</button>;

    // 추가창
    let addProductScreen = <AddProduct />;

    let addButton = addProduct;

    // open이 false가 되면 상품추가 창을 연다.
    if (!open) {
        addButton = addProductScreen;
    }

    let productItems = items.length > 0 && (
        <table border="1">
            <thead>
                <tr>
                    <th>상품 번호</th>
                    <th>상품 이름</th>
                    <th>상품 재고</th>
                    <th>상품 가격</th>
                    <th>등록 날짜</th>
                    <th>수정 날짜</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.productId}>
                        <td>{item.productId}</td>
                        <td>{item.productName}</td>
                        <td>{item.productStock}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.registerDate}</td>
                        <td>{item.updateDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className='container'>
            {addButton}
            {productItems}
        </div>
    );
}

export default P_info;