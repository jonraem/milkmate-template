import React, { useState } from 'react';
import styled from 'styled-components';

import type { CowWithProduction } from '../assets/cows';
import { ReactComponent as CowFace } from '../assets/lehma.svg';

type CowFormProps = {
  onCancelButtonClick: () => void;
  onSubmitButtonClick: (newCow: CowWithProduction) => void;
};

type FormValues = {
  name: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  registerNumber: string;
  breed: string;
  color: string;
  information: string;
};

const Container = styled.div`
  margin: 1em;
  max-width: 1000px;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  alignitems: center;
`;

const StyledH1 = styled.h1`
  color: #173272;
  margin-left: 0.5em;
`;

const StyledLabel = styled.label`
  color: #173272;
  margin-left: 0.5em;
  padding: 0.75em 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 1em;
  padding: 0.5em 0;
  border: 1px #14b1e3 solid;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background: none;
  color: black;
  padding: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledSubmit = styled.input`
  background: #14b1e3;
  padding: 1em;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CowForm = ({
  onCancelButtonClick,
  onSubmitButtonClick,
}: CowFormProps) => {
  const [formValues, setFormValues] = useState<FormValues>({} as FormValues);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = event.target;
    setFormValues({ ...formValues, [key]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.registerNumber) {
      alert('Lehmän rekisterinumero ei voi olla tyhjä');
      return;
    }
    onSubmitButtonClick({
      name: formValues.name || '',
      birthdate:
        formValues.birthYear && formValues.birthMonth && formValues.birthDay
          ? `${formValues.birthYear}-${formValues.birthMonth}-${formValues.birthDay}`
          : '',
      registerNumber: formValues.registerNumber || '',
      breed: formValues.breed || '',
      color: formValues.color || '',
      information: formValues.information || '',
      litersPerWeek: 0,
      litersPerDay: 0,
    } as CowWithProduction);
  };

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}>
        <CowFace style={{ width: 50, height: 50, fill: '#173272' }} />
        <StyledH1>Lisää lehmä</StyledH1>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '2em',
          }}>
          <StyledLabel>Nimi</StyledLabel>
          <StyledLabel>Syntymäpäivä</StyledLabel>
          <StyledLabel>Rekisterinumero</StyledLabel>
          <StyledLabel>Rotu</StyledLabel>
          <StyledLabel>Väri</StyledLabel>
          <StyledLabel>Lisätietoja</StyledLabel>
        </div>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledInput
            value={formValues['name']}
            onChange={(event) => handleInputChange(event, 'name')}
          />
          <div style={{ display: 'flex' }}>
            <StyledInput
              value={formValues['birthDay']}
              onChange={(event) => handleInputChange(event, 'birthDay')}
            />
            <StyledInput
              style={{ marginLeft: '1em' }}
              value={formValues['birthMonth']}
              onChange={(event) => handleInputChange(event, 'birthMonth')}
            />
            <StyledInput
              style={{ marginLeft: '1em' }}
              value={formValues['birthYear']}
              onChange={(event) => handleInputChange(event, 'birthYear')}
            />
          </div>
          <StyledInput
            value={formValues['registerNumber']}
            onChange={(event) => handleInputChange(event, 'registerNumber')}
          />
          <StyledInput
            value={formValues['breed']}
            onChange={(event) => handleInputChange(event, 'breed')}
          />
          <StyledInput
            value={formValues['color']}
            onChange={(event) => handleInputChange(event, 'color')}
          />
          <StyledInput
            value={formValues['information']}
            onChange={(event) => handleInputChange(event, 'information')}
          />
          <div style={{ alignSelf: 'flex-end' }}>
            <StyledButton type="button" onClick={onCancelButtonClick}>
              Peruuta
            </StyledButton>
            <StyledSubmit type="submit" value="Lisää lehmä" />
          </div>
        </StyledForm>
      </div>
    </Container>
  );
};

export default CowForm;
