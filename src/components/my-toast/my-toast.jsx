import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToast = ({label}) => {
  const notify = () => toast(label);

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

MyToast.defaultProps = {
  label: 'Hello'
};

MyToast.propTypes = {
  label: PropTypes.string
};


export default MyToast