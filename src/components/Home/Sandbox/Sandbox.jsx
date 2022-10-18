import React, { Fragment } from 'react';
import Button from '../Button/Button';
const Sandbox = () => {
  return (
    <Fragment>
      <h3>
        <span>1. Text and onClick functions</span>
      </h3>
      <Button
        onClick={e => {
          console.log(`!!!!`);
        }}
      >
        Button text
      </Button>

      <h3>
        <span>2. Disebled button</span>
      </h3>
      <Button
        onClick={e => {
          console.dir((e.target.disabled = true));
        }}
      />

      <h3>
        <span>3. Active button</span>
      </h3>
      <Button active />

      <h3>
        <span>4. Supporting data, type and atc. attributes</span>
      </h3>
      <Button data-name="button" />
      <Button type="submit" />

      <h3>
        <span>5. Button link</span>
      </h3>
      <Button href="module2">Link</Button>
      <Button href="test" disabled>
        Link
      </Button>
    </Fragment>
  );
};

export default Sandbox;
