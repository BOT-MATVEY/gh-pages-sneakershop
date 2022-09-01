import React from 'react';



function PopUp({onClickClosePopUp, order}) {
console.log(order)

 return (
        
    <div className="PopUp">
        <div className="drawerOverlay" onClick={onClickClosePopUp}/>
        <div className="Body">
                <h1 className="Title">Заказ #{order.id}</h1>
                <div >   
                <ul className="orderBorder" 
                        style={{
                            margin:0,
                            padding:"20px 0 0"
                            }} >                 
                       {order.OrderItems.map(item => 
                        
                            <li style={{cursor:"default"}}>
                                <span className="mainText" 
                                    style= {{fontSize:13}}> {item.SneakerName} </span> 
                                        
                                <span className="PriceText"
                                    style={{fontSize:13}}> ЦЕНА: {item.SneakerPrice.toLocaleString()} руб.</span>
                            </li>
                        )}
                        <div style={{marginTop:"10px", position:"relative", borderBottom:"0"}}><span style={{position:"absolute", right:"0px", cursor:"default"}}>Итого: {order.SumPrice.toLocaleString() + " руб."}</span> </div>
                </ul>
                         
                </div>
                
        </div>
       
    </div>

    
    ) 
}

export default PopUp 