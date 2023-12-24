import { useState } from 'react';
import { getSizes } from '../../services/api';
import SizeType from '../../types/SizeType';

function SizeSelector() {
  const [sizes, setSizes] = useState<SizeType[]>();
  getSizes().then(
    (results) => {
      setSizes(results);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <select>
      {sizes?.map((size) => (
        <option key={size.id}>
          {size.number} RU / {size.label}
        </option>
      ))}
    </select>
  );
}

export default SizeSelector;
