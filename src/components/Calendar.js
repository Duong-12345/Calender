import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { data, data1, timetabledetails } from "./Data";
import React, { useState } from "react";
import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";
import "./Calendar.css";
import { Table } from "antd";
import Select from "react-select";

// import "antd/dist/antd.css";
const defaultFilter = {
  teacher: "",
  year1: "",
  semester1: "",
};
export default function Calandar() {
  const dataTest2 = timetabledetails;
  const monday = dataTest2.filter((m) => m.day === "Thứ 2");
  var period = [...new Set(dataTest2.map((e) => e.startPeriod))];
  const monday1 = monday.map((e) => ({
    le: e.lecturer,
    ro: e.room,
    co: e.course_name,
    se: e.lession,
  }));
  console.log(monday1)

  const dataDetail = timetabledetails;
  const [filter, setFilter] = useState(defaultFilter);
  var teacher1 = [...new Set(dataDetail.map((e) => e.lecturer))];

  const filterGiaoVien = (giaovien) => {
    setFilter({ ...filter, teacher: giaovien.value });
  };

  const filterYear = (y) => {
    setFilter({ ...filter, year1: y.value });
  };

  const filterSemester = (s) => {
    setFilter({ ...filter, semester1: s.value });
  };
  const data1 = [
    {
      tiet: "1",
      thu2: ["2","toan12", "thay duong", "102"],
      thu3: null,
      thu4: "toan14",
      thu5: null,
      thu6: "toan16",
      thu7: null,
      chunhat: null,
    },
    {
      tiet: "2",
      thu2: ['','','',''],
      thu3: "toan23",
      thu4: null,
      thu5: null,
      thu6: "tona26",
      thu7: null,
      chunhat: null,
    },
    {
      tiet: "3",
      thu2: ["3","toan32", "", "302"],
      thu3: null,
      thu4: "toan34",
      thu5: "toan35",
      thu6: "tona36",
      thu7: "toan37",
      chunhat: "toan3cn",
    },
    {
      tiet: "4",
      thu2: ['','','',''],
      thu3: "toan43",
      thu4: "toan44",
      thu5: null,
      thu6: "tona46",
      thu7: "toan47",
      chunhat: "toan4cn",
    },
    {
      tiet: "5",
      thu2: ['','','',''],
      thu3: null,
      thu4: "toan54",
      thu5: null,
      thu6: null,
      thu7: "toan57",
      chunhat: "toan5cn",
    },
    {
      tiet: "6",
      thu2: ["4","toan62", "thay duong", "602"],
      thu3: null,
      thu4: null,
      thu5: null,
      thu6: null,
      thu7: null,
      chunhat: "toan5cn",
    },
  ];

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
  
  var nam = dataDetail.map((e) => e.year);
  var nam1 = [...new Set(nam)];
  var ki1 = [...new Set(dataDetail.map((e) => e.semester))];
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
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    return obj;
  };
  const columns = [
    {
      title: "Tiết",
      dataIndex: "tiet",
      render: renderContent,
    },
    {
      title: "Thứ 2",
      dataIndex: "thu2",
      render: (value, row, index)=>{
        if(value!==null){
          return{
            children: value,
          }
        }
        if(value==null){
          return {
            
          }
        }
        return value.name;
      },
      // render: thu2 => (
      //   <>
      //     {thu2.map(tag => {
      //       return (
      //         <p>
      //           {tag[0]}
      //         </p>
      //       );
      //     })}
      //   </>
      // ),
      
      },
    {
      title: "Thứ 3",
      dataIndex: "thu3",
      render: renderContent,
    },
    {
      title: "Thứ 4",
      dataIndex: "thu4",
      render: renderContent,
    },
    {
      title: "Thứ 5",
      dataIndex: "thu5",
      render: renderContent,
    },
    {
      title: "Thứ 6",
      dataIndex: "thu6",
      render: renderContent,
    },
    {
      title: "Thứ 7",
      dataIndex: "thu7",
      render: renderContent,
    },
    {
      title: "Chủ nhật",
      dataIndex: "chunhat",
      render: renderContent,
    },
  ];
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
          placeholder="Giáo viên"
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
          placeholder="Giáo viên"
          onChange={filterGiaoVien}
          styles={customStyles}
          className="select"
        />
        <button onClick={() => setFilter(defaultFilter)}>Reset</button>
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
      <Table columns={columns} dataSource={data1} bordered pagination={false} />
    </div>
  );
}
