import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaUser, FaAt, FaEnvelope } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import Button from "./Button";

const ContactForm = () => {
  const [icon, setIcon] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bei77gf",
        "template_ib88cr4",
        form.current,
        "3B5_KCYznJHc6RLTz"
      )
      .then(
        () => {
              alert("Email send sucessfully.");
          setValue({
            name: "",
            email: "",
            message: "",
          });
          setIcon({
            name: false,
            email: false,
            message: false,
          })
        },
        (error) => {
          alert(error.text);
        }
      );
      e.target.reset()
  };

  const handleIconBox = (e) => {
    let name = e.target.name;

    if (name === "name") {
      setIcon({ ...icon, name: true });
    } else if (name === "email") {
      setIcon({ ...icon, email: true });
    } else if (name === "message") {
      setIcon({ ...icon, message: true });
    }
  };

  const removeIconBox = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "name" && value === "") {
      setIcon({ ...icon, name: false });
    } else if (name === "email" && value === "") {
      setIcon({ ...icon, email: false });
    } else if (name === "message" && value === "") {
      setIcon({ ...icon, message: false });
    }
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Container>
      <Form ref={form} onSubmit={sendEmail}>
        <div className="input_group">
          <Icon
            style={icon.name ? { background: "#FFC107", color: "#20202a" } : {}}
          >
            <FaUser size={12} />
          </Icon>
          <Input
            name="name"
            value={value.name}
            onBlur={removeIconBox}
            onFocus={handleIconBox}
            onChange={handleInput}
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="input_group">
          <Icon
            style={
              icon.email ? { background: "#FFC107", color: "#20202a" } : {}
            }
          >
            <FaAt size={12} />
          </Icon>
          <Input
            name="email"
            value={value.email}
            onBlur={removeIconBox}
            onFocus={handleIconBox}
            onChange={handleInput}
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="input_group">
          <Icon
            style={
              icon.message ? { background: "#FFC107", color: "#20202a" } : {}
            }
          >
            <FaEnvelope size={12} />
          </Icon>

          <TextArea
            name="message"
            value={value.message}
            onBlur={removeIconBox}
            onFocus={handleIconBox}
            onChange={handleInput}
            placeholder="Message"
            required
          ></TextArea>
        </div>

        <Button>
          {" "}
          <TbSend size={20} style={{ marginRight: ".5rem" }} />
          send message
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  background: ${({ theme }) => theme.grayBg};
  height: auto;
  padding: 3rem;
`;

const Form = styled.form`
  .input_group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding-left: 6rem;
  background: linear-gradient(159deg, #252532 0%, #23232d 100%) !important;
  color: ${({ theme }) => theme.lightColor};
  border: none;
  outline: none;
  &:focus {
    color: ${({ theme }) => theme.lightColor};
  }
`;
const TextArea = styled.textarea`
  height: 11rem;
  width: 100%;
  padding-left: 6rem;
  padding-top: 1rem;
  background: linear-gradient(159deg, #252532 0%, #23232d 100%) !important;
  color: ${({ theme }) => theme.lightColor};
  border: none;
  outline: none;
  &:focus {
    color: ${({ theme }) => theme.lightColor};
  }
`;

const Icon = styled.label`
  width: 5rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.grayColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
