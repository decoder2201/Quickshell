import React from 'react';
// import '../assets/styles/BIcon.css'
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdOutlineSignalCellularAlt, MdOutlineSignalCellularAlt2Bar,MdKeyboardArrowDown } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSignal,FaPlus,FaGithubAlt, FaRegCircle, FaCircleHalfStroke, FaRankingStar } from "react-icons/fa6";
import { AiFillDatabase } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbFilterCog,TbFilterDiscount } from "react-icons/tb";

// import { HiDotsHorizontal } from "react-icons/hi";

const IconList = {
    "Urgent": BsExclamationSquareFill,
    "High": FaSignal,
    "Medium": MdOutlineSignalCellularAlt,
    "Low": MdOutlineSignalCellularAlt2Bar,
    "No priority": HiDotsHorizontal,
    "Todo": FaRegCircle,
    "In progress": FaCircleHalfStroke,
    "Backlog": AiFillDatabase,
    "HeaderDisplay":VscSettings,
    "plus":FaPlus,
    "threeDots":HiDotsHorizontal,
    "HeaderArraowDown":MdKeyboardArrowDown,
    "Human":PiFinnTheHumanFill,
    "github":FaGithubAlt,
    "linkedin":IoLogoLinkedin,
    "groupBy":TbFilterCog,
    "orderBy":TbFilterDiscount,
};

export const BoardIcon = ({ element,title,styleClass }) => {

    let color = "gray";
    if (element === "In progress") {
        color = "rgb(255, 179, 0)"
    } else if (element === "Todo") {
        color = "gray"
    } else if (element === "Backlog") {
        color = "blue"
    } else if (element === "Urgent") {
        color = "red"
    } else if (element === "High") {
        color = "rgb(255, 98, 0)"
    } else if (element === "Medium") {
        color = "rgb(255, 170, 0)"
    } else if (element === "Low") {
        color = "burlywood"
    } else if (element === "No priority") {
        color = "greenyellow"
    }

    const Icon = IconList[element];

    const style = {
        "color": color,
        "display": "inline-block"
    }

    if (!Icon) {
        return <div className='icon_container' style={style}>
            <FaRankingStar />
        </div>;
    }

    return (
        <div style={style} className={`icon_container  ${styleClass}`}  title={title}>
            <Icon />
        </div>
    );
}

