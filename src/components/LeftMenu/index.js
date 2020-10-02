import React from "react";
import Link from "./Link";
import {
    Drafts,
    Inbox,
    Sent,
    Spam,
    Trash
} from "./Icons";

const LeftMenu = () => {
    return (
        <ul className="list-group left-menu">
            <Link to="/messages/inbox" icon={Inbox} value="Входящие" />
            <Link to="/messages/sent" icon={Sent} value="Исходящие" />
            <Link to="/messages/drafts" icon={Drafts} value="Черновики" />
            <Link to="/messages/spam" icon={Spam} value="Спам" />
            <Link to="/messages/trash" icon={Trash} value="Корзина" />
        </ul>
    )
};

export default LeftMenu;