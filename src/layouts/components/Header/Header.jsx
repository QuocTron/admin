import React from "react";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleExclamation,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import config from "../../../config";

const cx = classnames.bind(styles);

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { routes } = config;
  let titleNamePage;
  switch (pathname) {
    case routes.home:
      titleNamePage = "Home";
      break;
    case routes.product:
      titleNamePage = "Product";
      break;
    case routes.orders:
      titleNamePage = "Orders";
      break;
    case routes.profile:
      titleNamePage = "Profile";
      break;

    default:
      titleNamePage = "Home";
  }
  return (
    <div className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("box-title")}>
          <p className={cx("title-name-page")}>Pages / {titleNamePage}</p>

          <h1 className={cx("title-page")}>{titleNamePage}</h1>
        </div>
        <div className={cx("header-box-search")}>
          <div className={cx("search")}>
            <div className={cx("box-btn-search")}>
              <button className={cx("btn-search")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <input
              spellCheck={false}
              placeholder="Search..."
              type="text"
              className={cx("input-search")}
            />
          </div>
          <div className={cx("header-menu")}>
            <button className={cx("btn-notify", "btn-menu")}>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button className={cx("btn-notify", "btn-menu")}>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </button>
            <button className={cx("btn-dark-light", "btn-menu")}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <div className={cx("box-avatar")}>
              <img
                className={cx("avatar")}
                src={
                  "https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/292669746_2201903946644853_4420143477729832900_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zd_9q5Qhl2oAX-C8q9k&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8dcJkqNth-u4gpepUaNbcaHPweZwc7bi1zktEGd5ZRUQ&oe=62DFC032"
                }
                // src="/logo192.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
