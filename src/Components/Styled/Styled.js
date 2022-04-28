import styled from "styled-components"

export const AppContainer = styled.div`
color: ${(props) => props.dark ? "#fff" : "#313131"};
background-color: ${(props) => props.dark ? "#1A1A1A" : "#fff"};
/* -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s; */
    transition: all .5s;
`;

export const MoonNav = styled.div`
box-shadow: ${(props) => props.dark ? "0px 4px 40px rgba(255, 255, 255, 0.03);" : "0px 4px 40px rgba(49, 49, 49, 0.08);"};
`;

export const NoomCard = styled.div`
background-color: ${(props) => props.dark ? "#313131" : "inherit"};
`;

export const OriginText = styled.p`
background-color: ${(props) => props.dark ? "#313131" : "#fff"};
color: ${(props) => props.dark ? "#fff" : "#1A1A1A"};
`;

export const Button = styled.button`
background-color: ${(props) => props.dark ? "#fff" : "#313131"};
border: none;
color: white;
display: flex;
align-items: center;
justify-content: center;
width: 180px;
height: 50px;
padding: 10px 15px;
position: relative;
left: 640px;
font-family: "Poppins";
cursor: pointer;
p{
  white-space: nowrap;
  color: ${(props) => props.dark ? "#313131" : "#fff"};
  font-weight: 400;
  font-size: 20px;
  margin: 0px;
  margin-right: 8px;
}
`;

export const Header = styled.header`
h1{
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* border: ${(props) => props.dark ? "2px solid red" : "2px solid pink"}; */
  background-color: ${(props) => props.dark ? "#313131" : "inherit"};
  header{
    text-align: center;
  }
`;

export const BrewGuideCards = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url(${(props) => props.photo});
  background-position: 65%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GuideChemOverlay = styled.div`
display: flex;
align-items: center;
justify-content: center;
h1, h2 {
  font-size: 48px;
  font-weight: 600;
  position: absolute;
  top: 267px;
  margin: 0;
  color: #fff;
}
h2{
  top:332px;
  font-size: 24px;
  font-weight: 300;
  .chemex-carrot{
    margin-left: 15px;
  }
}
`;

export const GuideRightOverlay = styled.div`
  color: #fff;
  position: relative;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
h1{
  font-size: 48px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
}
h2{
  margin: 0px;
  font-size: 24px;
  font-weight: 300;
}
`;