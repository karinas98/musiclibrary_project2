import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "./const";

const Chart = () => {
  const [chartResult, setChartResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${API_URL}/charts/track?locale=en-GB&startFrom=0&pageSize=10`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
          },
        }
      );
      console.log(data.tracks);
      setChartResult(data.tracks);
    };
    fetchData();
  }, []);
  return (
    <div className="charts-page">
      <h1>Top 10 Chart List</h1>
      <ul className="charts-container">
        {chartResult.map((chart, idx) => (
          <li key={idx} className="charts-list">
            <img className="charts-img" src={chart.share.image} />
            <p className="charts-item">{chart.title}</p>
            <p className="charts-item">{chart.subtitle}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Chart;
