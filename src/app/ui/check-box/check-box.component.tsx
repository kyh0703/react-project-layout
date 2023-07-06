import React from 'react';

import { CheckBoxContainer, Box, Label } from './check-box.styles';

type CheckBoxProps = {
  id: string;
  label?: string;
  isChecked?: boolean;
};

const CheckBox = ({ isChecked, label }: CheckBoxProps) => {
  return (
    <CheckBoxContainer>
      <Box type="checkbox"></Box>
      <Label></Label>
    </CheckBoxContainer>
  );
};

export default CheckBox;
