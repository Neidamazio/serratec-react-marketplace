import styled from 'styled-components';

export const Container = styled.div `
    

`


export const Product = styled.div `
    display: flex;
    width: 50%;
    margin-left:auto;
    margin-right: auto;
    padding: 10px;

    img{
        width: 150px;
        height: 150px;
        
        &:hover{
            cursor: pointer;
            opacity: .8;
        }
            
    }

    & + div {
        border-top: 1px solid #ccc;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;    
    
    p {
        margin-top: 5px;
        
    }

    .categoria{
        font-size: 12px;   
    }

    h3{ 
        margin-top: auto;
    }

`