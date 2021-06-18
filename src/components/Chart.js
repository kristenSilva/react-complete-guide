import './styles/Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  console.log(props.dataPoints);
  //returns an array of only value property for each month
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  console.log(dataPointValues);
  //.max() takes a list of values => use spread operator to remove values from array format 
  const totalMax = Math.max(...dataPointValues);
  console.log(totalMax);
  return(
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMax}
          label={dataPoint.label}
        />))}
    </div>
  )

}

export default Chart;