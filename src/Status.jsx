import Card from "./components/Card";
import CardBox from "./CardBox";
import './Status.css'

const Status = ({data, order}) =>{

    let backlog = [];
    let todo = [];
    let inProgress = [];
    let done =  [];
    let canceled = [];

    const sortStatus = () => {
        const statusInfo = Array.from(data.tickets);
        for(let i = 0; i < statusInfo.length;i++){
            switch (statusInfo[i].status) {
                case "Backlog":
                    backlog.push(statusInfo[i]);
                    break;
                case "Todo":
                    todo.push(statusInfo[i]);
                    break;
                case "In progress":
                    inProgress.push(statusInfo[i]);
                    break;
                case "Done":
                    done.push(statusInfo[i]);
                    break;
                case "Canceled":
                    canceled.push(statusInfo[i]);
                    break;
            
                default:
                    break;
            }
        }
    }
    console.log(backlog);

    sortStatus();

    if(order === "Priority"){
        backlog = backlog.sort((a, b) => b.priority - a.priority);
        todo = todo.sort((a, b) => b.priority - a.priority);
        inProgress = inProgress.sort((a, b) => b.priority - a.priority);
        done = done.sort((a, b) => b.priority - a.priority);
        canceled = canceled.sort((a, b) => b.priority - a.priority);
    }
    
    if (order === "Title"){
        backlog = backlog.sort((a, b) => a.title.localeCompare(b.title));
        todo = todo.sort((a, b) => a.title.localeCompare(b.title));
        inProgress = inProgress.sort((a, b) => a.title.localeCompare(b.title));
        done = done.sort((a, b) => a.title.localeCompare(b.title));
        canceled = canceled.sort((a, b) => a.title.localeCompare(b.title));
    }

    return(
        <div className="status">
            <CardBox icon={"icons/Backlog.svg"} name={"Backlog"} value={backlog} />
            <CardBox icon={"icons/To-do.svg"} name={"Todo"} value={todo} />
            <CardBox icon={"icons/in-progress.svg"} name={"In Progress"} value={inProgress} />
            <CardBox icon={"icons/Done.svg"} name={"Done"} value={done} />
            <CardBox icon={"icons/Cancelled.svg"} name={"Canceled"} value={canceled} />
        </div>
    )
}

export default Status;