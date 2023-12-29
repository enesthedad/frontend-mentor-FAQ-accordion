import faqIcon from "./assets/icon-star.svg";
import AccordionContainer from "./AccordionContainer";

const Card = () => {
  return (
    <div className='card'>
      <div className='header'>
        <img src={faqIcon} alt='' />

        <h1>FAQs</h1>
      </div>
      <AccordionContainer />
    </div>
  );
};

export default Card;
