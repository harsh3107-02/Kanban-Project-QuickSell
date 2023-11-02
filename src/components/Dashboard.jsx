import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsReception4, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../styles/Dashboard.css";
import Card from "../components/Card";
import { handleReorder } from "../actions/action";
import { UserImage, todoIcon, PriorityIcon } from "./ImgData";
import ShimmerEffect from "../Shimmer_Effect/Shimmer";
import CardPopup from "./Add_card/Add_card";

const Dashboard = () => {
  const group = useSelector((state) => state.group);
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
  const dispatch = useDispatch();
  const [data, setdata] = useState(0);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    // Assuming dataSelected is an array of objects and you want to reorder based on dragging cards
    const updatedDataSelected = Array.from(dataSelected);
    const [reorderedElement] = updatedDataSelected.splice(sourceIndex, 1);
    updatedDataSelected.splice(destinationIndex, 0, reorderedElement);

    dispatch(handleReorder(updatedDataSelected));
  };
  const [priorityGroup, setpriorityGroup] = useState(false);

  useEffect(() => {
    // Simulate data fetching delay
    if (!dataSelected || dataSelected.length === 0) return;

    // Filter data based on "status" and "priority" groups
    const statusGroup = dataSelected[0]?.title === "status";
    setpriorityGroup(dataSelected[0]?.title === "status");

    let groupData = [];

    if (statusGroup) {
      groupData = dataSelected[0]?.value;
    } else if (priorityGroup) {
      groupData = dataSelected[1]?.value;
    }

    setTimeout(() => {
      setdata(1);
    }, 1000); // Adjust the delay time as needed
  }, [dataSelected, priorityGroup]);

  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card click
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Handle closing the pop-up
  const closePopup = () => {
    setSelectedCard(null);
  };
  //Add Card
  const [isAddCardPopupOpen, setAddCardPopupOpen] = useState(false);
  const handleAddCard = (cardData) => {
    // Dispatch action to add card to the state
    console.log("Adding new card:", cardData);
  };

  const openAddCardPopup = () => {
    setAddCardPopupOpen(true);
  };
  const closeAddCardPopup = () => {
    setAddCardPopupOpen(false);
  };
  return data === 0 ? (
    <ShimmerEffect />
  ) : (
    dataSelected && (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="container" style={{ justifyContent: "space-evenly" }}>
          {dataSelected.map((element, index) => (
            <Droppable droppableId={String(index)} key={index}>
              {(provided) => (
                <div
                  className="dashboard"
                  style={{ backgroundColor: "whitesmoke" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="cardHeading1">
                    <div
                      className="sideView1"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {!user ? (
                        <div className="image">
                          <img
                            src={todoIcon[index]}
                            alt={`User ${index + 1}`}
                          />
                        </div>
                      ) : (
                        <div className="image">
                          <span>{UserImage[index]?.sign}</span>
                          <img
                            src={UserImage[index]?.img}
                            alt={`User ${index + 1}`}
                          />
                        </div>
                      )}
                      <span style={{ fontWeight: "bolder" }}>
                        {element[index]?.title}{" "}
                        <span id="length">{element[index]?.value?.length}</span>
                      </span>
                    </div>
                    <div className="sideView2">
                      <button onClick={openAddCardPopup}>
                        <BsPlusLg />
                      </button>

                      <span className="three_dot">
                        <BsThreeDotsVertical />
                        <div className="three_dot_options">
                          <span>Edit</span>
                          <br />
                          <span>Delete</span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="title">
                    {element[index]?.value?.map((card, cardIndex) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id}
                        index={cardIndex}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => handleCardClick(card)}
                          >
                            <Card
                              id={card.id}
                              title={card.title}
                              tag={card.tag}
                              userImg={card.userImg}
                              user_id={card.userId}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  {isAddCardPopupOpen && (
                    <CardPopup
                      onClose={closeAddCardPopup}
                      addCard={handleAddCard}
                    />
                  )}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    )
  );
};

export default Dashboard;
