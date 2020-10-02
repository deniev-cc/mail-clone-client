import React from "react";
import MessageItem from "../MessageItem";
import {isEmpty} from "lodash";
import NoData from "../../../../components/NoData";

const MessageList = ({ messages }) => {
    const renderMessages = () => {
        if (isEmpty(messages)) {
            return <NoData />
        }

        return messages.map((message, i) => {
            return (
                <MessageItem {...message} key={i} />
            );
        });
    };

    return (
        <ul className="list-group list-group-flush">
            {renderMessages()}
        </ul>
    );
};

export default MessageList;