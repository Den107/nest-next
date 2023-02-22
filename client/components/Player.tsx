import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import {useRouter} from "next/router";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track1',
        artist: 'Artist1',
        text: 'Some text',
        listens: 5,
        audio: 'http://localhost:5000/audio/allSTARS - Things That Go Bump In The Night (dizer.net)',
        picture: 'http://localhost:5000/image/686773.jpg',
        comments: []
    }
    const router = useRouter()
    const active = false
    return (
        <div className={styles.player}>
            <IconButton>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid onClick={() => router.push(`/tracks/${track._id}`)} container direction={'column'}
                  style={{width: 200, margin: '0 20px', cursor: "pointer"}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;