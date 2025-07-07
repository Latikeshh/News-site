import React from 'react';
import flower from './images/assain2.png'
function Cards() {
    return (
        <>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card text-white bg-success" style={{ width: '18rem' }}>
                <img src={flower} class="card-img-bottom" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
// hiii changes

export default Cards
