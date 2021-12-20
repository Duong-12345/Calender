import { useState } from "react";
import "./App.css";
import "react-table-6/react-table.css";
import { timetabledetails } from "./components/Data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Calandar1 from "./components/Calendar1";
import Calendar0 from "./components/Calendar0";
import Calandar from "./components/Calendar";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="head">
          <div style={{ width: 150 }}>
            <p className="left">THỜI KHÓA BIỂU</p>
          </div>
          <div style={{ width: 500, display: "contents" }}>
            <TabList style={{ marginBottom: 0, border: "none" }}>
              <Tab
                style={{
                  borderColor: "white",
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottom: tabIndex === 0 ? "2px solid royalblue" : "none",
                }}
              >
                <p className="name">Xem danh sách</p>
              </Tab>
              <Tab
                style={{
                  borderColor: "white",
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottom: tabIndex === 1 ? "2px solid royalblue" : "none",
                }}
              >
                <p className="name">Xem theo thứ</p>
              </Tab>
            </TabList>
          </div>
        </div>
        <TabPanel>
          <Calendar0 />
        </TabPanel>
        <TabPanel>
          <Calandar/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
