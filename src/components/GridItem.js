import React from 'react'

export const GridItem = ({ id, title, url }) => {
    // console.log(img);
    return (
        <div className="col-12 col-sm-6 col-md-3 text-center animate__animated animate__fadeInUp">
            <div className="m-2">
                <div className="card">
                    <div className="card-header">
                        <img src={url} alt={title} className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
