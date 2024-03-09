import About from "./About"
import Chartcontainer from "./Chartcontainer"
import Performance from "./Performance"
import Sectionbar from "./Sectionbar"
import Sentiments from "./Sentiments"
import Team from "./Team"
import Tokenomics from "./Tokenomics"


const Leftcomponent = () => {
  return (
      <div className="m-3">
        <Chartcontainer/>
        <Sectionbar/>
        <Performance/>
        <Sentiments/>
        <About/>
        <Tokenomics/>
        <Team/>
      </div>
  )
}

export default Leftcomponent