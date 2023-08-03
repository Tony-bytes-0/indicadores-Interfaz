import { Stack, Box, Typography } from "@mui/material";


export default function DataDisplay(props) {
    const Firstsettings ={ padding:1,
        alignContent:'center', justifyContent:'center',
        backgroundColor: props.color,
        '&:hover': {
        opacity: [0.9, 0.8, 0.7],
        },
    }
    const SecundSetting ={ padding:2,
        alignContent:'left', justifyContent:'left',
        backgroundColor: props.color,
        '&:hover': {
        opacity: [0.9, 0.8, 0.7],
        },
    }

    return <Stack direction={'column'} padding={1} >

        <Box display={'flex'} sx={Firstsettings} >
            <Typography variant="h5"> {props.text} </Typography>
        </Box>
        
        <Box display={'flex'}  sx={SecundSetting}>
            <Typography variant="h5"> {props.data} </Typography>
        </Box>

        </Stack>
    //{props.data} {props.text}
}