import { createStyles, makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => createStyles({
  root: {
    '& .item': {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiPaper-root': {
        width: '100%'
      }
    }
  }
}));