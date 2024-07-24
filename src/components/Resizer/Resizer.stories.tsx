import React from 'react';
import { Resizer } from './Resizer';
import type { Meta, StoryObj } from '@storybook/react';


const Wrapper = () => (
    <React.Fragment>
        <Resizer>
            <div>
                You will learn
                How to create and nest components
                How to add markup and styles
                How to display data
                How to render conditions and lists
                How to respond to events and update the screen
                How to share data between components
            </div>
        </Resizer>
    </React.Fragment>
);

const meta: Meta<typeof Resizer> = {
    title: 'Resizer',
    component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
