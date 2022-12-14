import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import HamburgerMenu from "../../HamburgerMenu";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../App";

const RightSidebar = ({ navRight, setNavRight }) => {
  const [currPage, setCurrPage] = useState("");
  const [expand, setexpand] = useState(false);
  const { pathname } = useLocation();
  const { setNavLeft } = useContext(AppContext);

  useEffect(() => {
    setCurrPage(pathname.slice(1, pathname.length) || "home");
  }, [pathname]);

  const RightSidebarRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!RightSidebarRef.current.contains(e.target)) {
        setNavRight(false);
      }
    });
  }, []);

  return (
    <Container
      ref={RightSidebarRef}
      className={`${navRight ? "rightSidebarMove" : "rightSidebarReset"}`}
    >
      <RightSidebergerTop>
        <div
          onClick={() => {
            setNavRight(!navRight);
            setNavLeft(false);
          }}
        >
          <HamburgerMenu open={navRight} />
        </div>
      </RightSidebergerTop>

      <Wrapper>
        {navRight ? (
          <Navbar>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <div
                  className="space-between"
                  onClick={() => setexpand(!expand)}
                >
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? "active_menu " : ""
                    }
                  >
                    Portfolio
                  </NavLink>
                  {/* <div>
                    {expand ? (
                      <RiArrowDropDownLine size={20} />
                    ) : (
                      <RiArrowDropRightLine size={20} />
                    )}
                  </div> */}
                </div>
                {/* {expand && (
                  <ul>
                    <li>Portfolio 1</li>
                    <li>Portfolio 2</li>
                    <li>Portfolio 3</li>
                  </ul>
                )} */}
              </li>
              <li>
                <NavLink
                  to="/history"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  Blog
                </NavLink>
              </li> */}
            </ul>
          </Navbar>
        ) : (
          <CurrentPage>{currPage && <p>{currPage}</p>}</CurrentPage>
        )}

        <RightSidebergerBottom>
          <div className="circle">
            <div className="bn">BN</div>
          </div>
          <div className="circle ">
            <div className="en active">EN</div>
          </div>
        </RightSidebergerBottom>
      </Wrapper>
    </Container>
  );
};

export default RightSidebar;

const Container = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.bg2};
  z-index: 1000;
  height: 100%;
  width: 21rem;
  color: #8c8c8e;
  position: absolute;
  top: 0;

  @media (max-width: 920px) {
    position: fixed;
    top: 0;
  }
`;
const RightSidebergerTop = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  padding-left: 3rem;
  height: 7rem;
  display: flex;
  align-items: center;
  @media (max-width: 920px) {
    margin-top: -0.2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 7rem);
`;

const RightSidebergerBottom = styled.div`
  width: 100%;
  height: 10rem;
  background: ${({ theme }) => theme.bg1};

  position: absolute;
  bottom: 0rem;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .circle {
    -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
    background: #1e1e28;
    font-size: 10px;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    margin-bottom: 10px;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    animation: move 0.7s ease-in-out;

    @keyframes move {
      0% {
        transform: translateX(15rem);
      }

      100% {
        transform: translateX(0rem);
      }
    }
    &:hover {
      color: ${({ theme }) => theme.lightColor};
    }
    .active {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      background-color: #ffc107;
      box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
      color: #1e1e28;
    }
  }
`;

const CurrentPage = styled.div`
  transform: rotate(90deg);
  transform-origin: 0% 300%;

  p {
    color: #8c8c8e;

    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: 500;

    animation: move 0.7s ease-in-out;

    @keyframes move {
      0% {
        transform: translateY(-15rem);
      }

      100% {
        transform: translateY(0rem);
      }
    }
  }
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 5rem;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      width: 100%;
      color: #8c8c8e;
      margin: 0.3rem 0rem;
      padding: 0rem 1rem 0rem 3rem;
      display: inline-block;
      width: 100%;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: 500;
      animation: move 0.7s ease-in-out;

      @keyframes move {
        0% {
          transform: translateX(15rem);
        }

        100% {
          transform: translateX(0rem);
        }
      }

      a {
        padding-right: 10rem;
        color: #8c8c8e;
        transition: 0.2s ease-in-out;

        &:hover {
          color: #fff;
        }
      }

      .active_menu {
        color: #fff;
      }

      .space-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        background: ${({ theme }) => theme.bg1};
        li {
          cursor: pointer;
          color: #8c8c8e;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
`;
