import { Component } from 'react';

import Form from './Form/Form';
// MaterialEditorForm
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import MaterialList from './MaterialEditorForm/MaterialList/MaterialList';
import { Loading } from './MaterialEditorForm/MaterialEditorForm.styled';

// ========API========
import * as API from '../../services/api';

class Module2 extends Component {
  state = {
    // MATERIAL EDITOR
    materials: [],
    isLoading: false,
    error: false,
  };
  async componentDidMount() {
    // console.log('did mount');
    try {
      this.setState({ isLoading: true });

      const materials = await API.getMaterials();
      this.setState({
        materials: materials.reverse(),
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }
  // MATERIALS EDITOR
  addMaterial = async values => {
    try {
      // this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [material, ...state.materials],
        // isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    await API.deleteMaterial(id);
    this.setState(prevState => ({
      materials: prevState.materials.filter(material => material.id !== id),
    }));

    console.log(id);
  };

  updateMaterial = async filds => {
    const editMaterial = await API.updateMaterial(filds);

    this.setState(prevState => ({
      materials: prevState.materials.map(material =>
        material.id === filds.id ? editMaterial : material
      ),
    }));
  };

  render() {
    // MATERIAL EDITOR
    const { materials, isLoading, error } = this.state;
    return (
      <>
        <Form />

        <MaterialEditorForm
          loading={isLoading}
          onSubmit={this.addMaterial}
          // isSubmitting={isLoading} //спосіб блокувати кнопку вручну.
        />
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <MaterialList
            items={materials}
            error={error}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </>
    );
  }
}

export default Module2;
