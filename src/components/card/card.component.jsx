// import { Component } from "react";
import "./card.styles.css"

    const Card = ({canavar}) =>  {  // const Card = (props) => {} diyip aşağıda props.name demek yerine direkt canavarları parametre olarak yazabiliriz.
            const {name,email,id} = canavar  // Destructure ile parçalara ayırdık.
            return (
                <div className="card-container" key={id}>
                    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`canavar ${name}`} />
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            )
        }




// class Card extends Component {
//     render() {
//         const{name,email,id} = this.props.canavar 
//             return (
//                 <div className="card-container" key={id}>
//                     <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`canavar ${name}`} />
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             )
//     }
// }

export default Card