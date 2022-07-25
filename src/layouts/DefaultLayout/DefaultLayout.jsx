import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import classnames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar-header")}>
        <Sidebar />
        <div className={cx("header-content")}>
          <Header />
          <div className={cx("container")}>
            <div className={cx("content")}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
