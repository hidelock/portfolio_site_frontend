import React from 'react'
import {
    RiContactsFill,
    RiMagicFill,
    RiMicrosoftFill,
} from "react-icons/ri";
import {
    ROUTE_CHAT_GPT,
    ROUTE_INFO,
    ROUTE_NEWS,
    ROUTE_ORDER,
    ROUTE_PROJECTS,
} from "@config/routes";
import { NavLink } from "react-router-dom";
import { BsFillLayersFill } from 'react-icons/bs';
import { SiOpenai } from 'react-icons/si';
import './SidebarMenu.css'

const SidebarMenu = () => {
    return (
        <div className="sidebar__menu">
            <NavLink to={ROUTE_INFO} className="sidebar__link">
                <RiContactsFill className="sidebar__icon" />
                <span>About me</span>
            </NavLink>
            <NavLink to={ROUTE_PROJECTS} className="sidebar__link">
                <RiMicrosoftFill className="sidebar__icon" />
                <span>Projects</span>
            </NavLink>
            <NavLink to={ROUTE_NEWS} className="sidebar__link">
                <BsFillLayersFill className="sidebar__icon" />
                <span>News</span>
            </NavLink>
            <NavLink to={ROUTE_ORDER} className="sidebar__link">
                <RiMagicFill className="sidebar__icon" />
                <span>Order</span>
            </NavLink>
            <NavLink to={ROUTE_CHAT_GPT} className="sidebar__link">
                <SiOpenai className="sidebar__icon" />
                <span>ChatGPT</span>
            </NavLink>

        </div>
    )
}

export default SidebarMenu