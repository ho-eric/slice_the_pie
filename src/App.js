
import React, { useState } from 'react';
import PieChartFunctional from './components/PieChartFunctional.jsx';
import Stepper from 'react-stepper-js'
import 'react-stepper-js/dist/index.css'
import Tooltip from 'react-tooltip-lite';
import './App.css';


let revenueData = [
  { name: "Medical Center", value: 45, color: "#E3A400" },
  { name: "Student Fees", value: 4, color: "#F0BF00" },
  { name: "State of California", value: 8, color: "#F6E50E" },
  { name: "Tuition", value: 11, color: "#FFF688" },
  { name: "Research Grants and Contracts", value: 13, color: "#5F63EC" },
  { name: "Pell Grants", value: 1, color: "#71A8FF" },
  { name: "Non-educational Services", value: 11, color: "#0F7AB4" },
  { name: "Gifts, Endowments, Interest, etc", value: 7, color: "#D4E4FF" }
]

let userRevenueData = [
  { name: "Medical Center", value: 0, color: "#E3A400" },
  { name: "Student Fees", value: 0, color: "#F0BF00" },
  { name: "State of California", value: 0, color: "#F6E50E" },
  { name: "Tuition", value: 0, color: "#FFF688" },
  { name: "Research Grants and Contracts", value: 0, color: "#5F63EC" },
  { name: "Pell Grants", value: 0, color: "#71A8FF" },
  { name: "Non-educational Services", value: 0, color: "#0F7AB4" },
  { name: "Gifts, Endowments, Interest, etc", value: 0, color: "#D4E4FF" }
]

let expenditureData = [
  { name: "Medical Center", value: 43, color: "#E3A400" },
  { name: "Teaching and Teaching Support", value: 23, color: "#F0BF00" },
  { name: "Research", value: 11, color: "#F6E50E" },
  { name: "Student Services and Financial Aid", value: 8, color: "#FFF688" },
  { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: "#5F63EC" },
  { name: "Administration", value: 3, color: "#71A8FF" },
  { name: "Non-Educational Services", value: 2, color: "#0F7AB4" },
  { name: "Public Service", value: 2, color: "#D4E4FF" },
  { name: "Depreciation, Interest, etc.", value: 6, color: "white" }
]

let userExpenditureData = [
  { name: "Medical Center", value: 0, color: "#E3A400" },
  { name: "Teaching and Teaching Support", value: 0, color: "#F0BF00" },
  { name: "Research", value: 0, color: "#F6E50E" },
  { name: "Student Services and Financial Aid", value: 0, color: "#FFF688" },
  { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: "#5F63EC" },
  { name: "Administration", value: 0, color: "#71A8FF" },
  { name: "Non-Educational Services", value: 0, color: "#0F7AB4" },
  { name: "Public Service", value: 0, color: "#D4E4FF" },
  { name: "Depreciation, Interest, etc.", value: 0, color: "white" }
]

let total = 0;
let total2 = 0;

