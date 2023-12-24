import { useState } from 'react';
import { getSizes } from '../../services/api';
import SizeType from '../../types/SizeType';

function SizeSelector({ ...props }) {
  const [sizes, setSizes] = useState<SizeType[]>();
  getSizes().then(
    (results) => {
      setSizes(results);
    },
    (error) => {
      console.error(error);
    }
  );
  sizes?.map((size) => {
    if (!props.availableSizes.includes(size.id)) {
      size.notAvailable = true;
    } else {
      size.notAvailable = false;
    }
  });

  return (
    <select defaultValue={'default'}>
      <option value="default" disabled={true}>
        Выберите размер
      </option>
      {sizes?.map((size) => (
        <option key={size.id} disabled={size.notAvailable}>
          {size.number} RU / {size.label}
        </option>
      ))}
    </select>
  );
}

export default SizeSelector;
