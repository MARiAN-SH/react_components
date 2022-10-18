import React, { Component } from 'react';
import { DropdownEl } from './Dropdown.styled';
import Button from '../Home/Button/Button';
export class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <DropdownEl>
        {/* <button type="button" className="Dropdown__toggel" onClick={this.show}>
          Показаи
        </button>
        <button type="button" className="Dropdown__toggel" onClick={this.hide}>
          Сховати
        </button> */}

        <Button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Закрити' : 'Відкрити'}
        </Button>

        {this.state.visible && (
          <div className="Dropdown__menu"> Випадаюче меню</div>
        )}
      </DropdownEl>
    );
  }
}
