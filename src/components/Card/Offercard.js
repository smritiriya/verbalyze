import React from "react";
// import color from "../../../constant";

const carde = {
  //  color: "#6641AA",
  //  fontWeight: "800",
  border: "none",
  textAlign: "center",
  borderRadius: "10px",
  height: "100%",
  maxHeight: "auto",
  backgroundColor: "white",
  width: "300px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};
const topic = {
  fontWeight: "600",
  fontSize: "18px",
//   color: color.dark,
  margin: "5px",
};

const para = {
//   color: color.grey,
};

function OfferCard({ data }) {
  return (
    <div
      className="col-12  col-md-6 col-lg-3 my-3 py-2 py-md-1"
      key={data?.key}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="row d-flex justify-content-center align-items-start   m-auto p-3  "
        style={carde}
      >
        <div
          className="icon rounded-circle p-2 my-3 d-flex justify-content-center align-items-center"
          style={{
            // backgroundColor: color.shadowGrey,
            width: "80px",
            height: "80px",
          }}
        >
          <img
            src={data?.icon}
            alt="icon"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <text className="Heading-2 text-center" style={topic}>
          {data?.title}
        </text>
        <text className="Text-1 text-center" style={para}>
          {data?.desc}
        </text>
      </div>
    </div>
  );
}

export default OfferCard;
