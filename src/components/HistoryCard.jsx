import { useState } from "react";
import styled from "styled-components";

const HistoryCard = ({data}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <MarkLight>
        <div className="lamp_light">
          <div className="lamp_light_wrapper">
            <div className={`available_outer ${show && "block"}`}></div>
            <div
              className="available_inner"
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            ></div>
          </div>
        </div>
      </MarkLight>

      <div
        className="content"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="header">
          <div className="header_left">
            <h5>{data.institue}</h5>
            <div className="sub_title">
              <span>{data.role}</span>
              <span className="degree">{data.degree}</span>
              </div>
           
          </div>
          <div className="header_right">
            <span>{data.date}</span>
          </div>
        </div>

        <div className="body">
          <p> {data.comment} </p>
        </div>

        <div className="certificate_btn">
     
        </div>
      </div>
    </Container>
  );
};

export default HistoryCard;

const Container = styled.div`
  position: relative;
  


  .content {
    background: ${({ theme }) => theme.grayBg};
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem;
    margin-right: 7rem;
    position: relative;
    /* @media (max-width: 920px) {
        margin-right: 5rem;
   
    } */

    &::after{
        content: "";
        width:  1.8rem;
        height: 1.8rem;
        background: ${({ theme }) => theme.grayBg};
        position: absolute;
        top: 1.5rem;
        right: -.8rem;
        transform: rotate(45deg);
    }

    .header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;
      .header_left {
        h5 {
          color: ${({ theme }) => theme.lightColor};
          font-size: 14px;
          font-weight: 600;
        }
        .sub_title {
          margin-top: 5px;
          color: #646466;
          font-style: italic;
          font-size: 11px;
       
          .degree{
            margin-left: 5rem;
            color: ${({ theme }) => theme.orangeColor};
          }
        }
      }
    }
    .header_right {
      span {
        color: #646466;
        background: #20202a;
        padding: 5px 15px;
        border-radius: 15px;
        -webkit-box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
        box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
        font-size: 10px;
      }
    }

    .body {
      p {
        color: ${({ theme }) => theme.grayColor};
      }
    }
  }
`;

const MarkLight = styled.div`
  position: absolute;
  top: 0px;
  right: -4px;

  .lamp_light {
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
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        z-index: 999;
      }

      .block {
        background-color: ${({ theme }) => theme.lightColor};
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
        background: ${({ theme }) => theme.bg2};
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: solid 3px #ffc107;
        z-index: 1000;
      }
    }
  }
`;
