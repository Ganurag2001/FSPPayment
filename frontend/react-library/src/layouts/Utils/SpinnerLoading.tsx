import React from 'react'

const SpinnerLoading = () => {
    return (
        <div className='container m-5 d-flex justify-content-center'
            style={{ height: 550}}>
                <div className='spinner-border text-primary' role='status'>
                    <span className='visually-hidden'>
                        Loading...
                    </span>
                </div>
            {/* SpinnerLoading */}
        </div>
    )
}

export default SpinnerLoading