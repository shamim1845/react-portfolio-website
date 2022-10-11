import styled from "styled-components";
import { FaExpand } from "react-icons/fa";
import { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppContext } from "../../../App";
import img from "../../../assets/images/shamim-avatar2.jpg";
import Picture from "../../../assets/images/shamim.jpg";
import Fancybox from "../../FancyBox";

const Profile = () => {
  const [show, setShow] = useState(true);
  const { navLeft, setNavLeft, navRight, setNavRight } = useContext(AppContext);

  return (
    <>
      <Container>
        <div className="avatar">
          <div
            className="menu_btn"
            onClick={() => {
              setNavLeft(!navLeft);
              setNavRight(false);
            }}
          >
            <BsThreeDotsVertical />
          </div>
          <div className="avatar_wrapper">
            <Fancybox options={{ infinite: false }}>
              <div
                data-fancybox="responsive"
                data-src={Picture}
                data-sizes="(max-width: 600px) 480px, 800px"
              >
                <img src={img} alt="Profile Pic" />
                <span>
                  {" "}
                  <FaExpand size={12} />
                </span>
              </div>
            </Fancybox>
            <div
              className="lamp_light"
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div className="lamp_light_wrapper">
                <div className="available_outer"></div>
                <div className="available_inner"></div>
              </div>
            </div>
          </div>

          <div className={`available_info ${show && "showcontainer"}`}>
            <div className="available_info_inner">
              <p>I am available for freelance hire</p>
              <div></div>
            </div>
          </div>
        </div>
        <h5 className="avatar_name">Md Shamim Hossain</h5>
        <p className="avatar_desc">
          Front-end Developer, <br /> focused on MERN stack Development
        </p>
      </Container>
    </>
  );
};

export default Profile;
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2rem 0;
  background: ${({ theme }) => theme.bg1};
  z-index: 10;
  @media (max-width: 1100px) {
    padding: 1rem 0;
  }
  @media (max-width: 920px) {
    padding: 0.5rem 0;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .avatar_wrapper {
      width: 9rem;
      height: 9rem;
      position: relative;
      margin: 2rem;
      cursor: pointer;
      &:hover span {
        opacity: 0.5;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
      }
      span {
        background: ${({ theme }) => theme.bg2};
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;
        position: absolute;
        top: 35%;
        left: 36%;
        opacity: 0;

        &:hover {
          opacity: 1 !important;
        }

        svg {
          color: ${({ theme }) => theme.lightColor};
        }
      }
      .lamp_light {
        position: absolute;
        right: -1rem;
        bottom: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;

        .lamp_light_wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 1rem;

          .available_outer {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: #229922fd;

            animation: glow 1.5s ease-out infinite;
            @keyframes glow {
              0% {
                transform: scale(0);
                opacity: 1;
              }

              25% {
                transform: scale(0.5);
                opacity: 0.8;
              }
              50% {
                transform: scale(1);
                opacity: 0.6;
              }
              75% {
                transform: scale(1.1);
                opacity: 0.4;
              }
              100% {
                transform: scale(1.2);
                opacity: 0.1;
              }
            }
          }
          .available_inner {
            position: absolute;
            top: 0.5;
            right: 0.5;

            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: #03fa03;
          }
        }
      }
    }

    .available_info {
      width: 10rem;
      height: 3.8rem;
      position: absolute;
      right: -10rem;
      top: 9rem;
      background-color: #229922fd;
      color: ${({ theme }) => theme.lightColor};
      border-radius: 0 5px 5px 5px;
      transition: all 0.7s ease-in-out;

      @media (max-width: 920px) {
        top: 9rem;
        right: -10rem;
      }

      .available_info_inner {
        vertical-align: center;
        padding: 0.5rem;

        p {
          font-size: 1rem;
        }
      }
    }
    .showcontainer {
      opacity: 1;
      right: 0.5rem;
    }

    .menu_btn {
      position: absolute;
      top: 1.6rem;
      right: 2rem;

      color: #8c8c8e;
      cursor: pointer;
      font-size: 2rem;
      font-weight: 900;
      visibility: hidden;
      transition: all 0.7s ease-in-out;
      @media (max-width: 920px) {
        visibility: visible;
      }

      &:hover {
        color: ${({ theme }) => theme.lightColor};
      }
    }
  }
  .avatar_name {
    color: ${({ theme }) => theme.lightColor};
    text-align: center;
    margin-bottom: 1rem;
  }
  .avatar_desc {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;
