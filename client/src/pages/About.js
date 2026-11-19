import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About us - Ecommerce app'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At E-Mart, we strive to provide a seamless online shopping experience with 
          a wide selection of quality products at competitive prices. Founded in 2024, 
          our mission is to offer customers everything from electronics and fashion to 
          home goods, all in one place. We are committed to exceptional customer service, 
          fast and secure delivery, and ensuring that each purchase is hassle-free. 
          Whether you're shopping for everyday essentials or unique finds, 
          E-Mart is here to make your shopping experience easy and enjoyable. 
          Thank you for choosing us!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;