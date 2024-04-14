import { useNavigate } from "react-router-dom";
import "./failure.css";
import Button from '@mui/material/Button';

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="failure">
      <h2 className="failureTitle">Время вышло</h2>
      <Button style={{minWidth: "135px"}} variant="contained" type="button"
        onClick={()=> navigate('/')}>Начать заново
      </Button>
    </div>
  )
}

export default Failure;