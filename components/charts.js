import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function charts(props) {
  const [dataChart, setDataChart] = useState([{}]);
  const [co2Data, setCo2Data] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {}, 5000);
  }, []);
  console.log(props.data);
  return (
    <BarChart
      width={600}
      height={300}
      data={[
        { name: "co2", uv: props.data.co2 },
        { name: "hum", uv: props.data.hum },
        { name: "lit", uv: props.data.lit },
        { name: "pir", uv: props.data.pir },
        { name: "tem", uv: props.data.tem },
      ]}
    >
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}
