import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta culpa accusamus sed, minima alias.",
    daysAgo: 4,
  },
  {
    upvoteCount: 563,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta culpa accusamus sed, minima alias.",
    daysAgo: 3,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
