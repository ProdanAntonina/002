import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/layout";
import About from "./components/page/About";
import Products from "./components/page/Products";
import Account from "./components/page/Account";
import Gallery from "./components/page/Gallery";
import IndexPage from './components/page';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='gallery' element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
