import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonBase = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CheckButton = styled(ButtonBase)`
  background: #4caf50;

  &:hover {
    background: #45a049;
  }
`;

export const SolveButton = styled(ButtonBase)`
  background: #ff9800;

  &:hover {
    background: #e68900;
  }
`;

export const ResetButton = styled(ButtonBase)`
  background: #f44336;

  &:hover {
    background: #d32f2f;
  }
`;
