import { create } from 'zustand'

let useConversationsZus = create((set)=>({
    selectedConversation:null,
    setselectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages})

}))

export default useConversationsZus