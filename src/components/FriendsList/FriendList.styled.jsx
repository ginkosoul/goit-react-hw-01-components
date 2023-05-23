import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ListItem = styled.li`
    width: 300px;
    max-width:100%;
    display: flex;
    align-items: center;
    padding: 4px 16px;
    border-radius: 8px;
    background-color: white;
    box-shadow:  4px 4px 4px #bebebe,
         -4px -4px 4px #bebebe;
`;

export const AvatarImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 16px;
    background-color: #f2f2f2;
    padding: 4px;
`

export const Status = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color:${({isOnline}) => isOnline ? 'lawngreen' : 'red'};
    margin-right: 16px;
`

export const Name = styled.p`
    margin: 0;
    font-size: 24px;
    line-height: 1.18;
    font-weight: 600;
    text-transform: capitalize;
    color: #434455;
`