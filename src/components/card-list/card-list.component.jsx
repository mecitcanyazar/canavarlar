// import { Component } from "react";
// import { useState } from 'react';
import  './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({canavarlar}) => ( 
// Tek satır olduğu için { } ve return kullanmadık. Normalde arrow func.'dan sonra {} kullanıp daha sonra da return () kullansak aynı şey.
         
        <div className='card-list'> 
             {canavarlar.map((canavar)=> {                // return'den sonra jsx kodu beklediği için () kullandık {} kullansaydık js kodu yazmamız lazımdı.Yani <h1> yazamazdık.
                const{name,email,id} = canavar           // Birden fazla yerde kullandığım için destructure kullandım.
               // key içinde id bilgisini kullanacağım için yukarıda parçaladım yoksa key içerisine canavar.id yazacaktım.
                return <Card key={id} canavar={canavar} />
            })}
        </div>
        )
    




// class CardList extends Component {
//     render() {
//         // console.log(this.props.canavarlar);
//         const {canavarlar} = this.props 
//         // console.log(this.props);

//         return (
//             <div className="card-list">
//                 {/* jsx'de js kodu yazdığım için {} kullandım. */}
//                 {canavarlar.map((canavar)=> {                   // return'den sonra jsx kodu beklediği için () kullandık {} kullansaydık js kodu yazmamız lazımdı.Yani <h1> yazamazdık.
//                     // const{name,email,id} = canavar           // Birden fazla yerde kullandığım için thistructure kullandım.
//                     return <Card canavar={canavar} />
//                  })}
//             </div>
//         )
//     }
// }

export default CardList