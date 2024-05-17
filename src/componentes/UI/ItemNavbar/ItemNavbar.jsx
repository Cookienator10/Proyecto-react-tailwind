import React from 'react';
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({route,content}) => <li className='Apply'><NavLink className='Style_i' to={route}>{content}</NavLink></li>

export default ItemNavbar;
