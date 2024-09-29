import Card from "./components/Card";
import CardBox from "./CardBox";
import './Priority.css'

const Priority = ({data, order}) =>{
    const priorityValue = [
        {0:"No priority"},
        {1:"Low"},
        {2:"Medium"},
        {3:"High"},
        {4:"Urgent"},
    ]

    let noPriority = [];
    let low = [];
    let medium = [];
    let high =  [];
    let urgent = [];

    const sortPriority = () => {
        const priorityInfo = Array.from(data.tickets);
        console.log(priorityInfo);
        for(let i = 0; i < priorityInfo.length;i++){
            switch (priorityInfo[i].priority) {
                case 0:
                    noPriority.push(priorityInfo[i]);
                    break;
                case 1:
                    low.push(priorityInfo[i]);
                    break;
                case 2:
                    medium.push(priorityInfo[i]);
                    break;
                case 3:
                    high.push(priorityInfo[i]);
                    break;
                case 4:
                    urgent.push(priorityInfo[i]);
                    break;
            
                default:
                    break;
            }
        }
    }

    sortPriority();

    if (order === "Title"){
        noPriority = noPriority.sort((a, b) => a.title.localeCompare(b.title));
        urgent =urgent.sort((a, b) => a.title.localeCompare(b.title));
        high = high.sort((a, b) => a.title.localeCompare(b.title));
        medium = medium.sort((a, b) => a.title.localeCompare(b.title));
        low = low.sort((a, b) => a.title.localeCompare(b.title));
    }

    return(
        <div className="priority">
            <CardBox icon={"icons/No-priority.svg"} name={"No priority"} value={noPriority} />
            <CardBox icon={"icons/SVG - Urgent Priority colour.svg"} name={"Urgent"} value={urgent} />
            <CardBox icon={"icons/Img - High Priority.svg"} name={"High"} value={high} />
            <CardBox icon={"icons/Img - Medium Priority.svg"} name={"Medium"} value={medium} />
            <CardBox icon={"icons/Img - Low Priority.svg"} name={"Low"} value={low} />
        </div>
    )
}

export default Priority;