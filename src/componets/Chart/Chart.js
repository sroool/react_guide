import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const totalMax = Math.max(
    ...props["dataPoints"].map((dataPoint) => dataPoint["value"])
  );
  return (
    <div className="chart">
      {props["dataPoints"].map((dataPoint, i) => (
        <ChartBar
          key={i}
          value={dataPoint["value"]}
          maxValue={totalMax}
          label={dataPoint["label"]}
        />
      ))}
    </div>
  );
}

export default Chart;
