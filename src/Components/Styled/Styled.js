import styled from "styled-components"

export const Button = styled.button`
background-color: #313131;
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
p{
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
  /* width: 1435px; */
  margin-left: auto;
  margin-right: auto;
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