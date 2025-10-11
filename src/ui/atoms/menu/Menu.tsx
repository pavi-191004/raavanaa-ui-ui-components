// Menu.tsx
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { 
  MdDashboard, MdPeople, MdBusiness, MdAssignment, 
  MdEventNote, MdBarChart, MdCampaign, MdSettings, MdLogout, MdMenu 
} from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = [
    { to: "/", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/candidates", label: "Candidates", icon: <MdPeople /> },
    { to: "/companies", label: "Companies", icon: <MdBusiness /> },
    { to: "/recruiters", label: "Recruiters", icon: <MdAssignment /> },
    { to: "/placement-drives", label: "Placement Drives", icon: <MdEventNote /> },
    { to: "/reports", label: "Reports", icon: <MdBarChart /> },
    { to: "/announcements", label: "Announcements", icon: <MdCampaign /> },
    { to: "/settings", label: "Settings", icon: <MdSettings /> },
    { to: "/logout", label: "Logout", icon: <MdLogout />, style: { color: "red", marginTop: "20px" } },
  ];

  return (
    <>
      <button onClick={handleShow} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>
        <MdMenu />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menuItems.map((item) => (
              <li key={item.to} style={item.style || {}}>
                <NavLink
                  to={item.to}
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: item.style?.color || "#000",
                    backgroundColor: isActive ? "#e0e0e0" : "transparent",
                    transition: "background-color 0.2s",
                  })}
                  className="menu-link"
                >
                  {item.icon} {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Menu;
