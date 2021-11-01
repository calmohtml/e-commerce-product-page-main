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

  const NavContainer = styled.nav`
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
  `;

  const Nav = styled.div`
    @media (min-width: 767px) {
      align-items: center;
      display: flex;
      flex: 1;
      padding: 2rem 0 4rem 0;
    }
  `;

  const NavHamburgerMenu = styled.span`
    display: inline;
    padding-right: 0.8rem;

    @media (min-width: 767px) {
      display: none;
    }
  `;

  const NavButton = styled.button`
    @media (min-width: 767px) {
      border: 1px solid red;
    }

    background-color: transparent;
    border: none;
  `;

  const NavSmallSize = styled.ul`
    position: fixed;
    top: 0;
    right: 4.688rem;
    width: 18.75rem;
    height: 100%;
    background-color: var(--white);
    list-style: none;
    transition-duration: 200ms;
    transform: translate3d(0, 0, 0);
    z-index: 2;

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
    margin: 1.3rem 1.2rem;
    background-color: transparent;
    border: none;
  `;

  const NavMediumSize = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 1.5rem;

    li {
      margin: 0rem 1rem;

      a {
        text-decoration: none;
        color: var(--darkGrayishBlue);
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  `;

  const NavAvatarCart = styled.div`
    @media (min-width: 767px) {
      padding: 2rem 0 4rem 0;
    }
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

  return (
    <NavContainer>
      <Nav>
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
      </Nav>
      <NavAvatarCart>
        <span>
          <img src={Cart} alt="Image of the cart" />
        </span>
        <span>
          <img src={Avatar} alt="Image of the avatar" />
        </span>
      </NavAvatarCart>
    </NavContainer>
  );
};

export default Navbar;
