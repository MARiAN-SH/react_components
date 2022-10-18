// rafcp
import React from 'react';
import { Material } from '../Material/Material';
// import PropTypes from 'prop-types';

import { MaterialItem } from './MaterialList.styled';

const MaterialList = ({ items, error, ...otherProps }) => {
  return (
    <>
      {error && <p>Oops error!</p>}
      <ul>
        {items.map(item => (
          <MaterialItem key={item.id}>
            <Material item={item} {...otherProps} />
          </MaterialItem>
        ))}
      </ul>
    </>
  );
};

MaterialList.propTypes = {};

export default MaterialList;
