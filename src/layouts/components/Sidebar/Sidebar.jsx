import React, { useState } from "react";
import classnames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Sidebar.module.scss";
import config from "../../../config";
import {
  faAddressCard,
  faBagShopping,
  faHome,
  faShirt,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

const Sidebar = () => {
  const location = useLocation();
  const { routes } = config;

  return (
    <div className={cx("sidebar")}>
      <div className={cx("title-sidebar")}>ADMIN CLOTHING STORE</div>
      <div className={cx("sidebar-nav")}>
        <ul className={cx("sidebar-ul")}>
          <li
            className={cx("item-nav", {
              clicked: location.pathname === routes.home,
            })}
          >
            <Link className={cx("link-item")} to={"/"}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </Link>
          </li>

          <li
            className={cx("item-nav", {
              clicked: location.pathname === routes.product,
            })}
          >
            <Link className={cx("link-item")} to={"/san-pham"}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faShirt} />
              </span>
              Products
            </Link>
          </li>
          <li
            className={cx("item-nav", {
              clicked: location.pathname === routes.orders,
            })}
          >
            <Link className={cx("link-item")} to={"/don-hang"}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              Orders
            </Link>
          </li>
          <li
            className={cx("item-nav", {
              clicked: location.pathname === routes.login,
            })}
          >
            <Link className={cx("link-item")} to={"/dang-nhap"}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faSignIn} />
              </span>
              Sign in
            </Link>
          </li>
          <li
            className={cx("item-nav", {
              clicked: location.pathname === routes.profile,
            })}
          >
            <Link className={cx("link-item")} to={"/ho-so"}>
              <span className={cx("icon")}>
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
