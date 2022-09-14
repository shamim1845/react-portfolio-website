import React from "react";
import styled from "styled-components";
import { FaExpand } from "react-icons/fa";

const Profile = () => {
  return (
    <Container>
      <div className="avatar">
        <div className="avatar_wrapper">
          <img
            src="https://elanta.app/nazar/arter-demo-new/img/face-1.jpg"
            alt="Profile Pic"
          />
          <span>
            {" "}
            <FaExpand />
          </span>
          <div className="lamp_light">
            <div className="lamp_light_wrapper">
              <div className="available_outer"></div>
              <div className="available_inner"></div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="avatar_name">Md Shamim Hossain</h5>
      <p className="avatar_desc">
        Front-end Developer, <br /> focused on MERN stack Development
      </p>
    </Container>
  );
};

export default Profile;
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.bg1};
    z-index: 10;
  @media (max-width: 920px) {
padding: 0;
}

  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar_wrapper {
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      position: relative;
      padding: 2rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 40%;
        left: 40%;
        color: red;
        cursor: pointer;
        font-size: 2rem;
      }
      .lamp_light {
        position: absolute;
        right: 0.9rem;
        bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;
        cursor: pointer;

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
  }
  .avatar_name {
    color: ${({ theme }) => theme.lightColor};
    text-align: center;
    margin-bottom: 1rem;
  }
  .avatar_desc {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
