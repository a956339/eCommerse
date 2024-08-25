import React from 'react'
import "../NewArrival/NewArival.css"
const NewArival = () => {
    return (
        <div>

            <div className="days">
                <div className="darkLine">

                </div>
                <p>Featured</p>
            </div>

            <div className="saleType">
                <h2>New Arrival</h2>
            </div>

            {/* <div className="ImageAvivalContainerMain"> */}
            <div className="ImageContainer_arrival">

                <div className="ImageContainer_arrival_left">
                 <img src="https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682803.jpg?t=st=1724560648~exp=1724564248~hmac=4003c4d8d01dc92255ac0fc27b94f829ff9ccd730ee4a2b8973682544f2a4476&w=1060" alt="" />
                </div>

                <div className="ImageContainer_arrival_right">
                    <div className="ImageContainer_arrival_right_left">
                        <img src="https://as2.ftcdn.net/v2/jpg/08/82/87/79/1000_F_882877992_ORm68Q2na7yUeRsZfvLqcR8lNcgjZ1pH.jpg" alt="" />
                    </div>

                    <div className="ImageContainer_arrival_right_right">
                        <div className="ImageContainer_arrival_right_right_left">
                        <img src="https://picsum.photos/200/300" alt="" />
                        </div>

                        <div className="ImageContainer_arrival_right_right_right">
                        <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </div>
    )
}

export default NewArival;