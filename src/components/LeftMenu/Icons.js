import React from "react";

const Inbox = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="mr-1"
        >
            <path
                fillRule="evenodd"
                d="M12.5 3c.8279 0 1.5.6721 1.5 1.5v7c0 .8279-.6721 1.5-1.5 1.5h-9c-.8279 0-1.5-.6721-1.5-1.5v-7C2 3.6721 2.6721 3 3.5 3h9zM8 9.97494c-.16901.0082-.34073-.05218-.4697-.18114L6.26745 8.53095 4.5401 10.2583c-.2285.2285-.5994.2285-.8279 0-.2285-.2284-.2285-.5994 0-.8279l1.72735-1.72735L3.7122 5.9757c-.2425-.2425-.2425-.6362 0-.8787.2425-.2425.6362-.2425.8787 0L8 8.50619 11.4091 5.097c.2425-.2425.6362-.2425.8787 0 .2425.2425.2425.6362 0 .8787l-1.7274 1.72735 1.7274 1.72735c.2285.2285.2285.5995 0 .8279-.2285.2285-.5994.2285-.8279 0L9.73255 8.53095 8.4697 9.7938c-.12897.12896-.30069.18934-.4697.18114z">
            </path>
        </svg>
    );
};

const Sent = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="mr-1"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2599 12.165c-.0026-.055-.1031-1.8175-3.46458-1.82-.27197 0-.57079-.0008-.86615-.0008v1.5841c0 .5917-.4989 1.0717-1.11386 1.0717-.24426 0-.47032-.0758-.65394-.205v.0008l-.00433-.0033c-.04418-.0317-.08575-.0658-.12473-.1033L1.56733 9.015h.00086C1.22433 8.78833 1 8.4175 1 8c0-.4175.22433-.7875.56733-1.01417V6.985l4.46238-3.67167C6.23066 3.12 6.50869 3 6.81531 3c.61496 0 1.11386.48 1.11386 1.07167V5.64c.35945 0 .68426.00083.86615.00167 5.54938.02916 5.20898 6.32333 5.19688 6.52003v.005c0 .46-.388.8333-.8662.8333-.4781 0-.8661-.3733-.8661-.8333v-.0017z">

            </path>
        </svg>
    );
};

const Drafts = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="mr-1"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2 2c.993 0 1.8.807 1.8 1.8v8.4c0 .993-.807 1.8-1.8 1.8H4.8c-.993 0-1.8-.807-1.8-1.8V3.8C3 2.807 3.807 2 4.8 2h6.4zM7.5 9h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2c.276 0 .5-.224.5-.5S7.776 9 7.5 9zm2.996-2H5.5c-.276 0-.5.224-.5.5s.224.5.5.5h4.996c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.5-1.5c0-.276-.224-.5-.5-.5H5.5c-.276 0-.5.224-.5.5s.224.5.5.5h4.996c.276 0 .5-.224.5-.5z">

            </path>
        </svg>
    );
};

const Spam = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="mr-1"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10c-.724 0-1-.5376-1-1.19954v-5.6C13 2.5376 13.276 2 14 2s1 .5376 1 1.20046v5.6C15 9.4624 14.724 10 14 10zM9.1594 2.00012l-.00031.00001H5.97727c-.87818 0-1.59091.71657-1.59091 1.59949 0 .07038.00455.13893.01364.20657-.48273.27511-.80909.79609-.80909 1.39293 0 .07038.00454.13893.01363.20656-.48272.27511-.80909.79609-.80909 1.39293 0 .07038.00455.13893.01273.20657C2.32636 7.28029 2 7.80127 2 8.39811c0 1.1233.67 1.82799 1.81818 1.82799h1.66455c.50272 0 .81182.1983.81182.5713 0 .5994-.12402 1.0981-.21698 1.4719-.05573.2241-.1003.4033-.1003.5324 0 .7221.36546 1.1983 1.12637 1.1983.56886 0 .86755-.5061 1.18259-1.0398.10686-.1811.2156-.3653.33741-.5341.24744-.3424.77044-.7539 1.31368-1.1814.51258-.4034 1.04318-.8209 1.37718-1.2078.6882-.79608.6855-2.51897.6855-2.51897V4.39937s-.0182-1.16626-.7682-1.81886c-.6891-.59946-2.04866-.58071-2.0724-.58039z">
            </path>
        </svg>
    );
};

const Trash = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="mr-1"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3524 6.98649l-.3546 5.59651c-.0004.0087-.001.0175-.0016.0262l-.0001.0008c-.0564.7766-.7051 1.39-1.496 1.39h-5c-.7909 0-1.4396-.6134-1.496-1.39l-.0001-.0008a1.15051 1.15051 0 01-.0016-.0262l-.3546-5.59651h8.7046zm-9.071-1c-.4772-.0788-.8417-.4938-.8417-.9932 0-.2482.09-.4755.239-.6511.0234-.0283.0501-.0562.08-.0839.0318-.0297.0655-.0575.1009-.0829.5191-.3837 1.675-.6907 3.1405-.8366v-.7045c0-.6862.5571-1.2433 1.2433-1.2433h1.5134c.6862 0 1.2433.5571 1.2433 1.2433v.7185c1.4013.151 2.5024.4507 3.0054.8226.0354.0254.0692.0532.1009.0829.03.0277.0566.0556.08.0839.149.1756.239.4029.239.6511 0 .4994-.3645.9144-.8417.9932H3.2814z">
            </path>
        </svg>
    );
};

export {
    Drafts,
    Inbox,
    Sent,
    Spam,
    Trash
};