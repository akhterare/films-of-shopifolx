import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { 
	MovieTitle,
	MovieYear,
  NominateBtn,
}
from './MovieInfoModal.styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#272727',
    border: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    borderRadius: 20,
  },
}));

export default function MovieInfoModal(props) {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <MovieTitle id="movie-title">{props.movie.Title}</MovieTitle>
        <MovieYear id="movie-year">{props.movie.Year}</MovieYear>	
        { props.showButton ? 
          <NominateBtn
            onClick={() => 
                props.handleNominationClick(props.movie)}
          >   
        {props.buttonText}
        </NominateBtn>
        : null }
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}