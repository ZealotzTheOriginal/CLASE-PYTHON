import { useNavigate } from "react-router-dom"
export default function LoginButton() {
    const navigate = useNavigate();

return <button style={{margin:'8px'}} onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
}