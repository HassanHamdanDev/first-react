import { React, Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SelectedBeast from "./Components/SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      image_url: "",
      description: "",
      horns: 0
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (title, image_url, description, horns) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
      horns: horns
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main handleOpen={this.handleOpen} />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          horns={this.state.horns}
        />
        <Footer />
      </>
    )
  }
}

export default App