import expandIcon from "./assets/icon-plus.svg";
import closeIcon from "./assets/icon-minus.svg";
const AccordionItem = ({ active, handleClick, id, question, answer }) => {
  console.log(id);
  console.log(active);
  return (
    <>
      <div
        className={active === id ? "active accordion-item" : "accordion-item"}
        onClick={() => handleClick(id)}
      >
        <p className='question'>{question}</p>
        {id !== active ? (
          <img src={expandIcon} alt='' />
        ) : (
          <img src={closeIcon} alt='' />
        )}
      </div>
      {id === active ? (
        <div className='answer'>
          <p>{answer} </p>
        </div>
      ) : null}
    </>
  );
};

export default AccordionItem;
