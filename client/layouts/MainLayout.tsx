import React, {ReactElement, ReactNode} from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;