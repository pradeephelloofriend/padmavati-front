import React from 'react'

const MainLayout = ({children}) => {
    return (
        <>
        <div id='bg'>
            <div className="page-wraper">

                {children}
            </div>
        </div>
        
        </>
    )
}
export default  MainLayout