import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Input = styled.div`
    div {
        width: 150px !important;
        margin-left: 5px; 
        div {
            hr:last-child {
                border-bottom: 1px solid #c7c2c2 !important;                
            }
        }
    }
`
export const AddButton = styled.div`
    border: 1px solid #a9a9a9;
    font-size: 17px;
    color: #c7c2c2;
    border-radius: 50px;
    padding: 10px 30px;  
    margin: 7px 0; 
    width: calc(100% * (1/10) - 10px - 1px);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`
