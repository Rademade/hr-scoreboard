export function formStatus(status) {
  switch (status) {
    case "open":
      return "New";
    case "expects":
      return "On hold";
    case "inwork":
      return "In Progress";
    case "payment":
      return "Payment";
    case "replacement":
      return "Replacement";
    case "recommendation":
      return "Recomendation";
    default:
      return "NoStatus";
  }
}
