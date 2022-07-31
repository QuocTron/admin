import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { data } from "../../dummyData";
import classnames from "classnames/bind";
import styles from "./Product.module.scss";
import { accordionClasses } from "@mui/material";
import PopUpProduct from "./PopUpProduct";
const cx = classnames.bind(styles);

const columns = [
  { id: "name", label: "Tên sản phẩm", minWidth: 170 },
  { id: "category", label: "Danh mục", minWidth: 170 },
  { id: "title", label: "Tiêu đề", minWidth: 100 },
  { id: "image", label: "Hình ảnh", minWidth: 100 },
  {
    id: "price",
    label: "Giá",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "discount",
    label: "Giảm giá",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Số lượng",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const Product = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openPopup, setOpenPopupProduct] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(data);
  return (
    <div>
      <h2 className={cx("title-product")}>Danh sách sản phẩm </h2>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontSize: "16px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={() => setOpenPopupProduct(true)}
                    >
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.name}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.category?.name}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.title}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px" }}
                        className="tableCell"
                      >
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={row?.images[0]?.img}
                          alt={row?.name}
                        />
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.price.toLocaleString("vn-VN")} VNĐ
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.discount}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "12px", textAlign: "center" }}
                        className="tableCell"
                      >
                        {row?.detail.reduce((acc, detail) => {
                          acc += detail.detailColor.reduce(
                            (accAmount, detailColor) =>
                              (accAmount += detailColor.amount),
                            0
                          );
                          return acc;
                        }, 0)}
                      </TableCell>

                      {/* {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })} */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <PopUpProduct
        setOpenPopupProduct={setOpenPopupProduct}
        openPopup={openPopup}
      />
    </div>
  );
};

export default Product;
