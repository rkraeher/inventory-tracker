import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_ITEM, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import './style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { DEV_SITE_KEY } from '../../constants';

function CreateItemForm() {
  const [state, dispatch] = useStoreContext();
  const itemNumRef = useRef();
  const itemNameRef = useRef();
  const catRef = useRef();
  const captchaRef = useRef(null);
  const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || DEV_SITE_KEY;

  const validateToken = async (inputVal, token) => {
    // put me into API
    try {
      const response = await axios.post('http://localhost:3001/api/recaptcha', {
        inputVal,
        token,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const updateInventory = () => {
    // use ref getValue?
    const itemNum = itemNumRef.current.value;

    API.saveItem({
      itemNumber: itemNumRef.current.value,
      itemName: itemNameRef.current.value,
      category: catRef.current.value,
      qty: 0,
    })
      .then((result) => {
        dispatch({
          type: ADD_ITEM,
          post: result.data,
        });

        //console.log("before insert bin qty");
        API.saveBinQuantity({
          warehouseCode: 'CA',
          bin: 'NA',
          itemNumber: itemNum,
          binQty: 0,
          modifiedDate: Date.now,
        })
          // .then(results => {
          //   console.log(results);

          // })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        const errString = err.toString();

        if (errString.includes('500')) {
          alert('Error occurred: ' + itemNum + ' already exists');
        } else {
          alert('Error occurred: ' + err.message);
        }
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    // var itemNum = itemNumRef.current.value;

    // currently I don't actually use inputVal
    const inputVal = await e.target[0].value;
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    const response = await validateToken(inputVal, token);
    const { recaptchaValidated } = response.data;

    if (recaptchaValidated) {
      console.log('token is validated');
      updateInventory();
    }

    if (recaptchaValidated === false) {
      console.log('token is NOT validated');
    }

    itemNumRef.current.value = '';
    itemNameRef.current.value = '';
    catRef.current.value = '';
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
          ref={catRef}
          placeholder="Category"
        >
          <option>BICYCLE</option>
          <option>CHAIR</option>
          <option>COMPUTER</option>
          <option>DESK</option>
          <option>LAMP</option>
          <option>SPEAKER</option>
          <option>TABLE</option>
          <option>WHITEBOARD</option>
          <option>OTHER</option>
        </select>
        <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Insert
        </button>
      </form>
    </div>
  );
}

export default CreateItemForm;
