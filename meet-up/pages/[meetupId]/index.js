import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="First meetup"
      address="some street, some city"
      description="this is a first meetup"
    />
  );
}

export default MeetupDetails;
