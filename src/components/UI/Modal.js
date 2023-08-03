import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  console.log("Backdrop props: ", props);
  return (
    <div className={classes.backdrop} onClick={props.onCloseBackdrop}></div>
  );
};

const ModalOverlay = (props) => {
  console.log("ModalOverlay props: ", props);
  return (
    <div className={classes.modal}>
      {/* REMINDER - How to pass data from Parent to Child Component: props or props.children */}

      {/* 3) passing data using ModalOverlay component with props */}
      {/* <div className={classes.content}> {props.cartData} </div> */}

      {/* 4) passing data from Modal to ModalOverlay component with props.children */}
      {/* <div className={classes.content}> {props.children} </div> */}

      {/* 5) passing data from parent Cart component to child Modal component with props.children and passing from parent Modal component to child ModalOverlay component with props */}
      {/* <div className={classes.content}>{props.data}</div> */}

      {/* 6) passing data from parent Cart component to child Modal component with props.children and passing data from Modal to ModalOverlay with props.children */}
      {/* <div className={classes.content}>{props.children}</div> */}

      {/* 7) passing datas from Cart to Modal using props or props.children method for each data */}
      <div className={classes.content}>
        {props.modalData} and {props.children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  console.log("Modal props: ", props);
  console.log("portalElement: ", portalElement);
  return (
    <Fragment>
      {/* {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )} */}

      {/* REMINDER - How to pass data from Parent to Child Component: props or props.children */}

      {/* 1) passing data from Cart parent to Modal child component via props */}
      {/* <div className={classes.modal}>
        <div className={classes.content}> {props.data} </div> 
      </div> */}

      {/* 2) passing data via props.children in Modal component */}
      {/* <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>
      </div> */}

      {/* 3) passing data from Modal to ModalOverlay component with props */}
      {/* <ModalOverlay cartData={props.data} /> */}

      {/* 4) passing data from Modal to ModalOverlay component with props.children */}
      {/* <ModalOverlay> {props.data} </ModalOverlay> */}

      {/* 5) passing data from parent Cart component to child Modal component with props.children and passing from parent Modal component to child ModalOverlay component with props */}
      {/* <ModalOverlay data={props.children} /> */}

      {/* 6) passing data from parent Cart component to child Modal component with props.children and passing data from Modal to ModalOverlay with props.children */}
      {/* <ModalOverlay>{props.children}</ModalOverlay> */}

      {/* 7) passing datas from Cart to Modal using props or props.children method for each data */}
      <ModalOverlay modalData={props.data}>{props.children}</ModalOverlay>
      {/* <ModalOverlay modalData={props.children}>{props.data}</ModalOverlay> */}
    </Fragment>
  );
};

export default Modal;
