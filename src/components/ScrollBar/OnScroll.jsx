import React from "react";
import "./onscroll.scss";
import OnScrollItsm from "./OnScrollItem";

const OnScroll = () => {
  const items = [
    {
      id: 1,
      title: "Hey there you are at the right place. This is home Page",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      media: require("./../../utils/undraw_articles_wbpb.svg"),
      bg :"#fff0ff"
      // bg : require("./../../images/img-five.jpg"),

    },
    {
      id: 2,
      title: "Welcome to Our Website, Hope you like our Content",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      media: require("./../../utils/undraw_blooming_re_2kc4.svg"),
      bg :"	#9dd9d2"
      // bg : require("./../../images/img-one.jpg"),

    },
    {
      id: 3,
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      media: require("./../../utils/undraw_cloud_hosting_7xb1.svg"),
      bg :"#ffe6e8",
      // bg : require("./../../images/s-three.jpg"),

    },
    {
      id: 4,
      title:
        "Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      media: require("./../../utils/undraw_join_re_w1lh.svg"),
      bg :"#acd8aa",
      // bg : require("./../../images/s-five.jpg"),

    },
    {
      id: 5,
      title: "Hey there you are at the right place.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      media: require("./../../utils/undraw_mobile_application_re_13u3.svg"),
      bg :"#ffb804",
      // bg : require("./../../images/s-six.jpg"),

    },
  ];
  
  return (
    <div className="slider-container">
      <OnScrollItsm data={items} />
    </div>
  );
};

export default OnScroll;
