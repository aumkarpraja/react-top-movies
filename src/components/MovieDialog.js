import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class MovieDialog extends React.Component{
    render() {
        const { movie, handleClose } = this.props;
       
        let title = null;
        let content = null;

        // Avoid null errors on title if movie does not exist
        if ( movie ){
            title = <DialogTitle id="form-dialog-title">{ movie.title }</DialogTitle>
            content =   
            <DialogContent>
                <DialogContentText>
                    Release Date { movie.release_date }
                    <br/><br/>
                    { movie.overview }
                </DialogContentText>
            </DialogContent>
        }
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={ this.handleClickOpen }>
                Open form dialog
            </Button>
            <Dialog open={ !!movie } onClose={ handleClose } aria-labelledby="form-dialog-title">
                { title }
                { content }
                <DialogActions>
                    <Button onClick={ handleClose } color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}