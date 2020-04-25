import React from 'react';
import { Link } from "react-router-dom";

export const Tag = ({ link, linkTo, bck, size, color, children, add }) => {
    const template = (
        <div
            style={{
                ...add,
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

export const firebaseLopper = snapshot => {
    const data = [];

    snapshot.forEach(childSnapshot => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });

    return data;
};

export const reverseArray = actualArray => {
    let reversedArray = [];

    for (let i = actualArray.length - 1; i >=0; i--) {
        reversedArray.push(actualArray[i]);
    }

    return reversedArray;
};

export const validate = element => {
    let error = [true, ''];

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid} ? 'Field is required!' : ''`;
        error = !valid ? [valid, message] : error;
    }

    return error;
};