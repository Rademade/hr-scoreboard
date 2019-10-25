export const getStateName = key => {
  switch (key) {
    case "longlist":
      return "Long list"
    case "interview":
      return "Interview"
    case "interview_with_the_boss":
      return "Interview with CEO"
    case "test_task":
      return "Test task"
    case "sent_offer":
      return "Offer"
    default:
      return "Name"
  }
}
