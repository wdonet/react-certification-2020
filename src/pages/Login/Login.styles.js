import styled from 'styled-components';
import colors from '../../config/colors';

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  align-self: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  max-width: 40rem;
  padding: 2rem;
  margin: 2rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadiusLg};
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
`;

const FormInput = styled.input`
  width: 100%;
`;

const FormSubmit = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${colors.gray100};
`;

export { FormGroup, Container, Form, FormInput, FormLabel, Title, FormSubmit };
