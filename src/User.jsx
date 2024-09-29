import CardBox from './CardBox';
import './User.css'

const User = ({data, order}) =>{
    const transformedData = data.users.reduce((acc, user) => {
        const userTickets = data.tickets.filter(ticket => ticket.userId === user.id);
        const sortedTickets = [...userTickets].sort((a, b) => {
          if (order === 'Priority') {
            return b.priority - a.priority;
          } else if (order === 'Title') {
            return a.title.localeCompare(b.title); 
          }
          return 0; // Default (no sorting)
        });
    
        acc[user.id] = {
          name: user.name,
          available: user.available,
          tickets: sortedTickets
        };
    
        return acc;
      }, {});
      console.log(transformedData);

    return(
        <div className="user">
            {
               Object.values(transformedData).map((user)=>{
                    return <CardBox name={user.name} value={user.tickets} />
                })
            }
            {
                
            }
        </div>
    )
}

export default User;