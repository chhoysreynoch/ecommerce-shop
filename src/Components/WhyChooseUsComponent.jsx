const WhyChooseUsComponent = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                        <div className="row my-5">
                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/truck.svg" alt="Fast Shipping" className="img-fluid" />
                                    </div>
                                    <h3>Fast &amp; Free Shipping</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/bag.svg" alt="Easy Shopping" className="img-fluid" />
                                    </div>
                                    <h3>Easy to Shop</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/support.svg" alt="Support" className="img-fluid" />
                                    </div>
                                    <h3>24/7 Support</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/return.svg" alt="Hassle-Free Return" className="img-fluid" />
                                    </div>
                                    <h3>Hassle-Free Returns</h3>
                                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src="images/feature-img.jpg" className="img-fluid" alt="Why Choose Us" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WhyChooseUsComponent;