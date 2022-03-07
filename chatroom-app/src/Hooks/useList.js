export const useList=(oldlist)=>{
    const [newlist,setlist]=useState(
        oldlist
    )
    return [
        {
            newlist,
            onChange:setlist(oldlist)
        },
    ]
}