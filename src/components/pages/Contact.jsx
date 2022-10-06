import styled from "styled-components";
import ContactInfoCard from "../../components/ContactInfoCard";
import ContactForm from "../ContactForm";


const MyServices = () => {

  const data = [
    {
      country: "Bangladesh",
      city: "Dhaka",
      Division: "Dhaka",
    },
    {
      email: "samimraj1845@gmail.com",
      telegram: "@samim1845",
      WhatsApps: "01631-132907",
    },
    {
      support_service: "+78 (098) 326 11 22",
      office: "+78 (098) 326 11 22, ",
      personal: "01631-132907",
    },
  ];
  return (
    <Container
      className="container">
      <h4>Contact information</h4>
      <div className="cards">
        {data?.map((card, index) => {
          return <ContactInfoCard key={index} card={card} />;
        })}
      </div>
      <h4>Get in touch</h4>
      <ContactForm />

  
    </Container>
  );
};

export default MyServices;

const Container = styled.div`
  h4 {
    color: ${({ theme }) => theme.lightColor};
    padding: 2.5rem 0;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
`;
