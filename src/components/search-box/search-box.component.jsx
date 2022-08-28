// import { Component } from "react";
import "./search-box.styles.css"

// normalde parametre olarak (props) girip aşağıda back tick'lerin içine props.className,props.placeholder,props.onChangeHandler yazabilirdik,bu şekilde bunları parametre olarak girerek parçaladık.
const Searchbox = ({className,placeholder,onChangeHandler}) => (   // Tek satır olduğu için { } ve return kullanmadık.
         <input
            className= {`search-box ${className}`}
            type="search" 
            placeholder={placeholder}
            onChange={onChangeHandler }
        /> 
        
)



// class Searchbox extends Component {
//     render() {

//         return (
//             <input
//                 className= {`search-box ${this.props.className}`}
//                 type="search" 
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler }
//             />
//         )
    //     }
    // }


export default Searchbox

