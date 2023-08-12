import { useState } from "react";
import data from "./FaqData";
import "./FaqStyles.css";

const FAQSection = () => {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const handleAccordionClick = (accordionId) => {
        setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
      };
    return ( 
        <section className="faq-section">
            <h2>FAQs</h2>
            <div className="faq-main-con">
                {data.map((faqs)=>{
                     const isAccordionOpen = faqs.id === openAccordionId;
                    return(
                        <div className="faqs-con" key={faqs.id}>
                            <div className="question-btn-con" onClick={()=> handleAccordionClick(faqs.id)}>
                                <h3>{faqs.question}</h3>
                                <button onClick={()=> handleAccordionClick(faqs.id)}>{isAccordionOpen ?<i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</button>
                            </div>
                            {
                            isAccordionOpen && <div className="answer-con">
                                <p className="faq-answer">{faqs.answer}</p>
                                {faqs.link && <button className="faq-btn"><a href={faqs.link}>BOOK TRIP NOW</a></button> }
                                {faqs.answer2 && <p className="extra-faq-answer">{faqs.answer2}</p>}
                                {faqs.answer3 && <p className="extra-faq-answer">{faqs.answer3}</p>}
                                {faqs.answer4 && <p className="extra-faq-answer">{faqs.answer4}</p>}
                                {faqs.answerList1&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList1}</p>}
                                {faqs.answerList2&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList2}</p>}
                                {faqs.answerList3&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList3}</p>}
                                {faqs.answerList4&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList4}</p>}
                                {faqs.answerList5&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList5}</p>}
                                {faqs.answerList6&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList6}</p>}
                                {faqs.answerList7&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList7}</p>}
                                {faqs.answerList8&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList8}</p>}
                                {faqs.answerList9&& <p className="extra-faq-answer"><span><i class="fa-solid fa-arrow-right"></i></span> {faqs.answerList9}</p>}
                            </div>   
                            }

                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default FAQSection;