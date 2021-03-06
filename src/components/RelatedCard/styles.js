import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      maxWidth: '420px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '220px'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 200,
    },
    title: {
      fontSize: "14px"
    },
    channel: {
      fontSize: "12px"
    },
    link: {
        textDecoration: 'none'
    },
}));


export { useStyles };