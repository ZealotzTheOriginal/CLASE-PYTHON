import { useParams } from "react-router-dom";

export default function Profile() {
    const { username } = useParams();
    return (
    <h2>Profile: {username}</h2>
    )
}