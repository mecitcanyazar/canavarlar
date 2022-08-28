
   import './App.css' 
   // import { Component } from 'react'                // class component için
   import { useState, useEffect } from 'react'         // function component için
   import CardList from './components/card-list/card-list.component'
   import SearchBox from './components/search-box/search-box.component'

   // -------------------------------- Function Component Start --------------------------------------------------

   
   const App = () => {
     // console.log('render')
     //Destructure ile diziyi parçaladık ve aşağıda filtrelenmişCanavarları oluştururken kullandık.
     const [aramaAlanı, setAramaAlanı] = useState('') // değer, fonksiyon   //useState yöntemi bize iki değerden oluşan bir dizi veriyor.ilki saklamak istediğimiz değer,ikinicisi ise bir fonksiyon olacaktır.
     const [title,setTitle] = useState(" ")
     const [canavarlar, setCanavarlar] = useState([])
     const [filtrelenmişCanavarlar, setFiltrelenmişCanavarlar] = useState(canavarlar)

       console.log("işlendi");
     // const [dizeAlanı, setDizeAlanı] = useState('')
     // console.log('render')
   
     useEffect(() => {    // ilki callback function,ikincisi gereklilikler dizisi.Gereklilikler dizisinde bir durum değiştiğinde ( props ya da state durumu) callback func.çalışacak.İlk başta gereklilikler listesini boş bırakıyorum çünkü en başta sayfa yüklendiğinde çalışması için bir durum değiştiğinde değil.
       console.log('effect ateşlendi')
       fetch('https://jsonplaceholder.typicode.com/users')
         .then((res) => res.json())
         .then((users) => setCanavarlar(users))
     }, [])
   
     useEffect(() => {
       const yeniFiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
         return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
       })
       setFiltrelenmişCanavarlar(yeniFiltrelenmişCanavarlar)
       console.log('Effect2 ateşlendi')
     }, [canavarlar, aramaAlanı])
   
   
       //  console.log(aramaAlanı); // useState ile dize döner.

     const aramaDeğişikliği = (e) => {
       const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
       setAramaAlanı(aramaAlanıDizesi)
     }
      
     const başlıkDeğiştirici = (e) => {
       const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
       setTitle(aramaAlanıDizesi)
     }
      
   
     // const dizeDeğişimi = (e) => {
     //   setDizeAlanı(e.target.value)
     // }
   
     // const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
     //   return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
     // })
     // console.log(filtrelenmişCanavarlar)
     return (
       <div className='App'>
         <h1 className='app-title'>{title}</h1>
         <SearchBox
           onChangeHandler={aramaDeğişikliği}
           placeholder='canavaları ara...'
           className='monsters-search-box'
         />
         <br />
         <SearchBox
           onChangeHandler={başlıkDeğiştirici}
           placeholder='başlıkları ara...'
           className='title-search-box'
         />
         {/* <SearchBox onChangeHandler={dizeDeğişimi} placeholder='dize ayarla...' /> */}
         <CardList canavarlar={filtrelenmişCanavarlar} />
       </div>
     )
   }


   // -------------------------------- Function Component End --------------------------------------------------



// -------------------------------- Class Component Start --------------------------------------------------

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//     canavarlar : [], 
//     aramaAlanı : "",     
//     }
//     // console.log('constructor');

//   }
//   componentDidMount() {
//     // console.log('componendidmount');

//     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>
//     res.json())
//     .then((users)=>
//     this.setState(
//       () =>  {
//       return {canavarlar:users}
//     }
//     // () => {
//     //   console.log(this.state);
//     //     }
//       ) 
//     )
//   }

//   aramaDeğişikliği = (e) => {
//     const aramaAlanı = e.target.value.toLocaleLowerCase()
//     this.setState(         // setState ile nesne döner.
//       ()=>{
//       return {aramaAlanı}
//       }
//     )
//   }
  
//   render() {
//     //  ------------ !!  Destructure ile aslında nesnenin ya da dizinin içindekileri sonra değişken olarak kullanabilmek için parçalıyoruz !! ------------------
//     const {canavarlar,aramaAlanı} = this.state   // this.state.canavarlar = {canavarlar} && this.state.aramaAlanı = {aramaAlanı}
//     const {aramaDeğişikliği} = this               // this.aramaDeğişikliği = {aramaDeğişikliği}
//     // console.log('render');
//     const filtrelenmişCanavarlar = canavarlar.filter((canavar)=>{ 
//       return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
//      })
     
//     return <div className="App"> 
      
//       {/* {filtrelenmişCanavarlar.map((canavar)=>{
//         return (
//           <div key={canavar.id}> 
//           <h1>{canavar.name}</h1>
//           </div>
//           )
//         })} */}
//       <h1 className='app-title'>Canavarlar</h1>
//       <Searchbox onChangeHandler = {aramaDeğişikliği} placeholder = "canavarları ara" className="monsters-search-box"/>
//       <CardList canavarlar={filtrelenmişCanavarlar} />
    
//     </div>
        
   
      
    
//   }
// }


// -------------------------------- Class Component End --------------------------------------------------


export default App;








