import { useNavigate } from "react-router-dom";
import "./success.css";
import Button from '@mui/material/Button';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success">
      <h2 className="successTitle">Ответы отправлены</h2>
      <Button style={{minWidth: "135px"}} variant="contained" type="button"
        onClick={()=> navigate('/')}>Обратно
      </Button>
    </div>
  )
}

export default Success;