import React from 'react'

const Details = ({ data }) => {
    return (
        <>
            <h3 className='details-title'>{data.title}</h3>
            {data.details.map(item => {
                return (
                    <div className='condition-group'>
                        <span className='key'>{Object.keys(item).toString().replaceAll('_', ' ')}</span>
                        <span className='value'>{Object.values(item)}</span>
                    </div>
                )
            })}
        </>
    )

}

export default Details
