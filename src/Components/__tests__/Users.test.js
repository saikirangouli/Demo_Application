import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen,cleanup} from '@testing-library/react';
import MyButton from "../HomeComponent";
import App from '../../App';
import userEvent from "@testing-library/user-event";
test('is Home page is loaded', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const users = screen.getByText('Users');
  const homeContent = screen.getByText('Create User');
  const home_text = screen.getByText('Home');
  expect(home_text).toBeInTheDocument();
  expect(homeContent).toBeInTheDocument();
  expect(users).toBeInTheDocument();
});


test('renders User list when navigating to /users', () => {
  render(
    <MemoryRouter initialEntries={['/users']}>
      <MyButton />
    </MemoryRouter>
  );
  const users_list_Element =  screen.getByTestId("home-1");
  expect(users_list_Element).toBeInTheDocument();
});


test('Creating user when routing to /create-user', () => {
  render(
    <MemoryRouter initialEntries={['/create-user']}>
      <App />
    </MemoryRouter>
  );
  const users_list_Element = screen.queryByText("Create User");
  expect(users_list_Element).toBeInTheDocument();
});

test("Loads the users page  and clicks a button", () => {
  render(<App />);
  const button = screen.getByText("Users");
  fireEvent.click(button);
  expect(screen.queryByText("User List")).toBeInTheDocument();
});