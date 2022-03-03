import React, { useState } from 'react'
import './Header.css' 
import {AiOutlineSearch} from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header() {    

    const [{basket, user}, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    } 

    

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://img.talkandroid.com/uploads/2014/06/Amazon_Logo_033.jpg"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"  />
                <AiOutlineSearch className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                        <span className="header__optionLineTwo">{user ?  "Sign Out" : "Sign In" }</span>
                    </div>
                </Link>
                <div className="header__option"> 
                    <span className="header__optionLineOne">Returns </span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> 

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <CgShoppingCart className="header__optionLineBasket header__basketCount" />
                    <span>{basket && basket.length}</span>
                </div>
                </Link>
            </div>            
        </div>       
    )
}

export default Header
