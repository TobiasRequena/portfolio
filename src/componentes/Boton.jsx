import { Button } from "antd";

function BotonCont({ texto, onClick, icon }) {
  return (
    <Button
      type="primary"
      icon= {icon}
      onClick={onClick}
      style={{
        backgroundColor: "#000",
      }}
    >
      {texto}
    </Button>
  );
}

export default BotonCont;