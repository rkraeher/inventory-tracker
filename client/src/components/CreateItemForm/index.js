import React, { useRef, useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_ITEM, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import './style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { DEV_SITE_KEY } from '../../constants';

const categoryOptions = [
  'BICYCLE',
  'CHAIR',
  'COMPUTER',
  'DESK',
  'LAMP',
  'SPEAKER',
  'TABLE',
  'WHITEBOARD',
  'OTHER',
];

function CreateItemForm() {
  const [, dispatch] = useStoreContext();
  const itemNumRef = useRef();
  const itemNameRef = useRef();
  const itemCategoryRef = useRef();
  const captchaRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);
  const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || DEV_SITE_KEY;

  const refs = [itemNameRef, itemNumRef, itemCategoryRef];

  const updateInventory = async () => {
    try {
      const result = await API.saveItem({
        itemNumber: itemNumRef.current.value,
        itemName: itemNameRef.current.value,
        category: itemCategoryRef.current.value,
        qty: 0,
      });

      dispatch({
        type: ADD_ITEM,
        post: result.data,
      });

      await API.saveBinQuantity({
        warehouseCode: 'CA',
        bin: 'NA',
        itemNumber: itemNumRef.current.value,
        binQty: 0,
        modifiedDate: Date.now(),
      });
    } catch (err) {
      const errString = err.toString();

      if (errString.includes('500')) {
        alert(
          'Error occurred: ' + itemNumRef.current.value + ' already exists'
        );
      } else {
        alert('Error occurred: ' + err.message);
      }
    }
  };

  const resetRefs = (refs) => {
    for (let ref of refs) {
      ref.current.value = '';
    }

    captchaRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: LOADING });

    const token = captchaRef.current.getValue();
    const response = await API.validateToken(token);
    const { recaptchaValidated } = response.data;

    if (recaptchaValidated) {
      await updateInventory();
      setShowWarning(false);
      resetRefs(refs);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h1>Insert Item</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          ref={itemNumRef}
          placeholder="Item #"
        />
        <input
          className="form-control mb-5"
          ref={itemNameRef}
          placeholder="Name"
        />
        <select
          className="form-control mb-5"
          ref={itemCategoryRef}
          placeholder="Category"
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {showWarning && (
          <p className="warning">
            reCAPTCHA token is not validated. Please check the box and try
            again.
          </p>
        )}

        <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} className="recaptcha" />

        <button className="btn btn-success mt-3 mb-5" type="submit">
          Insert
        </button>
      </form>
    </div>
  );
}

export default CreateItemForm;