/* App */
function App() {

  const [curState, changeState] = useState("revenues");
  const [revPieData, setRevPieData] = useState(userRevenueData);
  const [expPieData, setExpPieData] = useState(userExpenditureData);

  function handleChildClick(index, val, key, id) {
    // console.log("id is: ",id);
    if (key === "Enter" && !isNaN(val)) {
      console.log("total before", total);
      console.log("val before", val);
      let newVal = 0;
      total += val;
      if (total > 100) {
        newVal = total - 100;
        total -= newVal;
        val -= newVal;
        document.getElementById(id).value = val;
      }
      console.log("total after", total);
      console.log("val after", val);

      let newData = [...revPieData];
      newData[index].value = val;
      setRevPieData(newData);
    }

  }

  function handleExpChildClick(index, val, key, id) {
    if (key === "Enter" && !isNaN(val)) {
      let newVal = 0;
      total2 += val;
      if (total2 > 100) {
        newVal = total2 - 100;
        total2 -= newVal;
        val -= newVal;
        document.getElementById(id).value = val;
      }

      let newData = [...expPieData];
      newData[index].value = val;
      setExpPieData(newData);
    }
  }

  function restartHandler() {
    for (let i = 0; i < userRevenueData.length; i++) {
      userRevenueData[i].value = 0;
    }

    for (let i = 0; i < userExpenditureData.length; i++) {
      userExpenditureData[i].value = 0;
    }

    total = 0;
    total2 = 0;

    changeState("revenues");
  }

  function clearInputVals() {
    document.getElementById("MedicalC").value = userExpenditureData[0].value;
    document.getElementById("StudentFees").value = userExpenditureData[1].value;
    document.getElementById("StateofCal").value = userExpenditureData[2].value;
    document.getElementById("tuition").value = userExpenditureData[3].value;
    document.getElementById("RGrants").value = userExpenditureData[4].value
    document.getElementById("PGrants").value = userExpenditureData[5].value;
    document.getElementById("NonEdu").value = userExpenditureData[6].value;
    document.getElementById("Gifts").value = userExpenditureData[7].value;

    if (document.getElementById("MedicalC").value === 0)
      document.getElementById("MedicalC").value = "";
    if (document.getElementById("StudentFees").value === 0)
      document.getElementById("StudentFees").value = "";
    if (document.getElementById("StateofCal").value === 0)
      document.getElementById("StateofCal").value = "";
    if (document.getElementById("tuition").value === 0)
      document.getElementById("tuition").value = "";
    if (document.getElementById("RGrants").value === 0)
      document.getElementById("RGrants").value = "";
    if (document.getElementById("PGrants").value === 0)
      document.getElementById("PGrants").value = "";
    if (document.getElementById("NonEdu").value === 0)
      document.getElementById("NonEdu").value = "";
    if (document.getElementById("Gifts").value === 0)
      document.getElementById("Gifts").value = "";

  }

  function restoreInputVals() {

    document.getElementById("MedicalC2").value = userRevenueData[0].value;
    document.getElementById("Teaching").value = userRevenueData[1].value;
    document.getElementById("Research").value = userRevenueData[2].value;
    document.getElementById("SServices").value = userRevenueData[3].value;
    document.getElementById("Maintenance").value = userRevenueData[4].value;
    document.getElementById("Admin").value = userRevenueData[5].value;
    document.getElementById("Services").value = userRevenueData[6].value;
    document.getElementById("PServices").value = userRevenueData[7].value;

    if (document.getElementById("MedicalC2").value === 0)
      document.getElementById("MedicalC2").value = "";
    if (document.getElementById("Teaching").value === 0)
      document.getElementById("Teaching").value = "";
    if (document.getElementById("Research").value === 0)
      document.getElementById("Research").value = "";
    if (document.getElementById("SServices").value === 0)
      document.getElementById("SServices").value = "";
    if (document.getElementById("Maintenance").value === 0)
      document.getElementById("Maintenance").value = "";
    if (document.getElementById("Admin").value === 0)
      document.getElementById("Admin").value = "";
    if (document.getElementById("Services").value === 0)
      document.getElementById("Services").value = "";
    if (document.getElementById("PServices").value === 0)
      document.getElementById("PServices").value = "";
  }

  //start of code//

  if (curState === "revenues") {
    return (
      <div>
        <h2>Slice the Pie</h2>
        <div className="txt">
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.</p>
        </div>
        <div className="stepper">
          <Stepper
            color="#71A8FF"
            fontSize="10px"
            fontColor="white"
            steps={[
              { label: "REVENUES" },
              { label: "EXPENSES" },
              { label: "COMPARE" },
            ]}
            currentStep={1}
          />
        </div>
        <h4>UC Davis Revenues </h4>
        <div className="pieChart">
          <PieChartFunctional data={revPieData} name="pie1" />
        </div>
        <div className="headers">
          <p>Function</p>
          <p>Percentage (%)</p>
        </div>
        <div className="form">
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#E3A400" }}></div> Medical Center <Tooltip content="A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare." className="popover" direction="down"><span>&#9432;</span></Tooltip>
            </label>
            <div className="line">
              <input type="number" className="values" id="MedicalC" placeholder="0" onKeyUp={event => handleChildClick(0, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#F0BF00" }}></div> Student Fees <Tooltip content="Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="StudentFees" placeholder="0" onKeyUp={event => handleChildClick(1, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#F6E50E" }}></div>State of California <Tooltip content="General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" placeholder="0" id="StateofCal" onKeyUp={event => handleChildClick(2, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#FFF688" }}></div>Tuition <Tooltip content="Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" placeholder="0" id="tuition" onKeyUp={event => handleChildClick(3, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#5F63EC" }}></div>Research Grants<br /> and Contracts <Tooltip content="Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="RGrants" placeholder="0" onKeyUp={event => handleChildClick(4, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#71A8FF" }}></div>Pell Grants <Tooltip content="Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="PGrants" placeholder="0" onKeyUp={event => handleChildClick(5, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#0F7AB4" }}></div>Non-educationsal<br /> Services <Tooltip content="Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="NonEdu" placeholder="0" onKeyUp={event => handleChildClick(6, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#D4E4FF" }}></div>Gifts, Endowments, <br /> Interest, etc <Tooltip content="Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Gifts" placeholder="0" onKeyUp={event => handleChildClick(7, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
        </div>
        <div className="align_total">
          <div className="total" >
            <span className="percent">%</span>
            <input className="values" value={total} placeholder="0" readOnly></input>&nbsp; &nbsp;
            <div>Total %</div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => { console.log("enters click"); clearInputVals(); changeState("expenses"); }} className="nextButton" id="next">Next</button>
        </div>
      </div>
    )
  } else if (curState === "expenses") {
    return (
      <div>
        <h2>Slice the Pie</h2>
        <div className="txt">
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.</p>
        </div>
        <div className="stepper">
          <Stepper
            color="#71A8FF"
            fontSize="10px"
            fontColor="white"
            steps={[
              { label: "REVENUES" },
              { label: "EXPENSES" },
              { label: "COMPARE" },
            ]}
            currentStep={2}
          />
        </div>
        <h4>UC Davis Expenditures</h4>
        <div className="pieChart">
          <PieChartFunctional data={expPieData} name="pie1" />
        </div>
        <div className="headers">
          <p>Function</p>
          <p>Percentage (%)</p>
        </div>
        <div className="form">
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#E3A400" }}></div>Medical Center <Tooltip content="The cost of providing care at the Medical Center is roughly what we get paid to provide it." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="MedicalC2" placeholder="0" onKeyUp={event => handleExpChildClick(0, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#F0BF00" }}></div>Teaching and<br /> Teaching Support <Tooltip content="Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Teaching" placeholder="0" onKeyUp={event => handleExpChildClick(1, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#F6E50E" }}></div>Research <Tooltip content="The costs of doing the research, mostly researcher salaries." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Research" placeholder="0" onKeyUp={event => handleExpChildClick(2, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#FFF688" }}></div>Student Services <br /> and Financial Aid <Tooltip content="Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="SServices" placeholder="0" onKeyUp={event => handleExpChildClick(3, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#5F63EC" }}></div>Operations and <br /> Maintenance <Tooltip content="Upkeep of the grounds and building, and utilities, which are less than 1%." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Maintenance" placeholder="0" onKeyUp={event => handleExpChildClick(4, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#71A8FF" }}></div>Administration <Tooltip content="Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Admin" placeholder="0" onKeyUp={event => handleExpChildClick(5, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#0F7AB4" }}></div>Services <Tooltip content="The costs of providing dorms, dining, parking, etc." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Services" placeholder="0" onKeyUp={event => handleExpChildClick(6, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "#D4E4FF" }}></div>Public Service <Tooltip content="Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="PServices" placeholder="0" onKeyUp={event => handleExpChildClick(7, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
          <div className="field">
            <label> <div className="legend" style={{ backgroundColor: "white" }}></div>Depreciation, Interest, etc <Tooltip content="Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses." className="popover" direction="down"><span>&#9432;</span></Tooltip></label>
            <div className="line">
              <input type="number" className="values" id="Deprec" placeholder="0" onKeyUp={event => handleExpChildClick(8, event.target.valueAsNumber, event.key, event.target.id)}></input>
              <span className="percent">%</span>
            </div>
          </div>
        </div>
        <div className="align_total">
          <div className="total">
            <span className="percent">%</span>
            <input className="values" value={total2} placeholder="0" readOnly></input>&nbsp; &nbsp;
            <div>Total %</div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => changeState("compareRevenue")} className="compareButton" id="compare">Compare</button>
          <button onClick={() => { changeState("revenues"); restoreInputVals(); }} className="previousButton" id="prev">Previous</button>
        </div>
      </div>
    )
  } else if (curState === "compareRevenue") {
    return (
      <div>
        <h2>Slice the Pie</h2>
        <div className="txt">
          <p>Say you got into run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.</p>
        </div>
        <div className="stepper">
          <Stepper
            color="#71A8FF"
            fontSize="10px"
            fontColor="white"
            steps={[
              { label: "REVENUES" },
              { label: "EXPENSES" },
              { label: "COMPARE" },
            ]}
            currentStep={3}
          />
        </div>
        <h2>RESULTS</h2>
        <h4>Your Revenue Guess</h4>
        <div className="pieChart">
          <PieChartFunctional data={revPieData} name="pie1" />
        </div>
        <h4>Actual Revenue</h4>
        <div className="pieChart">
          <PieChartFunctional data={revenueData} name="pie2" />
        </div>
        <div className="buttons">
          <button onClick={() => changeState("compareExpenses")} className="nextButton" id="next">Next</button>
        </div>
      </div>
    )
  } else if (curState === "compareExpenses") {
    return (
      <div>
        <h2>Slice the Pie</h2>
        <div className="txt">
          <p>Say you got into run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.</p>
        </div>
        <div className="stepper">
          <Stepper
            color="#71A8FF"
            fontSize="10px"
            fontColor="white"
            steps={[
              { label: "REVENUES" },
              { label: "EXPENSES" },
              { label: "COMPARE" },
            ]}
            currentStep={3}
          />
        </div>
        <h2>RESULTS</h2>
        <h4>Your Expenses Guess</h4>
        <div className="pieChart">
          <PieChartFunctional data={expPieData} name="pie1" />
        </div>
        <h4>Actual Expenses</h4>
        <div className="pieChart">
          <PieChartFunctional data={expenditureData} name="pie2" />
        </div>
        <div className="buttons">
          <button onClick={() => restartHandler()} className="nextButton" id="next">Restart</button>
        </div>
      </div>
    )
  }
}



export default App;
