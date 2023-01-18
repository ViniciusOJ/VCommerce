import styled, { css, keyframes } from "styled-components";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const scale = keyframes`
  0%{
		transform: scale(1)
	}
	100%{
		transform: scale(1.3)
	}
`;

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: ${scale} 14s infinite;
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  justify-content: center;
  color: #fff;
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: clamp(1rem, 8vw, 2.3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: -2px 2px 1px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;
export const Button = styled.button`
  background-color: #4e4e4e;
  border: none;
  padding: 0.8rem 1.6rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  max-width: 300px;
  transition: 0.3s;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: #fd1e53;
    transform: scale(1.05);
  }
`;

export const Arrow = styled(BiRightArrowAlt)`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #4e4e4e;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  transition: 0.3s;

  &:hover {
    background-color: #fd1e53;
    transform: scale(1.05);
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  display: flex;
`;

export const PrevArrow = styled(FiArrowLeft)`
  ${arrowButtons}
`;
export const NextArrow = styled(FiArrowRight)`
  ${arrowButtons}
`;
