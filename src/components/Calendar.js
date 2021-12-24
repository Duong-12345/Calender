import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { data, data1, timetabledetails } from "./Data";
import React, { useState } from "react";
import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";
import "./Calendar.css";
import { Space, Table, Tag } from "antd";
import Select from "react-select";
import { WarningFilled } from "@ant-design/icons";

const defaultFilter = {
  teacher: "",
  year1: "",
  semester1: "",
};

export default function Calandar() {
  const dataDetail = timetabledetails;
  const [filter, setFilter] = useState(defaultFilter);

  // const filterGiaoVien = (giaovien) => {
  //   setFilter({ ...filter, teacher: giaovien.value});
  // };

  // const filterYear = (y) => {
  //   setFilter({ ...filter, year1: y.value });
  // };

  // const filterSemester = (s) => {
  //   setFilter({ ...filter, semester1: s.value });
  // };

  const filterChange = (field, data) => {
    setFilter({ ...filter, [field]: data.value });
  };

  const [detail, setDetail] = useState(dataDetail);
  var nam = dataDetail.map((e) => e.year);
  var nam1 = [...new Set(nam)];
  var teacher1 = [...new Set(dataDetail.map((e) => e.lecturer))];
  var ki1 = [...new Set(dataDetail.map((e) => e.semester))];

  let dataFiltered = detail;
  if (!!filter.teacher)
    dataFiltered = dataFiltered.filter((item) =>
      item.lecturer.toLowerCase().includes(filter.teacher.toLowerCase())
    );
  if (!!filter.year1)
    dataFiltered = dataFiltered.filter((item) =>
      item.year.includes(filter.year1)
    );
  if (!!filter.semester1)
    dataFiltered = dataFiltered.filter((item) =>
      item.semester.includes(filter.semester1)
    );

  let rong = [];
  for (var i = 1; i <= 14; i++) {
    rong.push({
      // tiet: `${i} (${i+6}h-${i+6}h50)`,
      tiet:<div>{`${i}`}<br/>{`${i+6}h-${i+6}h50`}</div>,
      thu2: null,
      thu3: null,
      thu4: null,
      thu5: null,
      thu6: null,
      thu7: null,
      thu8: null,
    });
  }
  if (!!filter.teacher&&!!filter.year1&&!!filter.semester1) {
    dataFiltered.forEach((item) => {
      const thu = item.dayNum;
      if (!!thu) {
        const tietDau = item.startPeriod;
        const tietCuoi = item.endPeriod;
        for (var i = tietDau; i <= tietCuoi; i++) {
          rong[i - 1][`thu${thu}`] = item;
        }
      }
    });
  } else rong = rong;

  const renderColumn = (row) => {
    if (!!row && row.startPeriod === 6) {
      return (
        <div style={{ backgroundColor: "lightblue" }}>
          <div>{row?.course_name}</div>
          <div>{row?.lecturer}</div>
          <div>{row?.room}</div>
        </div>
      );
    }
    if (!!row && row.startPeriod === 10) {
      return (
        <div style={{ backgroundColor: "lightgreen" }}>
          <div>{row?.course_name}</div>
          <div>{row?.lecturer}</div>
          <div>{row?.room}</div>
        </div>
      );
    }
    if (!!row && row.startPeriod === 1) {
      return (
        <div style={{ backgroundColor: "#a29bfe" }}>
          <div>{row?.course_name}</div>
          <div>{row?.lecturer}</div>
          <div>{row?.room}</div>
        </div>
      );
    }
    if (!!row && row.startPeriod === 3) {
      return (
        <div style={{ backgroundColor: "#ffeaa7" }}>
          <div>{row?.course_name}</div>
          <div>{row?.lecturer}</div>
          <div>{row?.room}</div>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: "lightgray" }}>
          <div>{row?.course_name}</div>
          <div>{row?.lecturer}</div>
          <div>{row?.room}</div>
        </div>
      );
    }
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

  // const columns = [
  //   {
  //     Header: "Tiết",
  //     accessor: null,
  //     sortable: false,
  //     maxWidth: 100,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 2",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 3",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 4",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 5",
  //     accessor: "thursday.span",
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 6",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Thứ 7",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  //   {
  //     Header: "Chủ nhật",
  //     accessor: null,
  //     sortable: false,
  //     style: { borderLeft: "1px solid black" },
  //   },
  // ];

  return (
    <div style={{ overflow: "auto" }}>
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
          onChange={(value) => filterChange("year1", value)}
          // onChange={value => filterYear(value)}
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
          // onChange={filterSemester}
          onChange={(value) => filterChange("semester1", value)}
          styles={customStyles}
          className="select"
        />
        <Select
          value={{
            value:
              filter.teacher === "" ? (
                <p id="p">Chọn giáo viên</p>
              ) : (
                filter.teacher
              ),
            label:
              filter.teacher === "" ? (
                <p id="p">Chọn giáo viên</p>
              ) : (
                filter.teacher
              ),
          }}
          options={teacher1.map((item) => ({
            label: item,
            value: item,
          }))}
          // onChange={filterGiaoVien}
          onChange={(value) => filterChange("teacher", value)}
          styles={customStyles}
          className="select"
        />
        <button onClick={() => setFilter(defaultFilter)}>Reset</button>
        {!filter.teacher && (
          <div className="message">
            <WarningFilled /> Bạn vui lòng chọn đầy đủ các mục năm học, học kì và giáo viên trước
          </div>
        )}
      </div>
      {/* <ReactTable
        data={data}
        columns={columns}
        showPagination={false}
        defaultPageSize={14}
        getTrGroupProps={() => {
          return {
            style: {
              borderBottom: "1px solid black",
              borderTop: 0,
              minHeight: 42,
            },
          };
        }}
        getTheadThProps={() => {
          return {
            style: {
              borderLeft: "1px solid black",
              borderBottom: "1px solid black",
            },
          };
        }}
      /> */}
      <Table dataSource={rong} bordered pagination={false}>
        <Column title="Tiết" dataIndex="tiet" width="2%" />
        <Column
          title="Thứ 2"
          dataIndex="thu2"
          render={(row) => renderColumn(row)}
          width="13%"
        />
        <Column
          title="Thứ 3"
          dataIndex="thu3"
          width="13%"
          render={(row) => renderColumn(row)}
        />
        <Column
          title="Thứ 4"
          dataIndex="thu4"
          width="13%"
          render={(row) => renderColumn(row)}
        />
        <Column
          title="Thứ 5"
          dataIndex="thu5"
          width="13%"
          render={(row) => renderColumn(row)}
        />
        <Column
          title="Thứ 6"
          dataIndex="thu6"
          width="13%"
          render={(row) => renderColumn(row)}
        />
        <Column
          title="Thứ 7"
          dataIndex="thu7"
          width="13%"
          render={(row) => renderColumn(row)}
        />
        <Column
          title="Chủ nhật"
          dataIndex="thu8"
          width="13%"
          render={(row) => renderColumn(row)}
        />
      </Table>
    </div>
  );
}
