import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;

  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 4rem;
  height: 2rem;

  svg {
    height: auto;
    max-width: 2rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(0)" : "translateX(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-100px)" : "translateX(0)"};
    }
  }
`;
