import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/layout";
import About from "./components/page/about"
import Products from "./components/page/products"
import Account from "./components/page/account"
import Gallery from "./components/page/gallery"
import IndexPage from './components/page';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='gallery' element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
