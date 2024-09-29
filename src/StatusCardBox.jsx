import Card from "./components/Card";


const StatusCardBox = ({icon, name, value}) => {

    return(
        <div className="priority-cardbox">
            <div className="top">
                <div className="first">
                    <img src={icon} alt="3 dot icon" />
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

export default StatusCardBox;