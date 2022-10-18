import React, { Component } from 'react';
import Select from 'react-select';

import { ImgApi, Thumb } from './Dogs.styled';
import * as API from '../../../services/api';

class Api extends Component {
  state = {
    breeds: [],
    dog: null,
    selectedBreed: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const data = await API.dataDogs();
      this.setState({ breeds: data });
    } catch (err) {}
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.feachDog();
    }
  }

  componentWillUnmount(prevProps) {}
  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  heandlerChangeBreed = async option => {
    this.setState({ selectedBreed: option.value });
  };

  feachDog = async () => {
    try {
      const response = await API.searchDog(this.state.selectedBreed);

      this.setState({ dog: response.data[0] });
    } catch (err) {}
  };

  render() {
    const { dog } = this.state;
    const options = this.buildOptions();
    return (
      <>
        <Select options={options} onChange={this.heandlerChangeBreed} />
        {/* <Select options={options} onChange={option => console.log(option)} />  */}

        {
          dog && (
            <div>
              <button typ="button" onClick={this.feachDog}>
                Showe another one...
              </button>
              <Thumb>
                <ImgApi src={dog.url} alt="dog" />
              </Thumb>
            </div>
          )
          // <img src={dog.url} alt={dog.name???} width="300" />
        }
      </>
    );
  }
}
export default Api;
