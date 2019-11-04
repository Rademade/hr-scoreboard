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

export const statsCategories = [
  "longlist",
  "e025c9f3fbf14cfb9c47cb09ec34adc3",
  "interview",
  "sent_offer"
]

export const hrCustomCategory = "9b4184eb558b41f49365b8a634526d28"
