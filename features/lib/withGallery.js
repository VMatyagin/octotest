import React, { Component } from "react";

export function withGallery(Child) {
  return class extends React.PureComponent {
    state = {
      countOfVisible: null,
      wrappeRef: null,
      imgRef: null,
      imgSize: null,
      hidden: 0,
    };

    componentDidMount() {
      this.setState({
        wrappeRef: this.props.wrapperRef,
        imgRef: this.props.imgRef,
      });
    }

    componentDidUpdate() {
      if (this.state.wrapperRef !== 0 && this.state.wrappeRef.current) {
        if (this.state.imgRef !== 0 && this.state.imgRef.current) {
          let wrapperWidth = this.state.wrappeRef.current.getBoundingClientRect()
            .width;
          let imgWidth = this.state.imgRef.current.getBoundingClientRect()
            .width;
          let count = Math.floor(wrapperWidth / imgWidth);

          this.setState({
            countOfVisible: count,
            hidden: this.props.children.length - count,
            imgSize: imgWidth,
          });
        }
      }
    }
    render() {
      const { wrapperRef, ...rest } = this.props;
      return (
        <Child
          {...rest}
          countOfVisible={this.state.countOfVisible}
          hidden={this.state.hidden}
        />
      );
    }
  };
}
