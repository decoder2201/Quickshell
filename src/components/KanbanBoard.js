import React from 'react'
import { useSelector } from "react-redux";
import { Card } from './Card'
import { BoardIcon } from '../utils/BIcons';
import '../assets/styles/KanbanBoard.css'


const KanbanBoard = () => {
    const { dataSelected, user, users } = useSelector((state) => state.dataSlice);
    return (
        <div className="container">
            {dataSelected?.map((item, id) => {
                const element = item[id];
                return (
                    <div key={id} className="Board_container">
                        <div className="heading_icons">
                            <div >
                                {!user ? (
                                    <BoardIcon element={element?.title} />
                                ) : (
                                    <div className='board_user_icon_container'
                                    >
                                        <img
                                            className='board_user_icon'
                                            src={`https://api.multiavatar.com/${element?.title}.png?apikey=DjU8a23T0YnxXd`}
                                            alt="User"
                                        />
                                    </div>
                                )}
                                <span className='board_title'>
                                    <span> {element?.title}</span>
                                    <span className='board_card_count'>{element?.value?.length}</span>
                                </span>
                            </div>
                            <div >
                            <BoardIcon element={"plus"}  title='Add' styleClass={'board_icon board_navigations'}/>
                            <BoardIcon element={"threeDots"}  title='explore' styleClass={' board_navigations'}/>
                            </div>
                        </div>
                        <div className="">
                            {element?.value?.map((item, ind) => {
                                return (
                                    <Card key={ind} id={item.id} userId={item.userId} tags={item.tag} title={item.title} users={users} />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default KanbanBoard