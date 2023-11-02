// import React, { useState } from "react";
// import "./Add_Card.css";

// const CardPopup = ({ onCardSubmit, onClose }) => {
//   const [id, setId] = useState("");
//   const [title, setTitle] = useState("");
//   const [tag, setTag] = useState("");
//   const [userImg, setUserImg] = useState("");
//   const [userId, setUserId] = useState("");
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the data
//     if (
//       id.trim() === "" ||
//       title.trim() === "" ||
//       tag.trim() === "" ||
//       userImg.trim() === "" ||
//       userId.trim() === ""
//     ) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Create the card object
//     const newCard = {
//       id,
//       title,
//       tag,
//       userImg,
//       userId,
//     };

//     // Submit the new card
//     // onCardSubmit(newCard);

//     // Clear the form
//     setId("");
//     setTitle("");
//     setTag("");
//     setUserImg("");
//     setUserId("");
//     setShowSuccessMessage(true);

//     // Hide success message after 5 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 15000);

//     // Close the pop-up
//     onClose();
//     // window.location.reload();
//   };

//   return (
//     <div className="card-popup-overlay">
//       <div className="card-popup">
//         <h2>Add Card</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="id">ID:</label>
//           <input
//             type="text"
//             id="id"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//           />

//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <label htmlFor="tag">Tag:</label>
//           <input
//             type="text"
//             id="tag"
//             value={tag}
//             onChange={(e) => setTag(e.target.value)}
//           />

//           <label htmlFor="userImg">User Image URL:</label>
//           <input
//             type="text"
//             id="userImg"
//             value={userImg}
//             onChange={(e) => setUserImg(e.target.value)}
//           />

//           <label htmlFor="userId">User ID:</label>
//           <input
//             type="text"
//             id="userId"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//           />

//           <div className="button-group">
//             <button type="submit">Add</button>
//             <button type="button" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//         {showSuccessMessage && (
//           <div className="success-message">
//             <span>&#10003;</span>
//             <p>Successfully Added</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardPopup;
import React, { useState, useEffect } from "react";
import "./Add_Card.css";
import { FaCheck } from "react-icons/fa";

const CardPopup = ({ onCardSubmit, onClose }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [userImg, setUserImg] = useState("");
  const [userId, setUserId] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the data
    if (
      id.trim() === "" ||
      title.trim() === "" ||
      tag.trim() === "" ||
      userImg.trim() === "" ||
      userId.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Create the card object
    const newCard = {
      id,
      title,
      tag,
      userImg,
      userId,
    };

    // Submit the new card
    // onCardSubmit(newCard);

    // Clear the form
    setId("");
    setTitle("");
    setTag("");
    setUserImg("");
    setUserId("");

    // Display success message
    setShowSuccessMessage(true);

    // Close the pop-up after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="card-popup-overlay">
      <div className="card-popup">
        {showSuccessMessage ? (
          <div className="success-message" style={{ backgroundColor: "green" }}>
            <FaCheck
              className="success-icon"
              style={{ backgroundColor: "green", color: "white" }}
            />
            <p style={{ backgroundColor: "green", color: "white" }}>
              Successfully added!
            </p>
          </div>
        ) : (
          <>
            <h2>Add Card</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="tag">Tag:</label>
              <input
                type="text"
                id="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />

              <label htmlFor="userImg">User Image URL:</label>
              <input
                type="text"
                id="userImg"
                value={userImg}
                onChange={(e) => setUserImg(e.target.value)}
              />

              <label htmlFor="userId">User ID:</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <div className="button-group">
                <button type="submit">Add</button>
                <button type="button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CardPopup;
