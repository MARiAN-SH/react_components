import { Component } from 'react';
import { MaterialLink } from './Material.styled';

import Modal from '../../../Modal/Modal';
import { EditMaterialModal } from './MaterialModal/MaterialModal';

export class Material extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { item, onUpdate, onDelete } = this.props;

    return (
      <>
        {this.state.showModal && (
          <Modal close={this.toggleModal}>
            <EditMaterialModal
              item={item}
              onUpdate={onUpdate}
              close={this.toggleModal}
            />
          </Modal>
        )}

        <MaterialLink href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </MaterialLink>
        <button type="button" onClick={this.toggleModal}>
          Update
        </button>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </>
    );
  }
}
