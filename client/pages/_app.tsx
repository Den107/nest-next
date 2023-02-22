import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {AppProps} from 'next/app';
import {wrapper} from '../store';

const MyApp: FC<AppProps> = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    // @ts-ignore
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default MyApp