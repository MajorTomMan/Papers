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
    insert({name,message}){
        if(this.#isEmpty()){
            this.head=new Node(name,message,null)
            return;
        }
        let temp=this.#head;
        let target=this.find({name:name})
        if(target===null){
            temp.setNext(new Node(name,message,null))
        }
        else{
            temp.setMessage(message)
        }
    }
    find({name}){
        if(this.#isEmpty()){
            this.#head=new Node(name,message,null)
            return;
        }
        if(this.#head.getName()===name){
            return this.#head
        }
        let temp=this.#head;
        for(;temp!=null;temp=temp.getNext()){
            if(temp.getName()===name){
                return temp
            }
        }
        return null
    }
    query(){
        let data=[]
        let temp=this.#head
        while(temp!==null){
            data.push([temp.getName(),temp.getMessage()])
            temp=temp.getNext()
        }
        return data
    }
}


const List=new LinkList("",[],null)

module.exports=List