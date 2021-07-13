import React from 'react'

function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина <img className="cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="close" />
                </h2>
                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>
                            <div className="mr-20 d-flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartTotalBlock">
                    <ul className="cartTotalBlock">
                        <li className="d-flex">
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer
