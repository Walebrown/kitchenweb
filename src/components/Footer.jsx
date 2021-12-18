import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div` 
    display: flex;
    ${mobile({flexDirection:'column'})}
    `

const Left = styled.div` 
    flex:1;`

const Center = styled.div` 
    flex:1;
    padding:20px;
    ${mobile({display:'none'})}
    `

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:'#fff8f8'})}`

    const Title = styled.h3`
    margin-bottom :30px ;

        `
    const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    `
    const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    `

    const Logo = styled.h1``;
    const Desc = styled.p` 
    margin: 20px 0px;`

    const SocialContainer = styled.div`
    display: flex;
    
        
    `
    const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    `

    const ContactItem = styled.div` 
    margin-bottom:20px;
    display: flex;
    align-items:center;`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Tasty.</Logo>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Rerum, id veniam assumenda, aperiam quaerat non, voluptates quam soluta itaque optio suscipit in. 
                    Fugit architecto ullam blanditiis? Enim quibusdam iste cupiditate.</Desc>
                    <SocialContainer>
                <SocialIcon  color='385999'>
                    <Facebook/> 
                </SocialIcon>
                <SocialIcon color ='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE '>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            </Left>
           
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight:'10px'}}/>  35th Road, Citi-View Estate</ContactItem>
                <ContactItem> <Phone style={{marginRight:'10px'}}/> +234 7034753631</ContactItem>
                <ContactItem> <MailOutline style={{marginRight:'10px'}}/> adewaleakangbe14@gmail.com</ContactItem> 
            </Right>
        </Container>
    )
}

export default Footer
