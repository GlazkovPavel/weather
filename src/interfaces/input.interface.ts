import React from 'react';

export interface IInput {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}
