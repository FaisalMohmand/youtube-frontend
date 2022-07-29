import { ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpAltOutlined, AddTaskOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
display: flex;
gap: 24px;
`;

const Content = styled.div`
flex: 5;
`;

const VideoWrapper = styled.div`
`;

const Details = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 16px;
gap:12px
`;

const Info = styled.span` 
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};

`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;

const Hr = styled.hr`
margin: 15px 0;
border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Image = styled.img` 
width: 100%;
height: 220px;
background-color: #999;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`;
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
cursor: pointer;
padding: 10px 20px;
`;

const ChannelImage = styled.img` 
width:50px;
height:50px;
border-radius: 50%;
background-color: #999;
`;

const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span` 
font-size: 14px;
font-weight: 500;
color: ${({ theme }) => theme.textSoft};
margin 9px 0px;
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
font-size: 12px;
color: ${({ theme }) => theme.textSoft};
`

const ChannelDescription = styled.p`
font-size: 14px;

`

const Texts = styled.div` 

`;
const Title = styled.h1` 
font-size: 16px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text}

`;

const Recommendation = styled.div`
flex: 2;
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yIaXoop8gl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>744,859 views - Jun 22, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpAltOutlined /> 123</Button>
                        <Button><ThumbDownOffAltOutlined /> Dislike</Button>
                        <Button><ReplyOutlined /> Share</Button>
                        <Button><AddTaskOutlined /> Save</Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <ChannelImage src='https://yt3.ggpht.com/yti/APfAmoFEyi4mfHStE7iq7uVxgEqm1peRpBjxPVOfC-Mg5g=s88-c-k-c0x00ffffff-no-rj-mo' />
                        <ChannelDetail>
                            <ChannelName>My Channel</ChannelName>
                            <ChannelCounter>938K subscribers</ChannelCounter>
                            <ChannelDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, in reiciendis. Sunt quod, temporibus, incidunt reiciendis dolore distinctio pariatur facere optio laboriosam, numquam ad ratione eligendi. Quae temporibus accusantium magnam.</ChannelDescription>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>

                <Hr />
                <Comments />
            </Content>

            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video