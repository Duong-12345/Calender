import React, { useState } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { timetabledetails } from "./Data";
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
export default function Calendar1() {
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
  const [datafake, setDataFake] = useState([
    {
      Id: 1,
      Subject: "Tiếng Anh",
    //   StartTime: new Date(2018, 0, 28, 10, 0),
    //   EndTime: new Date(2018, 0, 28, 12, 30),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;COUNT=8",
    },
    // {
    //   Id: 2,
    //   Subject: "Giải tích",
    //   StartTime: new Date(2018, 0, 27, 10, 0),
    //   EndTime: new Date(2018, 0, 27, 12, 30),
    //   RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=8",
    // },
  ]);
  console.log(datafake)
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
      <ScheduleComponent
        width="100%"
        height="630px"
        currentView="Week"
        selectedDate={new Date(2018, 0, 29)}
        eventSettings={{ dataSource: datafake, enableMaxHeight: true }}
        popupOpen={false}
        RecurrenceIcon={false}
        cssClass="custom-class"
        firstDayOfWeek={1}
      >
        <ViewsDirective>
          <ViewDirective option="Week" dateFormat="dd/MMM/yyyy" />
          <ViewDirective option="Month" />
          <ViewDirective option="WorkWeek" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month]} />
      </ScheduleComponent>
    </div>
  );
}
