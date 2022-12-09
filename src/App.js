import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1>i am from Shop component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index={true} element={<Home></Home>}></Route>
        {/* Here in path="/home" index is added to tell that when in navigation <outlet> nothing is */}
        {/* Added please add this route just at the place of <outlet> */}
        <Route path="sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="Shop" element={<Shop></Shop>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
