import { Routes, Route } from "react-router";
import App from "../App";
import  About  from "../components/About";
import  Home  from "../components/Home";
import  {Products} from "../components/ProductsDashboard";
import  {SingleProductList}  from "../components/SingleProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route  exact path="/" element={<App />}>
        <Route exact  path="home" element={<Home />}></Route>
        <Route  exact path="about" element={<About />}></Route>
        <Route exact  path="products" element={<Products />} />
        <Route  exact path="products/:id" element={<SingleProductList />} />
      </Route>
    </Routes>
  );
};
