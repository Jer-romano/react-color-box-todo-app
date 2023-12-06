import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './colorboxes/BoxList';

it("renders without crashing", function() {
    render(<BoxList/>);
});

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a colored box", function() {
    const {getByLabelText} = render(<BoxList/>);

    expect(queryByText("background-color: red")).not.toBeInTheDocument();

    const heightInput = getByLabelText("Height in pixels:");
    const widthInput = getByLabelText("Width in pixels:");
    const colorInput = getByLabelText("Background color:");
    const submitBtn = queryByText("Add Box");

    fireEvent.change(heightInput, {target: {value: 100}});
    fireEvent.change(widthInput, {target: {value: 100}});
    fireEvent.change(colorInput, {target: {value: 'red'}});
    fireEvent.click(submitBtn);

    expect(queryByText("background-color: red")).toBeInTheDocument();
    
})
