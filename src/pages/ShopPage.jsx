const ShopPage = ( {products} ) => {
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
        <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
             {/* Start Column 2 */}
             {products?.map((item) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={item.id}>
                <a className="product-item" href="cart.html">
                  <img
                    src={item.image}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{item.title}</h3>
                  <strong className="product-price">{item.price}</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
            ))}
            {/* End Column 2 */}
            {/* End Column 1 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
