import Card from "./components/Card";
import './CardBox.css';

const CardBox = ({icon, name, value}) => {

    return(
        <div className="cardbox">
            <div className="top">
                <div className="first">
                    {icon && <img src={icon} alt=" icon" />}
                    &nbsp; {name}
                    &nbsp; {value.length}
                </div>
                <div className="second">
                    <img src="icons/add.svg" alt="add icon" />
                    <img src="icons/3 dot menu.svg" alt="3 dot icon" />
                </div>
            </div>
            <div className="each-card">
                {
                    value.map((item) => (
                         <Card item = {item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CardBox;