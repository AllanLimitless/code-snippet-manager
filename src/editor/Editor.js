import React, { Component } from 'react';
import ReactQuill from 'react-quill';
// import debounce from '../helpers';
// import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends Component {
  constructor() {
    super();
    this.state = {
    text: '',
    title: '',
    id: ''
    };   
  }
  render() {
    // Access to the classes variables from this.props
    const { classes } = this.props;

    return(
    <div className={classes.editorContainer}>
      <ReactQuill></ReactQuill>
    </div>);
  }
}

export default withStyles(styles)(EditorComponent);