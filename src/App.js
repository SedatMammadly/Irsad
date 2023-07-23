import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Header from "./Component/Header";
import { Context, product} from "./Component/Context";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import PrivatePannier from './Component/PrivatePannier';
import Product from './Component/Product';
function App() {
  const [isActive, setIsActive] = useState(false)
  const[pannierCount,setPannierCount]=useState(0)
  const [pannier,setPannier]=useState([])
  const[offers,setOffers]=useState(product)
  const [ modal7, setModal7 ] = useState(false)
  const addPannier =(id, model, discount, offer, discountPrice, img, category, discounte, count) => {
    const newItem = { id, model, discount, offer, discountPrice, img, category };
    setModal7(true);
    pannier.push({
      id: id,
      model: model,
      discount: discount,
      offer: offer,
      img: img,
      category: category,
      discountPrice: discountPrice,
      discounte: discounte,
      count: count
    });
    setPannierCount(pannierCount+1)
  };
  const pannierGo=()=>{
    setModal7(false)
    window.scrollTo(0,0)
  }
  
  const productGo=()=>{
    window.scrollTo(0,0)
  }
 
  const deleteBtn = (id, discountPrice) => {
    const deleteButton = pannier.filter(item => item.id !== id)
    setPannier(deleteButton)
    setPannierCount(pannierCount - 1)
  }
  const pannierClose=()=>{
    setModal7(false)
  }

  const incrementCount = (id) => {
    setPannier(prevPannier => {
        return prevPannier.map(item => {
            if (item.id === id && item.count < 10) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
    });
};


const decrementCount = (id) => {
    setPannier(prevPannier => {
        return prevPannier.map(item => {
            if (item.id === id && item.count > 1) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        });
    });
};

const data={
isActive,
pannier,
setPannier,
productGo,
pannierGo,
incrementCount,
decrementCount,
setIsActive,
pannierCount,
offers,
setOffers,
setPannierCount,
addPannier,
pannierClose,
deleteBtn,
modal7,
setModal7
}
  return (
    <Context.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:id" element={<Product/>}/>
            <Route path='/PrivatePannier' element={<PrivatePannier/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
