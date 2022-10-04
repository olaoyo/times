import { Link } from "react-router-dom";

import {
  FooterStyles,
  Times,
  Logo,
  Paragraph,
  Year,
  Info,
  SiteMap,
  GoldenHeader,
  Header,
  Contact,
  Span,
  SocialMedia,
  SubscribeNewsLetter,
  SubscribeForm,
  SubscribeDiv,
  SubscribeInput,
  SubscribeButton,
} from "./Footer.styles";

const year = new Date().getFullYear();

function Footer() {
  return (
    <FooterStyles>
      <Times>
        <Link to="/">
          <Logo>TIMES</Logo>
        </Link>
        <Paragraph>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots the roots.
        </Paragraph>
        <Paragraph>
          &copy;&nbsp;<Year>{year}</Year>&nbsp;&nbsp;All Rights Reserved
        </Paragraph>
      </Times>
      <Info>
        <SiteMap>
          <GoldenHeader>Site Map</GoldenHeader>
          <Link to="/">
            <Header>Home</Header>
          </Link>
          <Link to="/products">
            <Paragraph>Products</Paragraph>
          </Link>
          <Paragraph>About</Paragraph>
          <Paragraph>Blog</Paragraph>
        </SiteMap>
        <Contact>
          <GoldenHeader>Contact</GoldenHeader>
          <Header>
            Email:&nbsp;<Span>luxury@times.com</Span>
          </Header>
          <Header>
            Phone:&nbsp;<Span>+880 1000 0000</Span>
          </Header>
          <SocialMedia>
            <span className="material-symbols-sharp">nest_heat_link_gen_3</span>
            <span className="material-symbols-sharp">youtube_activity</span>
            <span className="material-symbols-sharp">location_on</span>
          </SocialMedia>
        </Contact>
        <SubscribeNewsLetter>
          <GoldenHeader>Subscribe Newsletter</GoldenHeader>
          <Paragraph>What looked like a small patch of purple.</Paragraph>
          <SubscribeForm>
            <SubscribeDiv>
              <SubscribeInput
                type="email"
                placeholder="Enter Your Email"
                id="email"
                required
              ></SubscribeInput>
            </SubscribeDiv>
            <SubscribeButton>
              <span className="material-symbols-outlined">arrow_forward</span>
            </SubscribeButton>
          </SubscribeForm>
        </SubscribeNewsLetter>
      </Info>
    </FooterStyles>
  );
}

export default Footer;
