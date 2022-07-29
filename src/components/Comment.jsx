import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius: 50%;
background-color: #999;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({ theme }) => theme.text};

`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
font-weight: 400;
`;

const Comment = () => {
    return (
        <Container>
            <Avatar src='https://yt3.ggpht.com/yti/APfAmoFEyi4mfHStE7iq7uVxgEqm1peRpBjxPVOfC-Mg5g=s88-c-k-c0x00ffffff-no-rj-mo' />
            <Details>
                <Name>Faisal <Date>1 day ago</Date> </Name>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum adipisci dolore sit nesciunt rem facere architecto sed eaque laboriosam pariatur nihil quis animi tempora impedit omnis, ex voluptate doloribus!</Text>
            </Details>
        </Container>
    )
}

export default Comment