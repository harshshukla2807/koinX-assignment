// import { rootUrl } from "@/app/page";
import Footer from "@/components/Footer";
import Leftcomponent from "@/components/Leftcomponent";
import Rightcomponent from "@/components/Rightcomponent";

// const getdata = async () => {
//   const url = `${rootUrl}/coins/list`;
//   const options = {method: 'GET'}
     
//   const res = await fetch(url,options)
//   const data= await res.json()

//   return data
// }

const page = async({ params }) => {
  // console.log(params)
  
  // const data= await getdata()
    
  return (
    <div>
      <p className="text-sm ml-4 mt-2 mb-2">
        Cryptocurrencies &gt;&gt; <strong>{params.slug}</strong>
      </p>
      <div className="flex-col justify-center items-center m-4">
        <Leftcomponent params={params}/>
        <Rightcomponent/>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
