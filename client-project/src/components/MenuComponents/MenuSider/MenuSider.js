import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { TeamOutlined, AimOutlined , RedditOutlined, BellOutlined, HomeOutlined, AppstoreAddOutlined, AppstoreOutlined  } from "@ant-design/icons";
import { Layout , Menu} from 'antd';
import "./MenuSider.scss";
import SubMenu from 'antd/es/menu/SubMenu';


export const MenuSider = (props) => {
  const {Sider} = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems =  [
    {key: "users", icon: <HomeOutlined/>, label: "Gestión de usuarios"},
    {
      key: "products",
      icon: <TeamOutlined/>,
      label: "Portafolio de servicios",
      SubMenu:[
        { key: "portafolio/list", icon: <TeamOutlined/>, label: "Lista de clientes"},
        { key: "portafolio/new", icon: <TeamOutlined/>, label: "Nuevo cliente"},
      ],
      
    },
    {
      key: "clients",
      icon: <AppstoreAddOutlined/>,
      label: "Clientes",
      SubMenu:[
        { key: "clients/list", icon: <TeamOutlined/>, label: "Lista de clientes"},
        { key: "clients/new", icon: <TeamOutlined/>, label: "Nuevo cliente"},
      ],
    },
    {
      key: "news",
      icon: <AppstoreOutlined/>,
      label: "Gestión de noticias",
    },
  ];

  const navigateTo = (e) =>{
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label, SubMenu } = item;
    const isSelected = location.pathname === item.key;
    if (SubMenu) {
      return(
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {SubMenu.map((SubMenuItem) => (
            <Menu.Item key={SubMenuItem.key} onClick={navigateTo}>
              {SubMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return(
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon"})}
        className={
          isSelected
            ? "ant-menu-item ant-menu-item-selected"
            : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };
  return(
      <Sider className='menu-sider' collapsed={props.menuCollapsed}>
          <Menu
            mode="inline"
            onClick={navigateTo}
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={menuItems
              .filter((item) => item.SubMenu)
              .map((item) => item.key)}
          >
            {menuItems.map((item) => itemRender(item))}
          </Menu>
      </Sider>
  );
};
