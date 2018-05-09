import React, { Component } from 'react';
import placeholderOne from "images/PlaceholderOne.png";
import placeholderTwo from "images/PlaceholderTwo.png";
import placeholderThree from "images/PlaceholderThree.jpg";

export class PictureRow extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around w-100 flex-column flex-lg-row">
                <div className="picture"
                    style={
                        {
                            backgroundImage: 'url(' + placeholderOne + ')'
                        }
                    }>
                </div>
                <div className="picture"
                    style={
                        {
                            backgroundImage: 'url(' + placeholderTwo + ')'
                        }
                    }>
                </div>
                <div className="picture"
                    style={
                        {
                            backgroundImage: 'url(' + placeholderThree + ')'
                        }
                    }>
                </div>
            </div>
        )
    }
}