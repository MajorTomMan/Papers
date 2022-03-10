class Node{
    #name="";
    #message=[];
    #next=null;
    constructor(name,message,next){
        this.#name=name
        this.#message.push(message)
        this.#next=next
    }
    getName(){
        return this.#name
    }
    getMessage(){
        return this.#message
    }
    getNext(){
        return this.#next
    }
    setName(name){
        this.#name=name
    }
    setMessage(message){
        this.#message.push(message)
    }
    setNext(next){
        this.#next=next
    }
}



class LinkList{
    #head=null
    constructor({name,message}){
        this.#head=new Node(name,message,null)
    }
    #isEmpty(){
        if(this.#head===null){
            return true
        }
        return false
    }
    delete({name}){
        if(this.#isEmpty()){
            this.head=new Node(name,message,null)
            return;
        }
        let target=this.#head;
        for(let pre=null;target.getName()!==name&&target!=null;pre=target,target=target.getNext()){
            if(target.getName===name){
                pre.setNext(target.getNext())
                break;
            }
        }
    }
    insert({name,message}){
        if(this.#isEmpty()){
            this.head=new Node(name,message,null)
            return;
        }
        let target=this.find({name:name})
        if(target==null){
            let node=new Node(name,message,null)
            node.setNext(this.#head.getNext()) //头插法
            this.#head.setNext(node); 
        }
        else{
            target.setMessage(message)
        }
    }
    find({name}){
        if(this.#isEmpty()){
            this.#head=new Node(name,message,null)
            return;
        }
        let temp=this.#head
        while(temp!=null){
            if(temp.getName()==name){
                return temp
            }
            temp=temp.getNext()
        }
        return null;
    }
    query(){
        let data=[]
        let temp=this.#head
        while(temp!==null){
            if(temp.getName()==null){
                ;
            }
            else{
                data.push([temp.getName(),temp.getMessage()])
            }
            temp=temp.getNext()
        }
        return data
    }
}


const List=new LinkList("",[],null)

module.exports=List