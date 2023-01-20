import styled from "styled-components";

export const CPayment = styled.div`
  width: 100%;
  position: relative;
  top: 70px;

  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CCGeral = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(90deg, #2ecc71 50%, #27ae60 40.1%);
`;
export const Form = styled.form`
  padding: 1.2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const ColLeft = styled.div`
  flex: 1 1 15.65rem;
`;
export const TitleSection = styled.h3`
  font-size: 1.2rem;
  color: #333;
  padding-bottom: 5px;
  text-transform: uppercase;

  @media (max-width: 619px) {
    text-align: center;
    margin: 0.5rem 0;
  }
`;
export const InputBox = styled.div`
  margin: 1rem 0;
`;
export const InputBoxCards = styled.div`
  margin: 1rem 0;
`;

export const TextSpan = styled.span`
  margin-bottom: 0.8rem;
  display: block;
  text-transform: capitalize;
`;

export const OptionImg = styled.img`
  height: 2.1rem;
  margin-top: 7px;
  filter: drop-shadow(0 0 1px #000);

  @media (max-width: 619px) {
    margin: 0 0 2rem 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  text-transform: none;

  ::placeholder {
    text-transform: capitalize;
  }

  :focus {
    border: 1px solid #000;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0;
    flex-direction: column;
  }
`;

export const InputBtn = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.05rem;
  background: #27ae60;
  color: #fff;
  margin-top: 5px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem;
  border-radius: 8px;

  :hover {
    background: #2ecc71;
  }
`;
