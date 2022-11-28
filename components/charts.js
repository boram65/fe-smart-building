import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export default function charts(props) {
  const [room, setRoom] = useState("413");
  const [co2Data, setCo2Data] = useState([{}]);
  const re = [];

  useEffect(() => {
    const dataPush = () => {
      //보고싶은 방이 바뀌면 stat초기화
      if (room != props.data.room) {
        setCo2Data([]);
        setRoom(props.data.room);
      }
      if (co2Data.length > 10) {
        co2Data.splice(0, 1);
        setCo2Data([...co2Data]);
      }

      setCo2Data([...co2Data, { name: "co2", uv: props.data.co2 }]);
      console.log(co2Data);
    };
    const timer = setInterval(dataPush(), 5000);

    return () => clearInterval(timer);
  }, [props]);

  // console.log(co2Data);
  return (
    <LineChart
      width={700}
      height={300}
      data={co2Data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
