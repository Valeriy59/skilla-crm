import AudioPlayer from 'material-ui-audio-player'
import { ThemeProvider} from "@mui/material"
import { makeStyles } from '@mui/styles'
import React, {FC} from 'react';
import {createTheme} from "@material-ui/core";

const muiTheme = createTheme({});

const useStyles = makeStyles((theme: any) => {
  return {
    root: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    playIcon:{color: '#002CFB',},
    pauseIcon:{color: '#002CFB',},
    mainSlider: {
      color: '#002CFB',
      '& .MuiSlider-rail': {
        color: '#002CFB',
      },
      '& .MuiSlider-track': {
        color: '#002CFB',
      },
      '& .MuiSlider-thumb': {
        color: '#002CFB',
      },
    },
  };
});

type PropsType = {
  src: string
}

export const AudioPlayerCustom: FC<PropsType> = ({src}) => {

  return (
    <div>

      <ThemeProvider theme={muiTheme}>
        <AudioPlayer
          elevation={1}
          width="352px"
          variation="primary"
          spacing={3}
          download={true}
          autoplay={true}
          rounded={true}
          time={"single"}
          order="standart"
          volume={false}
          // preload="auto"
          loop={false}
          src={src}
          useStyles={useStyles}
        />
      </ThemeProvider>;
    </div>
  );
};

