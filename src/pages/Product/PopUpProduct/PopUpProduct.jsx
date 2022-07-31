import React, { useEffect, useRef } from "react";
import classnames from "classnames/bind";
import styles from "./PopUpProduct.module.scss";

const cx = classnames.bind(styles);

const PopUpProduct = ({ setOpenPopupProduct, openPopup }) => {
  const containerRef = useRef();
  useEffect(() => {
    function handler(event) {
      setOpenPopupProduct(false);
    }
    containerRef.current?.addEventListener("click", handler);
  }, []);
  return (
    <>
      {openPopup && (
        <div
          className={cx("container")}
          ref={containerRef}
          onClick={() => {
            setOpenPopupProduct(false);
          }}
        ></div>
      )}
      <div className={cx("pop-up-product", { open: openPopup })}>
        ĐÂY là PopUp Product
      </div>
    </>
  );
};

export default PopUpProduct;
