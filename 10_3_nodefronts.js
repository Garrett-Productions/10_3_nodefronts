//1. Front 2. Remove Front. 3. Add Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// the value that we need to return is the value that we provide
class Node {
    constructor(data){ 
        this.data=data;
        this.next=null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    Front(val){
        new_Node = new Node(val)
        if(!this.head){ // if there is no head assign the value to the head
            this.head = new_Node(val)
            return this.head.val;
        }
        if(!this.head){ // if there is no value to be assigned above, return null
            return null
        }
    }
    removeFront(){ //remove the head node and return the new list head node
        if(this.head)
        this.head = this.head.next; // removing the current head position and assigning new
    }
    addFront(val){ ////Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
        fresh_node = new Node(val); //by default it's assigned the next position
        if(!this.head){
            this.head=fresh_node;
            return this
        }
        fresh_node.next = this.head;
        this.head=fresh_node
        return this
    } 
}
