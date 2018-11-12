import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getAllImages } from './actions'


class App extends Component {

  constructor() {
    super();
    this.state = {
      showLoader: true,
      images: {},
      showImageDetail: false,
      imageDetail: {}
    }
  }

  componentDidMount() {
    this.props.getAllImages()
  }

  /**
   * function open the modal and show image details 
   *
   * @param {object} image
   * @memberof App
   */
  showDetail(image) {
    this.setState({imageDetail: image, showImageDetail: true})
  }

  /**
   *close modal detail
   *
   * @memberof App
   */
  closeModal() {
    this.setState({showImageDetail: false})
  }
 
  /**
   * render teh modai image detail
   *
   * @returns
   * @memberof App
   */
  renderModalDetail() {

    const { showImageDetail,  imageDetail} = this.state;

    return (
      <div className={`modal-detail ${ showImageDetail === true ? "" : "hidden"}`} >
        <div className="close-modal" onClick={() => this.closeModal()} >x</div>
        <img src={imageDetail.url} />
        <p>{imageDetail.title}</p>
      </div>
    )
    
  }

  render() {

    let { imagesData } = this.props;

    return (
      <div className="App">
        {
           imagesData.images && imagesData.images.map(image => {
            return(
              <div className="image" key={image.id} onClick={() => this.showDetail(image) } >
                <img src={image.thumbnailUrl} />
              </div>
            )
          })
        } 
        {this.renderModalDetail()}
      </div>
    );
  }
}

const mapStateToProps = ({imagesData}) => ({
  imagesData: imagesData
})

const mapDispatchToProps = dispatch => ({
  getAllImages: () => dispatch(getAllImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
