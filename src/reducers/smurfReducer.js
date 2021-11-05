import axios from "axios";

const initialState = [{
    description: "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
    id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name: "Poppa Smurf",
    nickname: "Pops",
    position: "Village Leader"

},
{
    description: "Smurfette's role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.",
    id: "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name: "Smurfette",
    nickname: "Smurfette",
    position: "Beautician"
}]

const smurfReducer = (state = initialState, action) => {
    return state
}

export default smurfReducer;