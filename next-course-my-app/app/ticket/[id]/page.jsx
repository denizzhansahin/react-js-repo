import { notFound } from "next/navigation"


export const dynamicParams = true

export async function generateStaticParams() {
    //[{id : '1'}, {id : '2'},...]
    await new Promise(resolve=>setTimeout(resolve,3000))
    const res = await fetch("http://localhost:4000/tickets/")
    const tickets = await res.json()
    return tickets.map((ticket)=>({
        id:ticket.id
    }))
}

async function getTicket(id){
    await new Promise(resolve=>setTimeout(resolve,3000))
    const res = await fetch("http://localhost:4000/tickets/"+id,{
        next : {
            revalidate : 0
        }
    })

    if(!res.ok){
        notFound()
    }
    return res.json()
}

export default async function TicketDetails({params}){
    //const id = params.id
    const ticket = await getTicket(params.id);
    console.log("ticket");

    console.log(ticket);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={'pill '+ticket.priority}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}