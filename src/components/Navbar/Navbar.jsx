import { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [opMenu, setOpMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      label: "Photo",
      items: [
        {
          id: 1,
          label: "landscape",
        },
        {
          id: 2,
          label: "Moon",
        },
        {
          id: 3,
          label: "Lake",
        },
      ],
    },
    {
      id: 2,
      label: "Video",
      items: [
        {
          id: 1,
          label: "Drone",
        },
        {
          id: 2,
          label: "360",
        },
        {
          id: 3,
          label: "Go-pro",
        },
      ],
    },
  ];

  const handleOpenMenu = (item) => {
    if (item.id === opMenu) {
      setOpMenu(false);
    } else {
      setOpMenu(item.id);
    }
  };
  return (
    <header className={styles.Navbar}>
      <div className="col-3">Logo</div>
      <div className={`${styles.search} col-3`}><input type="search" name="Search" id="Search" placeholder="Cerca qui"/></div>
      <div className={`${styles.menu} col-6`}>
        <ul className={styles.menuItem}>
          {menuItems?.map((item) => {
            return(
            <li
              key={item?.id}
              onClick={() => handleOpenMenu(item)}
              
            >
              <div className={styles.menuItem__label}><span>{item?.label} </span></div>
              <span><FaChevronDown/></span>
              <div className={`${styles.menuItem__dropdown} 
                    
                    ${opMenu && opMenu === item?.id ? styles.open : ""}`}>
                <ul>
                  {item?.items?.map((subItem) => (
                    <li key={subItem?.id}><span>{subItem?.label}</span>{" "}</li>
                  ))}
                </ul>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
