import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './todos/TodoList';

it("renders without crashing", function() {
    render(<TodoList/>);
});

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function() {
    const {getByLabelText, queryByText} = render(<TodoList/>);

    expect(queryByText("Do laundry")).not.toBeInTheDocument();

    const todoInput = getByLabelText("New Todo:");
    const submitBtn = queryByText("Add Todo");

    fireEvent.change(todoInput, {target: {value: "Do laundry"}});
    fireEvent.click(submitBtn);

    expect(queryByText("Do laundry")).toBeInTheDocument();
    
});

it("can add and delete a todo", function() {
    const {getByLabelText, queryByText, getByText} = render(<TodoList/>);

    expect(queryByText("Do homework")).not.toBeInTheDocument();

    const todoInput = getByLabelText("New Todo:");
    const submitBtn = queryByText("Add Todo");

    fireEvent.change(todoInput, {target: {value: "Do homework"}});
    fireEvent.click(submitBtn);

    expect(queryByText("Do homework")).toBeInTheDocument();

    const deleteBtn = getByText("X");

    fireEvent.click(deleteBtn);
    expect(queryByText("Do homework")).not.toBeInTheDocument();
    
});