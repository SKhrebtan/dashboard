import { StyledLi } from "./DoneCard.styled"
import { getDifficultyColor, getCategoryBackgroundColor } from "helpers/hooks";
import { formatJustDateToWord } from "helpers/formatJustDate";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useState } from "react";

export const DoneCard = ({ card }) => {
    const { _id, title, difficulty, time, date, category } = card;
    const [showModal, setShowModal] = useState(false);
 
    
  const colorDiff = getDifficultyColor(difficulty)
    const categoryBackgroundColor = getCategoryBackgroundColor(category);
    
    const handleCloseModal = () => {
        setShowModal(false);
       
    }


    return (
        <StyledLi onClick={() => {
            if (showModal) return;
            setShowModal(true)
        }}>
            <span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
            <div className='infoblock'>
              <p className='title'>{title}</p>
                <p className='date-time'>{`${formatJustDateToWord(date)}, ${time}`}</p>
            </div>
            {showModal && <ModalDelete  handleCloseModal={handleCloseModal} _id={_id} />} 
        </StyledLi>
    )
}