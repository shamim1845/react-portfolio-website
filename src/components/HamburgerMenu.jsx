import styled from "styled-components";

const HamburgerMenu = ({ open }) => {
  return (
    <Container>
      <div className="hamburger-lines">
        <span className={`line line1 ${open ? "rotate-line1" : ""}`}></span>
        <span className={`line line2 ${open ? "rotate-line2" : ""}`}></span>
        <span className={`line line3 ${open ? "rotate-line3" : ""}`}></span>
      </div>
    </Container>
  );
};

export default HamburgerMenu;

const Container = styled.div`
  .hamburger-lines {
    height: 1.5rem;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
    .line {
      height: 0.3rem;
      width: 100%;
      border-radius: 10px;
      background: #8c8c8e;
    }
    &:hover .line {
      transition: all 0.7s ease-out;
      background: #fff;
    }
    .line1 {
      transform-origin: 5% 33%;
      transition: transform 0.4s ease-in-out;
    }
    .line2 {
      transition: transform 0.2s ease-in-out;
    }
    .line3 {
      transform-origin: 8% 90%;
      transition: transform 0.4s ease-in-out;
    }
    .rotate-line1 {
      transform: rotate(45deg);
    }

    .rotate-line2 {
      transform: scaleY(0);
    }

    .rotate-line3 {
      transform: rotate(-45deg);
    }
  }
`;
