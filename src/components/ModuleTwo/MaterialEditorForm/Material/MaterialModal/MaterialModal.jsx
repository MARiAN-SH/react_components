import { useState } from 'react';
export const EditMaterialModal = ({ item, onUpdate, close }) => {
  const [value, setValue] = useState(item.title);

  return (
    <div>
      <p>{item.title}</p>
      <input
        type="text"
        name="title"
        defaultValue={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          onUpdate({
            ...item,
            title: value,
          });
          close();
        }}
      >
        Save the changes
      </button>
    </div>
  );
};
