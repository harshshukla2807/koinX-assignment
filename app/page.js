import Leftcomponent from "@/components/Leftcomponent";
import Rightcomponent from "@/components/Rightcomponent";


export const rootUrl= "https://api.coingecko.com/api/v3/"


export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col xl:flex-row">
        <Leftcomponent/>
        <Rightcomponent/>
      </div>
    </div>
  );
}
