const WeHelpComponent = () => {
    return (
        <div className="help-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <h2 className="section-title">We Help You with Modern Interior Design</h2>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="help-item">
                                    <img src="images/item1.svg" alt="item 1" />
                                    <h3>Design &amp; Comfort</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="help-item">
                                    <img src="images/item2.svg" alt="item 2" />
                                    <h3>Durability &amp; Quality</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="help-item">
                                    <img src="images/item3.svg" alt="item 3" />
                                    <h3>Stylish &amp; Affordable</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="help-item">
                                    <img src="images/item4.svg" alt="item 4" />
                                    <h3>Eco-Friendly</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WeHelpComponent;