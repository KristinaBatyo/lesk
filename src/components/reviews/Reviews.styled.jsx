import React from 'react';
import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';


export const ContactsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100px;
  height: 30px;
  margin-left: 20px;
  background-color: #025260;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #f5f5f5;
    transform: scale(1.03);
    outline: none;
    color: #025260;
  }
`;



const PaginateContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      margin: 0 5px;
      width: 50px;
      background-color: #025260;

      a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        background-color: #e6e6e6;
        color: white;
        font-size: 24px;
        background-color: #025260;

        &:hover,
        &.active {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }
`;

const CustomPaginate = ({ ...props }) => (
  <PaginateContainer>
    <ReactPaginate
      previousLabel={'>'}
      nextLabel={'<'}
      breakLabel={'...'}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName={'pagination'}
      activeClassName={'active'}
      {...props}
    />
  </PaginateContainer>
);

export default CustomPaginate;
