import { createStyles, makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
  root: {
    maxWidth: '345px',
    height: '100%',
    '& .MuiButtonBase-root': {
      height: '100%'
    }
  }
}));