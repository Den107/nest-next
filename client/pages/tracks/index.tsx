import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track1', artist:'Artist1', text:'Some text', listens:5, audio:'http://localhost:5000/audio/allSTARS - Things That Go Bump In The Night (dizer.net)', picture:'http://localhost:5000/image/686773.jpg', comments:[]},
        {_id: '2', name: 'Track2', artist:'Artist1', text:'Some text', listens:5, audio:'http://localhost:5000/audio/allSTARS - Things That Go Bump In The Night (dizer.net)', picture:'http://localhost:5000/image/686773.jpg', comments:[]},
        {_id: '3', name: 'Track3', artist:'Artist1', text:'Some text', listens:5, audio:'http://localhost:5000/audio/allSTARS - Things That Go Bump In The Night (dizer.net)', picture:'http://localhost:5000/image/686773.jpg', comments:[]},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Список треков</h1>
                            <Button onClick={()=>router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;