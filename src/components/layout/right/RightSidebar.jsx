import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HamburgerMenu from "../../HamburgerMenu";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const RightSidebar = ({ open, setOpen }) => {
  const [currPage, setCurrPage] = useState("");
  const [expand, setexpand] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setCurrPage(pathname.slice(1, pathname.length) || "home");
  }, [pathname]);

  return (
    <Container style={open ? { right: "0rem" } : { right: "-15rem" }}>
      <Wrapper>
        <RightSidebergerTop>
          <div onClick={() => setOpen(!open)}>
            <HamburgerMenu open={open} />
          </div>
        </RightSidebergerTop>
        {open ? (
          <Navbar>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active_menu" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <span
                  className="space-between"
                  onClick={() => setexpand(!expand)}
                >
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? "active_menu" : undefined
                    }
                  >
                    Portfolio{" "}
                  </NavLink>
                  {expand ? <RiArrowDropDownLine /> : <RiArrowDropRightLine />}
                </span>
                {expand && (
                  <ul>
                    <li>Portfolio 1</li>
                    <li>Portfolio 2</li>
                    <li>Portfolio 3</li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    isActive ? "active_menu" : undefined
                  }
                >
                  History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active_menu" : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active_menu" : undefined
                  }
                >
                  Blog
                </NavLink>
              </li>
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
  background: ${({ theme }) => theme.bg2};
  overflow-x: hidden;
  width: 23rem;
  height: 100%;
  transition: all 0.7s ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  color: #8c8c8e;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const RightSidebergerTop = styled.div`
  width: 100%;

  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.bg1};
  padding-left: 3rem;
  height: 7rem;
  display: flex;
  align-items: center;
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

    animation: move 0.7s ease-in-out;

    @keyframes move {
      0% {
        transform: translateX(15rem);
      }

      100% {
        transform: translateX(0rem);
      }
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
  transform-origin: -15% 538%;
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
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    li {
      color: #8c8c8e;
      padding: 7px 30px;
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

      .active_menu {
        color: #fff;
      }

      .space-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
          font-size: 2.5rem;
        }
      }

      a {
        width: 20rem;
        color: #8c8c8e;
        transition: 0.2s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
      ul {
        li {
          transition: 0.2s ease-out;
          animation: move 0.7s ease-in-out;

          @keyframes move {
            0% {
              transform: translateX(15rem);
            }

            100% {
              transform: translateX(0rem);
            }
          }
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
