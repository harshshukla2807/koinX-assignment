import Selectcoins from "@/components/Selectcoins";
import { rootUrl } from "./utils/rooturl";


export const getdata = async () => {
  // console.log(params.slug)
  const queryParams = new URLSearchParams({
    vs_currency: "usd",
  });

  const url = `${rootUrl}/coins/markets?${queryParams}`;
  const options = { method: "GET" };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

const Home = async()=> {
  
  const data= await getdata()
  // console.log(data)
  
  return (
    <div className="flex justify-center">
      <Selectcoins data={data}/>
    </div>
  );
}

export default Home