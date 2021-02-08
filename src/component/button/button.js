import React, { Component, useState } from 'react';
import { Button } from 'antd';

const ReactButton = (props) => {

    const { type } = props;
    return (
        <div>
            <Button type={type}>{props} Button</Button>
        </div>
    )
}
export default ReactButton;