import React from 'react';

import { Fake } from './styled';

const FakeComponent = (props) => {
    return (
        <Fake className="fake-component" width={props.width ?? '100%'} height={props.height ?? '40px'} />
    )
}

export default FakeComponent;