import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  // console.log("Backdrop props: ", props);
  return (
    <div className={classes.backdrop} onClick={props.onCloseBackdrop}></div>
  );
};

const ModalOverlay = (props) => {
  // console.log("ModalOverlay props: ", props);
  return (
    <div className={classes.modal} id="componentScrollToTop">
      <div>{props.data}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  // console.log("Modal props: ", props);
  // console.log("portalElement: ", portalElement);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseBackdrop={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        // <ModalOverlay> {props.children} </ModalOverlay>,
        <ModalOverlay data={props.children} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
