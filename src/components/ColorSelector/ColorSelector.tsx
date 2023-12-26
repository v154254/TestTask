import { useAppDispatch } from '../../hooks/redux';
import { SelectedProductSlice } from '../../store/reducers/SelectedProductSlice';
import { ProductColor } from '../../types/ProductType';

function ColorSelector({ ...props }) {
  const { setColorID } = SelectedProductSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Выберите цвет</h2>
      {props.availableColors?.map((color: ProductColor) => (
        <button
          onClick={() => {
            dispatch(setColorID(color.id));
          }}
          key={color.id}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;
