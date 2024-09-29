import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <h2>Hoppá, valami nem jó!</h2>
      <button
        style={{
          margin: "50px ",
          backgroundColor: "#d9eddf",
          color: " #000000",
        }}
        className="btn btn-dark"
        onClick={handleBackToHomeClick}
      >
        Kattints rám!
      </button>
    </div>
  );
}
