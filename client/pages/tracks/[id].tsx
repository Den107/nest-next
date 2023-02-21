import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
    const track:ITrack = {_id: '1', name: 'Track1', artist:'Artist1', text:'Some text', listens:5, audio:'http://localhost:5000/audio/allSTARS - Things That Go Bump In The Night (dizer.net)', picture:'http://localhost:5000/image/686773.jpg', comments:[]}
   const router = useRouter()

    return (
        <MainLayout>
            <Button variant={'outlined'} style={{fontSize:32}} onClick={()=>router.push('/tracks')}>
                К списку
            </Button>
            <Grid container style={{margin:'20px 0'}}>
                <img src={track.picture} width={200} height={200} />
            <div style={{marginLeft:30}}>
                <h1>Название трека - {track.name}</h1>
                <h1>Исполнитель - {track.artist}</h1>
                <h1>Прослушиваний - {track.listens}</h1>
            </div>
            </Grid>
            <h1>Текст трека</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
        <Grid container>
            <TextField label={'Ваше имя'} fullWidth/>
            <TextField label={'Ваш комментарий'} fullWidth multiline rows={4}/>
        <Button>Добавить</Button>
        </Grid>
<div>
    {track.comments.map(comment=>
    <div>
        <div>Автор - {comment.username}</div>
        <div>Комментарий - {comment.text}</div>
    </div>
    )}
</div>
        </MainLayout>
    );
};

    export default TrackPage;