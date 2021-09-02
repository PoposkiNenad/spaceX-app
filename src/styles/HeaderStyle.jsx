import { createStyles, makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
  root: {
    marginBottom: theme.spacing(5),
    '& a': {
      color: '#ffffff',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    '& .MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto'
    }
  }
}));