import CounterUp from "../elements/CounterUp"


export default function Achievement1() {
    return (
        <>
            <section className="achievement-section fix section-padding pt-0">
                <div className="container">
                    <div className="achievement-wrapper">
                        
                        <div className="counter-area">
                           
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/hero/face-smile-solid (2).png" alt="icon-img" width="40px" />
                                </div>
                                <div className="content">
                                    <p>Empowered Users</p>
                                    <h3 className="text-white">Connecting Minds</h3>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                <img src="/assets/img/hero/wifi-solid (4).png" alt="icon-img" width="40px" />
                                    
                                </div>
                                <div className="content">
                                <p>Seamless Connectivity</p>
                                <h3 className="text-white">Powering Innovation</h3>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                <img src="/assets/img/compass-solid.png" alt="icon-img" width="40px" />

                                </div>
                                <div className="content">
                               <p>Leading the Way</p>
                                <h3 className="text-white">Shaping Tomorrow</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
