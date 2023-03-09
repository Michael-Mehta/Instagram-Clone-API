import React from 'react'
import { BsFillHouseDoorFill, BsSearch, BsCompass,
  BsChatText, BsHeart, BsPlusSquare} from 'react-icons/bs';
 import { BiMoviePlay } from "react-icons/bi";
 import { GiDove, GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({setShowPost}) => {

  return (
    <div className='naVbar'>
        <div className='naVItems'>
          <h1>Instagram</h1>

        <div><div><BsFillHouseDoorFill/></div><div>Home</div></div>
        <div><div><BsSearch/></div><div>Search</div></div>
        <div><div><BsCompass/></div><div>Explore</div></div>
        <div><div><BiMoviePlay/></div><div>Reels</div></div>
        <div><div><BsChatText/></div><div>Messages</div></div>
        <div><div><BsHeart/></div><div>Notifications</div></div>
        <div onClick={() => setShowPost(true)}><div><BsPlusSquare/></div><div>Create</div></div>
        <div><div>Profile</div></div>
        <div><div><GiHamburgerMenu/></div><div>More</div></div>
        </div>

    </div>
  )

}

export default NavBar