const setCourse = (state = "MERCURY", action: any) => {
  switch (action.type) {
    case "CHANGECOURSE":
      return action.destination

    default:
      return state;
  }
};

export default setCourse;
