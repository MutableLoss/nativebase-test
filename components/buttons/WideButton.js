import React from 'react';
import ButtonBase from '../ButtonBase';

const WideButton = ({children, onPress}) => (
  <ButtonBase size="sm" variant="wideSecondary" onPress={onPress}>
    {children}
  </ButtonBase>
);

export default WideButton;
