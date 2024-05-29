import React from 'react'
import useGetConversation from '../../Hooks/getConversation'
import Conversation from './Conversation'

export default function Convo_rsations() {

  let { loading, conversations } = useGetConversation()
console.log("convosations btwn u and : " + conversations)

  return (
    <div className="flex flex-col overflow-auto py-2">

        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>


    </div>
  )
}


// STARTER code

// import React from 'react'
// import Conversation from './Conversation'

// export default function Convo_rsations() {
//   return (
//     <div  className="flex flex-col overflow-auto py-2">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>


//     </div>
//   )
// }
