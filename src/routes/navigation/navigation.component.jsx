import { Fragment  ,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context'; //to get the current user -
import { CartContext } from '../../contexts/cart.context';
// -value that we already set in sign-in compnent 

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// 8888888888888888888 signout

import {signOutUser} from "../../utils/firebase/firebase.utils"
// 88888888888888

import './navigation.styles.scss';


const Navigation = () => {
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext)
  // console.log("form navigatioin compoonet")
  // console.log(currentUser)


  // const signOutHandler=async ()=>{ 
  //   // const res= await signOutUser()
  //   // console.log(res);
  //   await signOutUser()
  //   setCurrentUser(null)
  // } 
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
{/* 3333333333333333333333333333333333333 */}
          {
        currentUser ?(<span className="nav-link" onClick={signOutUser}> SIGN OUT</span>)
        :(<Link className='nav-link' to='/auth'>
        SIGN IN
      </Link>)
          }
{/* 333333333333333333333333333333 */}
          <CartIcon/>
          
        </div>
       {isCartOpen&& <CartDropdown></CartDropdown>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
