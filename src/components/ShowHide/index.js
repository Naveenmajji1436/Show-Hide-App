import {Component} from 'react'
import './index.css'

export default class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowHideFirstName = () =>
    this.setState(previousShowHideState => ({
      showFirstName: !previousShowHideState.showFirstName,
    }))

  onShowHideLastName = () =>
    this.setState(previousShowHideState => ({
      showLastName: !previousShowHideState.showLastName,
    }))

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="show-hide-bg-container">
        <div className="content-container">
          <h1 className="content-header">Show/Hide</h1>
          <div className="show-hide-names-container">
            <div className="show-hide-single-name-container">
              <button
                type="button"
                className="show-hide-name-button"
                onClick={this.onShowHideFirstName}
              >
                Show/Hide Firstname
              </button>

              {showFirstName ? (
                <div className="name-container">
                  <p className="name-text">Joe</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="show-hide-single-name-container">
              <button
                type="button"
                className="show-hide-name-button"
                onClick={this.onShowHideLastName}
              >
                Show/Hide Lastname
              </button>

              {showLastName ? (
                <div className="name-container">
                  <p className="name-text">Jonas</p>
                </div>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
