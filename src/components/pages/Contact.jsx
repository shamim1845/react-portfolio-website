import styled from "styled-components";
import ContactInfoCard from "../../components/ContactInfoCard";
import ContactForm from "../ContactForm";
import ContentHeaderInfo from "../ContentHeaderInfo";


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
 
  ];
  return (
    <Container
      className="container">
        <ContentHeaderInfo
        title='Contact'
        desc='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.'
         />
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
margin-top: -5rem;
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
