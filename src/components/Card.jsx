import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";
import { useSelector } from "react-redux";
import { UserImage } from "./ImgData";

const Card = ({ id, title, tags, status, user_id }) => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
  const userObj = UserImage.find((user) => user.user_id === user_id);

  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span
          style={{
            textTransform: "uppercase",
            color: "darkgrey",
            fontWeight: "bold",
          }}
        >
          <input type="checkbox" className="custom-checkbox" /> {id}
        </span>

        {!user && (
          <div className="image">
            <img src={userObj?.img} alt="QuickSell" />
            <div className="status">{userObj?.sign}</div>
          </div>
        )}
      </div>

      <div className="title">
        <p style={{ color: "black", fontWeight: "normal" }}>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((tag, index) => (
          <div key={index} className="tag">
            <span>🟢</span> {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
