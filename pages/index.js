import RoomStat from "../components/roomStat";
import DetailStat from "../components/detailStat";
import Chart from "../components/charts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [choice, setChoice] = useState(0);
  const [dataChart, setDataChart] = useState([{}]);

  const detailData = Rnum => {
    setChoice(Rnum);
  };
  //API호출
  const getAPI = () => {
    fetch("api/test")
      .then(response => response.json())
      .then(json => {
        setData([]);
        for (let i = 0; i < json.co2.length; i++) {
          let temp = {
            co2: json.co2[i].co2,
            hum: json.hum[i].hum,
            lit: json.lit[i].lit,
            pir: json.pir[i].pir,
            tem: json.tem[i].tem,
            room: json.co2[i].room,
            cTime: json.co2[i].createTime,
          };
          setData(data => [...data, temp]);
        }
      })
      .then(() => {
        setReady(true);
      });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getAPI();
    }, 5000);
  }, []);

  return ready !== true ? (
    <div>로딩중</div>
  ) : (
    <div className="flex flex-row w-screen h-full">
      <div className="bg-gradient-to-t from-violet-300 to-indigo-300 h-[100vh] w-[40vw]">
        <div className="h-[50vh] bg-gray-100 flex justify-center items-center">
          <Chart data={data[choice]} />
        </div>
        <div className="h-[50vh] bg-blue-200">
          <DetailStat data={data[choice]} />
        </div>
      </div>
      <div className="bg-gradient-to-b from-violet-300 bg-indigo-300  h-[100vh] w-[60vw] flex flex-wrap justify-start overflow-auto">
        {data.map((e, idx) => {
          return (
            <RoomStat data={e} Rnum={idx} detailData={detailData} key={idx} />
          );
        })}
      </div>
    </div>
  );
}
