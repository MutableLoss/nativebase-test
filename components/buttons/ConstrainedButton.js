import React from 'react';
import ButtonBase from '../ButtonBase';

const ConstrainedButton = ({children, onPress}) => (
  <ButtonBase size="lg" variant="rounded" onPress={onPress}>
    {children}
  </ButtonBase>
);

export default ConstrainedButton;
