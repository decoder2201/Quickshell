import React from 'react';
import { useSelector } from "react-redux";
import { BoardIcon } from '../utils/BIcons';
import { GoDotFill } from "react-icons/go";
import '../assets/styles/Card.css';

export const Card = ({ id, userId, tags, title, users }) => {
    const { tickets, user } = useSelector((state) => state.dataSlice);
    const priorities = ["Urgent", "High", "Medium", "Low", "No priority"];
    const ticketIds = id?.split("-")[1] - 1;
    const ticketStatus = tickets[ticketIds]?.status;
    const ticketPriority = tickets[ticketIds]?.priority;
    let val = users[userId?.split("-")[1] - 1];
    val = val?.name;

    const GroupStatus = () => {
        if (localStorage.getItem("group")) {
            return localStorage.getItem("group");
        } else {
            return "status";
        }
    }

    const groupBy = GroupStatus();

    return (
        <div className="card_container">
            <div className="card_icons">
                {groupBy === "priority" &&
                    <BoardIcon element={ticketStatus} />
                }
                <span className='card_id_no'>{id}</span>
                {/* Initial to be used here if user is false*/}
                {
                    !user && (
                        <img className='card_user_image' src={`https://api.multiavatar.com/${val}.png?apikey=DjU8a23T0YnxXd`}
                            alt="User" />
                    )
                }
            </div>
            <p className='card_title'>{title}</p>
            <div className="cardTags">
                {/* Display priority icon for non-priority grouping */}
                {groupBy !== "priority" && <div className="card_tag1">
                    <BoardIcon element={priorities[ticketPriority]} />
                </div>}
                {
                    tags?.map((item, index) => {
                        return <div key={index} className="card_tag2"><GoDotFill className='card_dot' />{item}</div>
                    })
                }
            </div>
        </div>
    )
}
