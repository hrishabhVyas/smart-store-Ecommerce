import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Smart Store"}>
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
            
SmartStore is your ultimate destination for seamless online shopping. With a diverse range of high-quality products, curated to meet your needs, we bring innovation and convenience to your fingertips. Our user-friendly platform ensures a hassle-free experience, while our commitment to excellence guarantees satisfaction. Discover the latest trends, explore exclusive deals, and shop with confidence at SmartStore. Elevate your online shopping journey with us—where intelligence meets style. Welcome to a smarter way of shopping, welcome to SmartStore.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
