import { useEffect, useState } from 'react';
import { getSizes } from '../../services/api';
import SizeType from '../../types/SizeType';
import { useAppDispatch } from '../../hooks/redux';
import { SelectedProductSlice } from '../../store/reducers/SelectedProductSlice';

function SizeSelector({ ...props }) {
  const [sizes, setSizes] = useState<SizeType[]>();
  const [selectedValue, setSelectedValue] = useState('default');

  const { setSizeID } = SelectedProductSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedValue('default');
  }, [props.availableSizes]);

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
    <select
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event.target.value);
        dispatch(setSizeID(+event.target.value));
      }}
    >
      <option value="default" disabled={true}>
        Выберите размер
      </option>
      {sizes?.map((size) => (
        <option value={size.id} key={size.id} disabled={size.notAvailable}>
          {size.number} RU / {size.label}
        </option>
      ))}
    </select>
  );
}

export default SizeSelector;
