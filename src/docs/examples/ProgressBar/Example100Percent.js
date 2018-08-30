import React from 'react';
import ProgressBar from 'ps-react/ProgressBar'

/** 100% Progress */
export default function Example100Percent() {
    return (
        <ProgressBar percent={100} width={300} height={20} />
    );
}