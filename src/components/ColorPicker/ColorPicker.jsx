import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    colorPickerOptions: [
      { label: 'red', color: '#F44336' },
      { label: 'green', color: '#4CAF50' },
      { label: 'blue', color: '#2196F3' },
      { label: 'grey', color: '#607D8B' },
      { label: 'pink', color: '#E91E63' },
      { label: 'indigo', color: '#3F51B5' },
    ],
  };

  makeOptionsClassName = index => {
    const optionClasses = ['optioncss'];

    if (index === this.props.options) {
      optionClasses.push('ColorPicker_option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    // обчислена властивість визначаєтьзя з пропа і state
    const { options, setActiveIdx } = this.props;
    const { colorPickerOptions } = this.state;

    const activeOptionLabel = colorPickerOptions[options];
    const { color } = colorPickerOptions[options];
    // console.log(activeOptionLabel);

    return (
      <div className="color-picker__container">
        <p>Вибраний колір: {activeOptionLabel.label}</p>
        <p>Вибраний колір: {color}</p>
        <div>
          {/* {this.props.options.map((option, i) => (
            <button
              key={option.label}
              className={s.option}
              style={{
                backgroundColor: option.color,
                transform:
                  i === this.state.activeOptionsIdx ? 'scale(1.2)' : 'none',
              }}
            ></button>
          ))} */}

          {colorPickerOptions.map((option, i) => (
            // const optionClasses = this.makeOptionsClassName(i);

            <button
              key={option.label}
              className={this.makeOptionsClassName(i)}
              style={{
                backgroundColor: option.color,
              }}
              onClick={() => {
                setActiveIdx(i);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
