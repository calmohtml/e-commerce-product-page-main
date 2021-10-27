import React, { useState, useEffect } from "react";

import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Close from "../images/icon-close.svg";
import styled from "styled-components";

/* 
Tengo que lograr hacer un navbar, que:
  * Cuando llegue a mobile, los links desaparezcan 

  * En su lugar, tiene que aparecen un Hambuger Menu

  * Cuando hago click en ese Hamburger Menu, por izquierda deberán aparecer los links, uno abajo del otro.

  * Cuando supere tablet (768px) SÍ O SÍ los elementos tiene que estar desplegados

  * Cuando supere tablet (768px) SÍ O SÍ el botón Hamburger tiene que desaparecer

*/

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);

      if (width > breakpoint) {
        setOpenHamburger(true);
      }
    };
  }, []);

  const Nav = styled.nav`
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
  `;

  const NavButton = styled.button`
    background-color: transparent;
    border: none;
  `;

  const NavAvatarCart = styled.div`
    display: flex;

    span {
      :last-child {
        padding-left: 1rem;
      }

      img {
        width: 1.6rem;
      }
    }
  `;

  const NavHamburgerMenu = styled.span`
    display: inline;
    padding-right: 0.8rem;

    @media (min-width: 767px) {
      display: none;
    }
  `;

  const NavMediumSize = styled.ul`
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const NavSmallSize = styled.ul`
    position: fixed;
    top: 0;
    right: 75px;
    width: 300px;
    height: 100%;
    transition: right 600ms ease-out;
    background-color: var(--white);
    list-style: none;

    li {
      margin: 2rem 1rem;

      a {
        text-decoration: none;
        font-weight: 700;
        color: var(--veryDarkBlue);
      }
    }
  `;

  const CloseHamburgerMenuButton = styled.button`
    margin: 1rem;
    background-color: transparent;
    border: none;
  `;

  return (
    <Nav>
      <div>
        <NavHamburgerMenu>
          <NavButton onClick={() => setOpenHamburger(!openHamburger)}>
            <img src={Menu} alt="Hamburger menu" />
          </NavButton>
        </NavHamburgerMenu>
        <img src={Logo} alt="Logo of Sneakers" />
        {openHamburger ? (
          <NavSmallSize>
            <CloseHamburgerMenuButton
              onClick={() => setOpenHamburger(!openHamburger)}
            >
              <img src={Close} alt="Close hamburger menu" />
            </CloseHamburgerMenuButton>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </NavSmallSize>
        ) : null}
        <NavMediumSize>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </NavMediumSize>
      </div>
      <NavAvatarCart>
        <span>
          <img src={Cart} alt="Image of the cart" />
        </span>
        <span>
          <img src={Avatar} alt="Image of the avatar" />
        </span>
      </NavAvatarCart>
    </Nav>
  );
};

export default Navbar;
