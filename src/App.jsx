import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import "./app.css";
import SingleNum from "./SingleNum";
const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const getNum = async () => {
      try {
        const response = await fetch(
          "https://marketing.hafizbrothersestate.com/message/get",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const resData = await response.json();
        if (resData?.status) {
          setMsg(resData?.message);
        }
      } catch (error) {
        console.log("something went wrong");
      }
    };

    getNum();
  }, []);

  const message = "hello";

  function generateRandomMobileNumber() {
    const networkPrefixes = {
      Zong: ["300", "301", "302", "303", "304","305","306","307","308","309"],
      Jazz: ["310", "311", "312", "313", "314","315","316","317","318","319"],
      Ufone: ["320", "321", "322", "323", "324","325","325","327","328","329"],
      Telenor: ["330", "331", "332", "333", "334","335","336","337","338","339"],
      Warid: ["340", "341", "342", "343", "344","345","346","347","348","349"],
    };

    const networks = Object.keys(networkPrefixes);
    const network = networks[Math.floor(Math.random() * networks.length)];
    const prefixes = networkPrefixes[network];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    const remainingDigits = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, "0");

    setNumbers((prevNum) => [...prevNum, `+92${prefix}${remainingDigits}`]);
  }

  const generateNum = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setNumbers([]);
    for (let i = 0; i < 100; i++) {
      generateRandomMobileNumber();
    }
  };

  return (
    <div>
      <div className="action">
        <button className="btn" onClick={generateNum}>
          Generate Number
        </button>
      </div>
      <div className="number_container ">
        {numbers.map((item, index) => (
          <SingleNum msg={msg} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
