import styles from './Questions.module.scss'
import mobile from './QuestionsMobile.module.scss'
import { LazyQuestionsItem } from './ui/LazyQuestionsItem/LazyQuestionsItem'
import { useTranslations } from 'next-intl'

export const Questions: React.FC = () => {
    const t = useTranslations('Questions');

    const questions = [
        {question: t("question1"), answer: t("answer1")},
        {question: t("question2"), answer: t("answer2")},
        {question: t("question3"), answer: t("answer3")},
        {question: t("question4"), answer: t("answer4")},
        {question: t("question5"), answer: t("answer5")},
        {question: t("question6"), answer: t("answer6")},
        {question: t("question7"), answer: t("answer7")},
        {question: t("question8"), answer: t("answer8")},
        {question: t("question9"), answer: t("answer9")},
        {question: t("question10"), answer: t("answer10")},
    ]

    return (
        <section className={`${styles.questions} ${mobile.questions}`}>
            <div className="container">
                <div className={`${styles.questions__box} ${mobile.questions__box}`}>
                    <h2 className={`${styles.questions__title} ${mobile.questions__title}`}>{t("h2Questions")}</h2>
                    <div className={`${styles.questions__items} ${mobile.questions__items}`}>
                            {questions.map((el,idx)=>(
                                <LazyQuestionsItem
                                  key={idx}
                                  question={el.question}
                                  answer={el.answer}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}