import React,{useContext} from 'react'

import {SessionContext} from '../AppHooks'

function ContextHookChildTwo() {
    const sessionUser = useContext(SessionContext)
    return (
        <div>
            Logged in Username is {sessionUser}
        </div>
    )
}

export default ContextHookChildTwo
