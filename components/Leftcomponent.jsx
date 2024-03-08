import About from "./About"
import Chartcontainer from "./Chartcontainer"
import Performance from "./Performance"
import Sectionbar from "./Sectionbar"
import Sentiments from "./Sentiments"


const Leftcomponent = () => {
  return (
    <div>
      <div className="m-3">
        <Chartcontainer/>
        <Sectionbar/>
        <Performance/>
        <Sentiments/>
        <About/>
      </div>
    </div>
  )
}

export default Leftcomponent