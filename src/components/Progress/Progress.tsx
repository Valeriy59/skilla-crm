import React, {FC, useState} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

type ProgressPropsType = {
  color: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
  value: number
}

export const Progress: FC<ProgressPropsType> = ({value, color}) => {
  const [progress, setProgress] = useState(value);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);
  //
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
    <Box sx={{ width: '156px' }}>
      <LinearProgress variant="determinate" value={progress} color={color} sx={{height: '6px', marginTop: '7px' }}/>
    </Box>
  )
}