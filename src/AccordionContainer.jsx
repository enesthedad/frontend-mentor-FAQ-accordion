import { useState } from "react";
import AccordionItem from "./AccordionItem";
const items = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building.",
  },

  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 4,
    question: "How can i get help if I'm stuck on a challenge?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building.",
  },
];

const AccordionContainer = () => {
  const handleClick = (id) => {
    id === active ? setActive(null) : setActive(id);
  };
  const [active, setActive] = useState(null);
  return (
    <>
      <div className='accordion'>
        {items.map((el, index) => (
          <>
            <AccordionItem
              handleClick={handleClick}
              question={el.question}
              answer={el.answer}
              key={index}
              id={el.id}
              active={active}
            />
            {items.length === index + 1 ? null : <hr />}
          </>
        ))}
      </div>
    </>
  );
};

export default AccordionContainer;
