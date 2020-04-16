import React from 'react';
import { Link } from "react-router-dom";

export const Tag = ({ link, linkTo, bck, size, color, children }) => {
    const template = (
        <div
            style={{
                background: bck,
                fontSize: size,
                color: color,
                padding: '5px 10px',
                display: 'inline-block',
                fontFamily: 'Righteous'
            }}
        >{ children }</div>
    );

    if (link) {
        return (
            <Link to={linkTo}>
                { template }
            </Link>
        );
    }

    return template;
};
