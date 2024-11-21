import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Centers the text horizontally */
  align-items: center; /* Centers the text vertically */
  text-align: center; /* Ensure text alignment inside button */

  &:hover {
    background: #0056b3;
  }
`;


export const SwitchText = styled.p`
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
