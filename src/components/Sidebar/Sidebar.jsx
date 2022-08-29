import { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const menuItems = [
    {
      text: "Home",
      icon: <FaIcons.FaHome />,
      route: '/'
    },
    {
      text: "Cadastrar",
      icon: <GiIcons.GiArchiveRegister />,
      route: '/Register'
    },
    {
      text: "Clientes",
      icon: <BsIcons.BsPersonSquare />,
      route: '/Clients'
    }
  ];

  return (
<div className={showSidebar ? "sidebar-container" : "sidebar-container sidebar-container-Out"}>
    <div className="sidebar-upper">
        <div className="navHeader">
            {showSidebar && (
            <div className="navLogo">
                    <FaIcons.FaDev className="faDev" />
                    <h2>Menu Projeto 02 </h2>
            </div>
            )}
          <div className="navBurguer">
            <FaIcons.FaBars
              className={
                showSidebar ? "burguerIcon burguerIn" : "burguerIcon burguerOut"
              }
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </div>
        </div>
        <div className="navMenu">
           {
            menuItems.map((el, index)=> 
              <Link className="menuItem" to={el.route} key={index + 1}>
                <span className="menuItemLogo">{el.icon}</span>
                {showSidebar && <p>{el.text}</p>}
                </Link>)
           } 
        </div>
    </div>
</div>
);
}

export default Sidebar;
