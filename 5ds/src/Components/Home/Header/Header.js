import "./Header.css";
import { Clock } from "phosphor-react";

const Header = () => {
  return (
    <>
      <div className="header-topbar">
        {/* Top Bar */}
        <div className="top-bar flex-wrap text-white">
          
          {/* Partie rouge (visible seulement en lg et plus) */}
          <div className="bg-danger size_red align-items-center">
            <Clock className="me-2 fs-5" weight="fill" size={18} />
            <span className="text">Opening hours: Mon - Sat 9:00 - 18:00</span>
          </div>

          {/* Partie noire (toujours visible) */}
          <div className="size_black align-items-center px-3">
            <i className="bi bi-telephone px-2"></i> +33 635 397 899 &nbsp; |
            &nbsp;
            <i
              className="bi bi-envelope space"
              style={{ paddingRight: "8px" }}
            ></i>{" "}
            contact@5ds.fr
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

