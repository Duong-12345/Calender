import React, { useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { timetabledetails } from "./Data";
import "react-tabs/style/react-tabs.css";
import Select from "react-select";
const defaultFilter = {
  codeMH: "",
  nameMH: "",
  codeML: "",
  teacher: "",
  weekday: "",
  class: "",
  year1: "",
  codeK: "",
  semester1: "",
};
export default function Calendar0() {
  const dataDetail = timetabledetails;
  const [detail, setDetail] = useState(dataDetail);
  const [filter, setFilter] = useState(defaultFilter);
  var teacher1 = [...new Set(dataDetail.map((e) => e.lecturer))];
  var thu1 = [...new Set(dataDetail.map((e) => e.day))];
  var gd = [...new Set(dataDetail.map((e) => e.room))];
  var mon = [...new Set(dataDetail.map((e) => e.course_name))];
  var ma = [...new Set(dataDetail.map((e) => e.class))];
  const filterMaMH = (maMH) => {
    setFilter({ ...filter, codeMH: maMH.value });
  };
  const filterTenMonHoc = (tenMH) => {
    setFilter({ ...filter, nameMH: tenMH.value });
  };
  const filterMaLopMH = (maLopMH) => {
    setFilter({ ...filter, codeML: maLopMH.value });
  };
  const filterGiaoVien = (giaovien) => {
    setFilter({ ...filter, teacher: giaovien.value });
  };
  const filterThu = (thu) => {
    setFilter({ ...filter, weekday: thu.value });
  };
  const filterYear = (y) => {
    setFilter({ ...filter, year1: y.value });
  };
  const filterKhoa = (k) => {
    setFilter({ ...filter, codeK: k.value });
  };
  const filterSemester = (s) => {
    setFilter({ ...filter, semester1: s.value });
  };
  const filterGiangDuong = (gd) => {
    setFilter({ ...filter, class: gd.value });
  };
  const customStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        textAlign: "left",
        color: "black",
        justifyContent: "center",
      };
    },
    control: (provided, state) => ({
      ...provided,
      minHeight: "20px",
      height: "25px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "25px",
      width: "30px",
      cursor: "pointer",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "25px",
      padding: "0 6px",
      marginBottom: "4px",
      cursor: "pointer",
    }),
  };

  let dataFiltered = detail;
  if (!!filter.teacher)
    dataFiltered = dataFiltered.filter((item) =>
      item.lecturer.toLowerCase().includes(filter.teacher.toLowerCase())
    );
  if (!!filter.nameMH)
    dataFiltered = dataFiltered.filter((item) =>
      item.course_name.toLowerCase().includes(filter.nameMH.toLowerCase())
    );
  if (!!filter.codeMH)
    dataFiltered = dataFiltered.filter((item) =>
      item.MaMH.toLowerCase().includes(filter.codeMH.toLowerCase())
    );
  if (!!filter.codeML)
    dataFiltered = dataFiltered.filter((item) =>
      item.class.toLowerCase().includes(filter.codeML.toLowerCase())
    );
  if (!!filter.class)
    dataFiltered = dataFiltered.filter((item) =>
      item.room.toLowerCase().includes(filter.class.toLowerCase())
    );

  if (!!filter.weekday)
    dataFiltered = dataFiltered.filter((item) =>
      item.day.includes(filter.weekday)
    );
  if (!!filter.codeK)
    dataFiltered = dataFiltered.filter((item) =>
      item.code.includes(filter.codeK)
    );
  if (!!filter.year1)
    dataFiltered = dataFiltered.filter((item) =>
      item.year.includes(filter.year1)
    );
  if (!!filter.semester1)
    dataFiltered = dataFiltered.filter((item) =>
      item.semester.includes(filter.semester1)
    );
  var khoa = dataDetail.map((e) => e.code);
  var khoa1 = [...new Set(khoa)];
  var nam = dataDetail.map((e) => e.year);
  var nam1 = [...new Set(nam)];
  var ki1 = [...new Set(dataDetail.map((e) => e.semester))];
  const columns = [
    {
      Header: "STT",
      accessor: "num_order",
      sortable: false,
      maxWidth: 45,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value: filter.codeMH === "" ? <p id="p">Mã MH</p> : filter.codeMH,
              label: filter.codeMH === "" ? <p id="p">Mã MH</p> : filter.codeMH,
            }}
            placeholder="Mã MH"
            onChange={filterMaMH}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "MaMH",
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 100,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value:
                filter.nameMH === "" ? (
                  <p id="p">Tên môn học</p>
                ) : (
                  filter.nameMH
                ),
              label:
                filter.nameMH === "" ? (
                  <p id="p">Tên môn học</p>
                ) : (
                  filter.nameMH
                ),
            }}
            options={mon.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder="Tên môn học"
            onChange={filterTenMonHoc}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "course_name",
      style: { borderLeft: "1px solid black", textAlign: "left" },
      sortable: false,
      minWidth: 150,
    },
    {
      Header: "TC",
      accessor: "num_credits",
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 45,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value:
                filter.codeML === "" ? <p id="p">Mã lớp MH</p> : filter.codeML,
              label:
                filter.codeML === "" ? <p id="p">Mã lớp MH</p> : filter.codeML,
            }}
            options={ma.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder="Mã lớp MH"
            onChange={filterMaLopMH}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "class",
      style: { borderLeft: "1px solid black" },
      sortable: false,
      minWidth: 200,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value:
                filter.teacher === "" ? (
                  <p id="p">Giáo viên</p>
                ) : (
                  filter.teacher
                ),
              label:
                filter.teacher === "" ? (
                  <p id="p">Giáo viên</p>
                ) : (
                  filter.teacher
                ),
            }}
            options={teacher1.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder="Giáo viên"
            onChange={filterGiaoVien}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "lecturer",
      style: { borderLeft: "1px solid black", textAlign: "left" },
      sortable: false,
      minWidth: 120,
    },
    {
      Header: "Số SV",
      accessor: "count",
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 55,
    },
    {
      Header: "Buổi",
      accessor: "Buoi",
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 60,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value: filter.weekday === "" ? <p id="p">Thứ</p> : filter.weekday,
              label: filter.weekday === "" ? <p id="p">Thứ</p> : filter.weekday,
            }}
            options={thu1.map((e) => ({
              label: e,
              value: e,
            }))}
            placeholder="Thứ"
            onChange={filterThu}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "day",
      style: { borderLeft: "1px solid black" },
      sortable: false,
      maxWidth: 100,
    },
    {
      Header: "Tiết",
      accessor: null,
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 50,
    },
    {
      Header: (
        <div>
          <Select
            value={{
              value:
                filter.class === "" ? <p id="p">Giảng đường</p> : filter.class,
              label:
                filter.class === "" ? <p id="p">Giảng đường</p> : filter.class,
            }}
            options={gd.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder="Giảng đường"
            onChange={filterGiangDuong}
            menuPortalTarget={document.body}
            styles={customStyles}
          />
        </div>
      ),
      accessor: "room",
      style: { borderLeft: "1px solid black" },
      sortable: false,
      maxWidth: 160,
    },
    {
      Header: "Ghi chú",
      accessor: "note",
      sortable: false,
      style: { borderLeft: "1px solid black" },
      maxWidth: 70,
    },
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Select
          value={{
            value:
              filter.year1 === "" ? <p id="p">Chọn năm học</p> : filter.year1,
            label:
              filter.year1 === "" ? <p id="p">Chọn năm học</p> : filter.year1,
          }}
          options={nam1.map((item) => ({
            label: item,
            value: item,
          }))}
          onChange={filterYear}
          styles={customStyles}
          className="select"
        />
        <Select
          value={{
            value:
              filter.semester1 === "" ? (
                <p id="p">Chọn học kì</p>
              ) : (
                filter.semester1
              ),
            label:
              filter.semester1 === "" ? (
                <p id="p">Chọn học kì</p>
              ) : (
                filter.semester1
              ),
          }}
          options={ki1.map((item) => ({
            label: item,
            value: item,
          }))}
          placeholder="Giáo viên"
          onChange={filterSemester}
          styles={customStyles}
          className="select"
        />
        <Select
          styles={customStyles}
          className="select"
          value={{
            value: filter.codeK === "" ? <p id="p">Chọn khóa</p> : filter.codeK,
            label: filter.codeK === "" ? <p id="p">Chọn khóa</p> : filter.codeK,
          }}
          options={khoa1.map((e) => ({
            label: e,
            value: e,
          }))}
          onChange={filterKhoa}
        />
        <button onClick={() => setFilter(defaultFilter)}>Reset</button>
      </div>
      <ReactTable
        data={dataFiltered}
        columns={columns}
        defaultPageSize={10}
        getTrGroupProps={(state, rowInfo, column) => {
          return {
            style: {
              border: "1px solid black",
              borderTop: 0,
            },
          };
        }}
        getTheadProps={() => {
          return {
            style: {
              background: "cornflowerblue",
              border: "1px solid black",
              borderLeft: 0,
              color: "white",
            },
          };
        }}
        getTheadThProps={() => {
          return {
            style: {
              borderLeft: "1px solid black",
            },
          };
        }}
        getTheadTrProps={() => {
          return {
            style: {
              borderLeft: "1px solid black",
              textAlign: "left",
              justifyContent: "left",
            },
          };
        }}
      />
    </div>
  );
}
