import {gql} from '@apollo/client'

export const JOIN_CONFERENCE = gql`
query joinedAttendees($id: ID!) {
  joinedAttendees(id: $id){
    conferenceId
    attendeeEmail
  }
}
`
export default JOIN_CONFERENCE