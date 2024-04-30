import './Header.css'
import Format from './Format'
import FormatY2 from './FormatY2'

const Header=(props)=>{
	const {side,setQuality,setType,setSide}=props;

 
      
	return(
		<div className="Header">
			<div className={`left ${side==='left'?'active':''}`}>
			<Format setQuality={setQuality} setType={setType} setSide={setSide}/>
			</div>
			<div className={`right ${side==='right'?'active':''}`}>
			<FormatY2 setQuality={setQuality} setType={setType} setSide={setSide}/>
			</div>
		</div>
		)
}
	
export default Header