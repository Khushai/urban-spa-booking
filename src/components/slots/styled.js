import styled from "styled-components";
import {Button} from 'antd'

export const TimeSlotContainer = styled(Button)`
   display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: center;
    width:100%;
    border-radius: 4px;
    height: auto;
    line-height: 36px;
    cursor: pointer;
    border: 1px solid #23A994;
    background-color: #E8F6F4;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 8%);
    color: #23A994;
    font-weight: 600;
    font-size: 13px;
   &:hover {
   background-color: #23A994;
   color:white;
   }
`

export const Price = styled.span`
    line-height: 22px;
    background-color: #78849E;
    border-radius: 4px;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    width:100%;
`;